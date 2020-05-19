import React from 'react';
import LineSpacingButton from './LineSpacingButton';
import { LINE_SPACING_TYPE } from '../types';
import { LineSpacingIcon } from '../icons';
import Panel from './LineSpacingPanel';
import { decorateComponentWithProps } from 'wix-rich-content-editor-common';

export default config => ({
  TextButtonMapper: () => ({
    LinsSpacing: {
      component: decorateComponentWithProps(LineSpacingButton, config[LINE_SPACING_TYPE]),
      isMobile: true,
    },
  }),
  externalizedButtonProps: [
    {
      modalElement: props => <Panel {...props} {...config} />,
      isActive: () => false,
      icon: config[LINE_SPACING_TYPE]?.toolbar?.icons?.InsertPluginButtonIcon || LineSpacingIcon,
      tooltip: config.t('TextHighlightButton_Tooltip'),
      label: '',
      name: LINE_SPACING_TYPE,
      buttonType: 'modal',
    },
  ],
});
