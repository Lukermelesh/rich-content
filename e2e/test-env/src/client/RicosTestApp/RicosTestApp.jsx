import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import windowContentStateHoc from '../WindowContentStateHoc';
import { RichContentViewer } from 'wix-rich-content-viewer';
import { RicosEditor } from 'ricos-editor';
import { RicosViewer } from 'ricos-viewer';
import { default as editorPlugins } from './editorPlugins';
import { default as viewerPlugins } from './viewerPlugins';
import './styles.global.scss';
import theme from '../../../../../examples/main/shared/theme/theme';

class RicosTestApp extends PureComponent {
  renderEditor = () => {
    // const addPluginMenuConfig = {
    //   showSearch: true,
    //   splitToSections: true,
    // };
    // const toolbarSettings = {
    //   getToolbarSettings: () => [
    //     { name: 'SIDE', addPluginMenuConfig },
    //     { name: 'MOBILE', addPluginMenuConfig },
    //   ],
    // };

    const { contentState, onWrapperEditorChange, locale, isMobile, testAppConfig } = this.props;
    return (
      <RicosEditor
        plugins={editorPlugins(testAppConfig.plugins)}
        placeholder={'Add some text!'}
        content={contentState}
        isMobile={isMobile}
        locale={locale}
        cssOverride={theme}
        onChange={onWrapperEditorChange}
        _rcProps={{ config: testAppConfig.pluginsConfig }}
      />
    );
  };

  renderViewer = () => {
    const { isMobile, contentState, locale, seoMode, testAppConfig } = this.props;
    return (
      <RicosViewer
        plugins={viewerPlugins(testAppConfig.plugins)}
        content={contentState}
        isMobile={isMobile}
        locale={locale}
        cssOverride={theme}
      >
        <RichContentViewer seoMode={seoMode} />
      </RicosViewer>
    );
  };

  render() {
    const { isMobile } = this.props;
    return (
      <div className={`testApp ${isMobile ? 'mobile' : ''}`}>
        <div>
          <h3>Editor</h3>
          <div className="rcWrapper rce">{this.renderEditor()}</div>
        </div>
        <div>
          <h3>Viewer</h3>
          <div className="rcWrapper rcv">{this.renderViewer()}</div>
        </div>
      </div>
    );
  }
}

RicosTestApp.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  locale: PropTypes.string,
  contentState: PropTypes.object,
  editorState: PropTypes.object,
  localeResource: PropTypes.object,
  onWrapperEditorChange: PropTypes.func,
  seoMode: PropTypes.bool,
  testAppConfig: PropTypes.object,
};

export default windowContentStateHoc(RicosTestApp);
