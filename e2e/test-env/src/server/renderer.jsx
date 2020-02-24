import React from 'react';
import { renderToString } from 'react-dom/server';
import RichContentApp from '../../../../examples/main/shared/RichContentApp';
import StyleContext from 'isomorphic-style-loader/StyleContext';

export default function renderer() {
  return (req, res) => {
    const [componentId, fixtureName = 'empty'] = req.path.replace(/^\/|\/$/g, '').split('/');
    if (componentId !== 'rce') {
      return res.status(404).send(`Component for ${componentId} not found`);
    }

    const isMobile = req.query.mobile === '';
    const locale = req.query.hebrew === '' ? 'he' : 'en';
    const seoMode = req.query.seoMode === '';
    const props = { isMobile, locale, seoMode };

    try {
      props.initialState = require(`../../../tests/fixtures/${fixtureName}.json`);
    } catch (error) {
      console.log(error);
      return res.status(404).send(`Fixture ${fixtureName} not found`);
    }

    const css = new Set();
    const insertCss = (...styles) =>
      styles.forEach(style => {
        css.add(style._getCss());
      });

    res.render('index', {
      html: renderToString(
        <StyleContext.Provider value={{ insertCss }}>
          <RichContentApp mode={'test'} {...props} />
        </StyleContext.Provider>
      ),
      initialState: props.initialState,
      bundleName: 'index',
      isMobile,
      locale,
      cssStyle: Array.from(css).join(''),
    });
  };
}
