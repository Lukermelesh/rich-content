import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { InlineToolbarButton, RichUtils } from 'wix-rich-content-editor-common';
import spoilerIcon from '../icons/spoilerIcon.svg';

export default class SpoilerButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  handleClick = event => {
    event.preventDefault();
    const { isActive } = this.state;
    ReactTooltip.hide();
    const { getEditorState, setEditorState } = this.props;
    setEditorState(RichUtils.toggleInlineStyle(getEditorState(), 'SPOILER'));
    this.setState({ isActive: !isActive });
  };

  componentWillReceiveProps() {
    this.setState({ isActive: this.isActive() });
  }

  isActive = () => {
    const { getEditorState } = this.props;
    if (getEditorState) {
      return getEditorState()
        .getCurrentInlineStyle()
        .has('SPOILER');
    } else {
      return false;
    }
  };

  render() {
    const { theme, isMobile, tabIndex } = this.props;
    const { isActive } = this.state;
    return (
      <InlineToolbarButton
        onClick={this.handleClick}
        theme={theme}
        isMobile={isMobile}
        tooltipText={'Spoiler'}
        dataHook={'spoilerButton'}
        tabIndex={tabIndex}
        icon={spoilerIcon}
        isActive={isActive}
      />
    );
  }
}

SpoilerButton.propTypes = {
  getEditorState: PropTypes.func.isRequired,
  setEditorState: PropTypes.func.isRequired,
  theme: PropTypes.object,
  isMobile: PropTypes.bool,
  t: PropTypes.func,
  tabIndex: PropTypes.number,
  config: PropTypes.object,
  adjustment: PropTypes.number,
  tooltipKey: PropTypes.string,
  dataHook: PropTypes.string,
  icon: PropTypes.object,
};