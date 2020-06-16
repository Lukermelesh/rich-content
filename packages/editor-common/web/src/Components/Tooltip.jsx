import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { debounce } from 'lodash';
import classnames from 'classnames';
import styles from '../../statics/styles/tooltip.scss';

class Tooltip extends React.Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    moveBy: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['success', 'warning', 'error', 'info', 'light', 'dark']),
    shouldRebuildOnUpdate: PropTypes.func,
    place: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    hideArrowIcon: PropTypes.bool,
  };

  static defaultProps = {
    moveBy: { x: 0, y: 0 },
    type: 'dark',
    shouldRebuildOnUpdate: () => false,
    place: 'top',
  };

  rebuildTooltips = debounce(ReactTooltip.rebuild, 50);

  componentDidMount() {
    this.rebuildTooltips();
  }

  componentDidUpdate() {
    this.props.shouldRebuildOnUpdate() && this.rebuildTooltips();
  }

  render() {
    const { children, content, moveBy, type, place, hideArrowIcon } = this.props || {};
    const className = classnames(styles.tooltip, {
      [styles.tooltipWithoutArrow]: hideArrowIcon,
    });

    return React.Children.map(children, child =>
      React.cloneElement(child, {
        'data-class': className,
        'data-tip': content,
        'data-offset': JSON.stringify({ top: moveBy.y, left: moveBy.x }),
        'data-type': type,
        'data-place': place,
      })
    )[0];
  }
}

export default Tooltip;
