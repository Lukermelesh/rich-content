import {
  createBasePlugin,
  insertLinkInPosition,
  fixPastedLinks,
  hasLinksInSelection,
  getVisibleSelectionRect,
} from 'wix-rich-content-editor-common';
import {
  addLinkPreview,
  LINK_PREVIEW_TYPE,
} from 'wix-rich-content-plugin-link-preview/dist/lib/utils';
import { isValidUrl } from 'wix-rich-content-common';
import React from 'react';
import { LINK_TYPE } from './types';
import { Component } from './LinkComponent';
import { linkEntityStrategy } from './strategy';
import createLinkToolbar from './toolbar/createToolbar';

const createLinkPlugin = (config = {}) => {
  const type = LINK_TYPE;
  const { theme, anchorTarget, relValue, [type]: settings = {}, commonPubsub, ...rest } = config;
  const targetBlank = anchorTarget === '_blank';
  const nofollow = relValue === 'nofollow';
  settings.minLinkifyLength = settings.minLinkifyLength || 6;
  const toolbar = createLinkToolbar({ ...config, closeInlinePluginToolbar });

  const decorators = [
    { strategy: linkEntityStrategy, component: props => <Component {...props} theme={theme} /> },
  ];
  let linkifyData;

  const handleReturn = (event, editorState) => {
    linkifyData = getLinkifyData(editorState);
    if (shouldConvertToLinkPreview(settings, linkifyData)) {
      const url = getBlockLinkUrl(linkifyData);
      const blockKey = linkifyData.block.key;
      if (url) {
        addLinkPreview(editorState, config, blockKey, url);
      }
    }
  };

  const shouldConvertToLinkPreview = (settings, linkifyData) =>
    linkifyData && linkifyData.block?.type === 'unstyled' && config[LINK_PREVIEW_TYPE];

  const getBlockLinkUrl = linkifyData => {
    const { string, block } = linkifyData;
    if (block.getText() === string) {
      return string;
    }
  };

  const handleBeforeInput = (chars, editorState) => {
    if (/\s/.test(chars)) {
      linkifyData = getLinkifyData(editorState);
    }
  };

  let prevContentState;
  const isPasteChange = editorState => {
    const contentState = editorState.getCurrentContent();
    const contentChanged = contentState !== prevContentState;
    prevContentState = contentState;
    return contentChanged && editorState.getLastChangeType() === 'insert-fragment';
  };

  function openInlinePluginToolbar(commonPubsubData) {
    commonPubsub.set('cursorOnInlinePlugin', commonPubsubData);
  }
  function closeInlinePluginToolbar() {
    commonPubsub.set('cursorOnInlinePlugin', null);
  }

  const onChange = editorState => {
    const selection = editorState.getSelection();
    if (hasLinksInSelection(editorState) && selection.isCollapsed()) {
      const boundingRect = getVisibleSelectionRect(window);
      openInlinePluginToolbar({ type, boundingRect });
    } else {
      closeInlinePluginToolbar();
    }
    let newEditorState = editorState;
    if (isPasteChange(editorState)) {
      newEditorState = fixPastedLinks(editorState, { anchorTarget, relValue });
    } else if (linkifyData) {
      newEditorState = addLinkAt(linkifyData, editorState);
    }
    linkifyData = false;
    return newEditorState;
  };

  const getLinkifyData = editorState => {
    const strData = findLastStringWithNoSpaces(editorState);
    return shouldLinkify(strData) && strData;
  };

  const shouldLinkify = consecutiveString =>
    consecutiveString.string.length >= settings.minLinkifyLength &&
    isValidUrl(consecutiveString.string) &&
    !(rangeContainsEntity(consecutiveString) && blockContainsPlainText(consecutiveString));

  const findLastStringWithNoSpaces = editorState => {
    const selection = editorState.getSelection();
    const blockKey = selection.getAnchorKey();
    const block = editorState.getCurrentContent().getBlockForKey(blockKey);
    const text = block.getText();
    const endIndex = selection.getEndOffset();
    const index = text.lastIndexOf(' ', endIndex) + 1;
    const string = text.slice(index, endIndex);
    return { string, block, blockKey, index, endIndex };
  };

  const rangeContainsEntity = ({ block, index, endIndex }) => {
    // eslint-disable-next-line fp/no-loops
    for (let i = index; i < endIndex; i++) {
      if (block.getEntityAt(i) !== null) {
        return true;
      }
    }
    return false;
  };

  const blockContainsPlainText = ({ block, string }) => block.text.length > string.length;

  const addLinkAt = ({ string, index, endIndex, blockKey }, editorState) => {
    return insertLinkInPosition(editorState, blockKey, index, endIndex, {
      url: string,
      anchorTarget,
      relValue,
      targetBlank,
      nofollow,
    });
  };

  return createBasePlugin(
    {
      theme,
      toolbar,
      type,
      anchorTarget,
      relValue,
      settings,
      commonPubsub,
      ...rest,
    },
    { decorators, handleBeforeInput, handleReturn, onChange }
  );
};

export { createLinkPlugin };
