import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FileInput, Tooltip, BUTTON_TYPES } from 'wix-rich-content-editor-common';
import { withPluginButtons } from 'wix-rich-content-editor';
import styles from './ExternalToolbar.scss';

class ExternalToolbar extends Component {
  static propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.object).isRequired,
    t: PropTypes.func.isRequired,
    theme: PropTypes.object,
    isMobile: PropTypes.bool.isRequired,
    locale: PropTypes.string,
  };

  state = {};

  renderButton = buttonProps => {
    const { onClick, getIcon, dataHook, isDisabled, isActive, tooltip } = buttonProps;
    const Icon = getIcon();
    const style = isActive() ? { background: 'lightslategray' } : {};
    return (
      <Tooltip content={tooltip} place="right">
        <button disabled={isDisabled()} data-hook={dataHook} onClick={onClick} style={style}>
          <Icon />
        </button>
      </Tooltip>
    );
  };

  renderFileUploadButton = ({
    getIcon,
    onChange,
    accept,
    multiple,
    dataHook,
    isDisabled,
    name,
    tooltip,
  }) => {
    const Icon = getIcon();
    return (
      <FileInput
        disabled={isDisabled()}
        dataHook={dataHook}
        onChange={onChange}
        accept={accept}
        multiple={multiple}
        key={name}
      >
        <Tooltip content={tooltip} place="right">
          <Icon />
        </Tooltip>
      </FileInput>
    );
  };

  render() {
    const { buttons } = this.props;
    return (
      <div className={styles.toolbar}>
        {Object.values(buttons).map(buttonProps =>
          buttonProps.type === BUTTON_TYPES.FILE
            ? this.renderFileUploadButton(buttonProps)
            : this.renderButton(buttonProps)
        )}
      </div>
    );
  }
}

export default withPluginButtons(ExternalToolbar);
