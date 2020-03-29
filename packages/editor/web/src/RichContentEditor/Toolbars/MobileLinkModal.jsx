import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LinkPanelContainer, NewLinkPanelContainer } from 'wix-rich-content-editor-common';

export default class MobileLinkModal extends Component {
  render() {
    const {
      url,
      targetBlank,
      anchorTarget,
      relValue,
      nofollow,
      theme,
      isMobile,
      isActive,
      onDone,
      onCancel,
      onDelete,
      t,
      uiSettings,
      getEditorState,
      setEditorState,
      unchangedUrl,
    } = this.props;
    const baseLinkProps = {
      getEditorState,
      setEditorState,
      url,
      targetBlank,
      anchorTarget,
      relValue,
      nofollow,
      theme,
      isActive,
      isMobile,
      onDone,
      onCancel,
      onDelete,
      t,
      ariaProps: { 'aria-labelledby': 'mob_link_modal_hdr' },
      uiSettings,
    };
    return unchangedUrl ? (
      <div>
        <LinkPanelContainer {...baseLinkProps} unchangedUrl={unchangedUrl} />
      </div>
    ) : (
      <div>
        <NewLinkPanelContainer {...baseLinkProps} />
      </div>
    );
  }
}

MobileLinkModal.propTypes = {
  getEditorState: PropTypes.func.isRequired,
  setEditorState: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  onDone: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
  isMobile: PropTypes.bool,
  url: PropTypes.string,
  targetBlank: PropTypes.bool,
  anchorTarget: PropTypes.string,
  relValue: PropTypes.string,
  nofollow: PropTypes.bool,
  t: PropTypes.func,
  uiSettings: PropTypes.object,
  unchangedUrl: PropTypes.bool,
};
