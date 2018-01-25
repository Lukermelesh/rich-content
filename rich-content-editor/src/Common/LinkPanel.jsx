import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Tooltip from 'wix-style-react/dist/src/Tooltip';

import { ThemeProvider } from '../Common/theme-provider';
import { isValidUrl } from './url-validator';
import ErrorIcon from './icons/error.svg';
import Styles from './link-panel.scss';
import RadioGroupHorizontal from './stylable-base/radio-group-horizontal';

const LinkType = props => (
  <RadioGroupHorizontal
    dataSource={[{ value: 'url', labelText: 'Website address (URL)' }, { value: 'page', labelText: 'Site Page' }]}
    {...props}
  />
);

LinkType.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

class LinkPanel extends Component {
  constructor(props) {
    super(props);
    const { url, targetBlank, nofollow } = props;
    this.state = {
      intermediateUrl: url || '',
      url: url || '',
      isValidUrl: true,
      targetBlank: targetBlank || true,
      nofollow: nofollow || false,
    };
  }

  handleIntermediateUrlChange = event => {
    this.setState({ intermediateUrl: event.target.value });
  };

  handleUrlChange = () => {
    const { intermediateUrl } = this.state;
    this.setState({ url: intermediateUrl });
  };

  handleTargetChange = event => {
    this.setState({ targetBlank: event.target.checked });
  };

  handleNofollowChange = event => {
    this.setState({ nofollow: event.target.checked });
  };

  onBlur = e => {
    e.stopPropagation();
    const { intermediateUrl } = this.state;
    if (isValidUrl(intermediateUrl)) {
      this.handleUrlChange();
      this.setState({ isValidUrl: true });
    } else {
      this.setState({ isValidUrl: false });
    }
  };

  handleKeyPress = e => {
    if (e.charCode === 13) {
      this.onBlur();
    }
  };

  onDoneClick = () => {
    const { url, targetBlank, nofollow } = this.state;
    this.props.onDone && this.props.onDone({ url, targetBlank, nofollow });
  };

  onCancelClick = () => this.props.onCancel && this.props.onCancel();

  render() {
    const firstCheckboxText = 'Open Link in New Window / Tab';
    const secondCheckboxText = 'Add rel="nofollow" to link';
    return (
      <ThemeProvider theme={'default'}>
        <div className={Styles.modal}>
          {/*<LinkType
            value="url"
          />*/}
          <div onKeyPress={this.handleKeyPress}>
            <div className={Styles.textInput}>
              <input
                ref={ref => (this.input = ref)}
                className={classNames({ [Styles.invalid]: !this.state.isValidUrl })}
                placeholder="e.g. www.wix.com"
                onChange={this.handleIntermediateUrlChange}
                onBlur={this.onBlur}
                value={this.state.intermediateUrl}
              />
              {this.state.isValidUrl ? null : (
                <Tooltip
                  content={'Invalid URL. Try Again'}
                  textAlign="center"
                  maxWidth=""
                  shouldCloseOnClickOutside
                  theme="dark"
                >
                  <ErrorIcon className={Styles.errorIcon} />
                </Tooltip>
              )}
            </div>
          </div>
          <div className={Styles.checkboxContainer}>
            <input type="checkbox" id="firstCheckboxLinkPanel" onChange={this.handleTargetChange} defaultChecked={this.state.targetBlank}/>
            <label htmlFor="firstCheckboxLinkPanel">{firstCheckboxText}</label>
          </div>
          <div className={Styles.checkboxContainer}>
            <input type="checkbox" id="secondCheckboxLinkPanel" onChange={this.handleNofollowChange} defaultChecked={this.state.nofollow}/>
            <label htmlFor="secondCheckboxLinkPanel">{secondCheckboxText}</label>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

LinkPanel.propTypes = {
  onDone: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  url: PropTypes.string,
  targetBlank: PropTypes.bool,
  nofollow: PropTypes.bool,
};

export default LinkPanel;
