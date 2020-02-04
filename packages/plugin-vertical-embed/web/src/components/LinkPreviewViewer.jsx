import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { mergeStyles, Context } from 'wix-rich-content-common';
import styles from '../../statics/styles/link-preview.scss';
import ReadMore from './ReadMore';

class LinkPreviewViewer extends Component {
  static propTypes = {
    componentData: PropTypes.object.isRequired,
    settings: PropTypes.shape({
      fetchMetadata: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    if (!this.state.metadata) {
      // const url = normalizeUrl(this.props.componentData.url);
      const metadata = await this.props.settings.fetchMetadata();
      this.setState({ metadata });
    }
  }

  render() {
    this.styles = this.styles || mergeStyles({ styles, theme: this.context.theme });
    if (!this.state.metadata) {
      return null;
    }
    return (
      <a
        className={styles.linkPreview_link}
        href={this.state.metadata.url}
        target={this.context.anchorTarget}
        rel={this.context.relValue}
      >
        <figure className={styles.linkPreview}>
          <section className={styles.linkPreview_info}>
            <figcaption className={styles.linkPreview_title}>
              <ReadMore lines={1} text={this.state.metadata.title} label="" />
            </figcaption>
            <p className={this.styles.linkPreview_description}>
              <ReadMore text={this.state.metadata.description} label="" />
            </p>
            <footer className={styles.linkPreview_footer}>{this.state.metadata.url}</footer>
          </section>
          <img
            className={styles.linkPreview_image}
            src={this.state.metadata.thumbnail_url}
            alt={this.state.metadata.title}
          />
        </figure>
      </a>
    );
  }
}

LinkPreviewViewer.contextType = Context.type;

export default LinkPreviewViewer;
