import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { mergeStyles } from 'wix-rich-content-common';
import { Tooltip } from 'wix-rich-content-editor-common';
import styles from '../statics/styles/spoiler.scss';

class SpoilerViewer extends Component {
  static propTypes = {
    componentData: PropTypes.object,
    theme: PropTypes.object,
    children: PropTypes.node,
    settings: PropTypes.object,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    isMobile: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    const { theme } = props;
    this.state = { styles: mergeStyles({ styles, theme }), shouldHideText: true };
  }

  handleClick = event => {
    this.state.shouldHideText && event.preventDefault();
    const { disabled } = this.props;
    if (!disabled) this.setState({ shouldHideText: false });
  };

  render() {
    const { children, className, disabled, isMobile } = this.props;
    const { styles, shouldHideText } = this.state;
    const anchorProps = {
      className: className || (shouldHideText ? styles.hideText : styles.revealText),
      onClick: this.handleClick,
    };
    return disabled || isMobile || !shouldHideText ? (
      <div {...anchorProps}>{children}</div>
    ) : (
      <Tooltip content={'Click to reveal'}>
        <div {...anchorProps}>{children}</div>
      </Tooltip>
    );
  }
}

export default SpoilerViewer;
