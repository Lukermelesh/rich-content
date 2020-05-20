(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return j})),n.d(t,"metadata",(function(){return h})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return g}));var i=n(2),o=n(6),a=n(0),c=n.n(a),r=n(161),s=n(288),b=(n(92),n(251));var l=()=>{const e=document.createElement("div");return Object(a.useEffect)(()=>{document.getElementById("editor-static-toolbar-wrapper").appendChild(e)},[]),c.a.createElement("div",{className:"card",id:"editor-static-toolbar-wrapper"},c.a.createElement(s.a,{toolbarSettings:{textToolbarContainer:e},content:b}))},d=n(13),p=n.n(d);var m=function({children:e}){return p.a.canUseDOM&&null!=e&&c.a.createElement(c.a.Fragment,null,e())},j={id:"ricos-api",title:"Ricos API",sidebar_label:"Ricos API"},h={id:"ricos/ricos-api",title:"Ricos API",description:"## `Ricos Common API`",source:"@site/docs/ricos/ricos-api.mdx",permalink:"/rich-content/docs/ricos/ricos-api",sidebar_label:"Ricos API",sidebar:"api",next:{title:"Plugin Customization",permalink:"/rich-content/docs/plugins_api/PluginCustomization"}};Object(r.b)(m,{fallback:Object(r.b)("div",null)},Object(r.b)(l,null));var O=[{value:"<code>Ricos Common API</code>",id:"ricos-common-api",children:[{value:"<code>children</code>: RichContentEditor | RichContentViewer",id:"children-richcontenteditor--richcontentviewer",children:[]},{value:"<code>content</code>: RicosContent",id:"content-ricoscontent",children:[]},{value:"<code>ref</code>: React.Ref",id:"ref-reactref",children:[]},{value:"<code>isEditor</code>: boolean",id:"iseditor-boolean",children:[]},{value:"<code>isMobile</code>: boolean",id:"ismobile-boolean",children:[]},{value:"<code>locale</code>: string",id:"locale-string",children:[]},{value:"<code>placeholder</code>: string",id:"placeholder-string",children:[]},{value:"<code>plugins</code>: PluginConfig[]",id:"plugins-pluginconfig",children:[]},{value:"<code>toolbarSettings</code>: ToobarSettings",id:"toolbarsettings-toobarsettings",children:[]},{value:"<code>cssOverride</code>: object",id:"cssoverride-object",children:[]},{value:"<code>theme</code>: RicosTheme",id:"theme-ricostheme",children:[]},{value:"<code>onError</code>: OnErrorFunction",id:"onerror-onerrorfunction",children:[]}]}],u={rightToc:O};function g(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"ricos-common-api"},Object(r.b)("inlineCode",{parentName:"h2"},"Ricos Common API")),Object(r.b)("h3",{id:"children-richcontenteditor--richcontentviewer"},Object(r.b)("inlineCode",{parentName:"h3"},"children"),": RichContentEditor | RichContentViewer"),Object(r.b)("p",null,"For backward compatibility. Any prop given to the child component will deeply override the matching prop created in Ricos' internal logic.\nRead mre about backward compatibilityin ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"migrating-from-rich-content"}),"Migrating from rich-content")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx",metastring:"{2}","{2}":!0}),"<RicosEditor isEditor>\n  <RichContentEditor placeholder={'Type here!'} />\n</RicosEditor>\n")),Object(r.b)("h3",{id:"content-ricoscontent"},Object(r.b)("inlineCode",{parentName:"h3"},"content"),": RicosContent"),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"RicosContent")," is an immutable object that saves the entire content created by a ",Object(r.b)("inlineCode",{parentName:"p"},"RicosEditor"),". For ",Object(r.b)("inlineCode",{parentName:"p"},"RicosViewer")," this is a requirement, it will set the content to display. For the ",Object(r.b)("inlineCode",{parentName:"p"},"RicosEditor")," this will set its initial state."),Object(r.b)("h3",{id:"ref-reactref"},Object(r.b)("inlineCode",{parentName:"h3"},"ref"),": React.Ref"),Object(r.b)("p",null,"A react ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://reactjs.org/docs/refs-and-the-dom.html"}),"Ref"),". Use this to access editor functions."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Function"),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"focus(): void")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Focuses the editor")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"blur(): void")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Blurs the editor")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"getContent(postId?: string, forPublish?: boolean): void")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Retrieves the content data")))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"forPublish")," is used for triggering the ",Object(r.b)("inlineCode",{parentName:"p"},"onPublish")," BI event, set it to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when ",Object(r.b)("inlineCode",{parentName:"p"},"getContent")," is called before publishing a an editor's content in your app."))),Object(r.b)("h4",{id:"focus"},"focus:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"class MyComponent extends React.Component {\n  componentDidMount() {\n    this.editor.focus();\n  }\n  render() {}\n}\n")),Object(r.b)("h3",{id:"iseditor-boolean"},Object(r.b)("inlineCode",{parentName:"h3"},"isEditor"),": boolean"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"true")," will render a ",Object(r.b)("inlineCode",{parentName:"p"},"RichContentEditor")," ",Object(r.b)("inlineCode",{parentName:"p"},"false")," will render a ",Object(r.b)("inlineCode",{parentName:"p"},"RichContentViewer")),Object(r.b)("h3",{id:"ismobile-boolean"},Object(r.b)("inlineCode",{parentName:"h3"},"isMobile"),": boolean"),Object(r.b)("p",null,"Will render in mobile optimized mode"),Object(r.b)("h3",{id:"locale-string"},Object(r.b)("inlineCode",{parentName:"h3"},"locale"),": string"),Object(r.b)("p",null,"Any two letter string represing a ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/wix-incubator/rich-content/tree/master/packages/common/web/statics/locale"}),"supported")," locale. Determines the language and text direction."),Object(r.b)("h3",{id:"placeholder-string"},Object(r.b)("inlineCode",{parentName:"h3"},"placeholder"),": string"),Object(r.b)("p",null,"This text will appear in the editor until content is created"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"<RicosEditor placeholder={'The placeholder appears until you start typing'} />\n")),Object(r.b)("div",{className:"card"},Object(r.b)(s.a,{placeholder:"The placeholder appears until you start typing",mdxType:"RicosEditor"})),Object(r.b)("h3",{id:"plugins-pluginconfig"},Object(r.b)("inlineCode",{parentName:"h3"},"plugins"),": PluginConfig[]"),Object(r.b)("p",null,"For every plugin you install, import it and add it to the plugins array."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"import { RicosEditor } from 'ricos-editor';\n\nimport { pluginVideo } from 'wix-rich-content-plugin-video';\nimport 'wix-rich-content-plugin-video/dist/styles.min.css';\n\n<RicosEditor plugins={[pluginVideo()]} />;\n")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"For rendering a viewer, import the plugin from the viewer entry point ",Object(r.b)("br",null)," ",Object(r.b)("inlineCode",{parentName:"p"},"wix-rich-content-plugin-video/dist/module.viewer")))),Object(r.b)("h3",{id:"toolbarsettings-toobarsettings"},Object(r.b)("inlineCode",{parentName:"h3"},"toolbarSettings"),": ToobarSettings"),Object(r.b)("h4",{id:"texttoolbarcontainer-htmlelement"},Object(r.b)("inlineCode",{parentName:"h4"},"textToolbarContainer"),": HTMLElement"),Object(r.b)("p",null,"Given some container HTML element, the text toolbar will be rendered inside it.\nOverrides ",Object(r.b)("inlineCode",{parentName:"p"},"useStaticTextToolbar"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"const RicosWithToolbarContainer = () => {\n  const bottomToolbar = document.createElement('div');\n\n  useEffect(() => {\n    const wrappingDiv = document.getElementById('editor-static-toolbar-wrapper');\n    wrappingDiv.appendChild(bottomToolbar);\n  }, []);\n\n  return (\n    <div id=\"editor-static-toolbar-wrapper\">\n      <RicosEditor toolbarSettings={{ textToolbarContainer: bottomToolbar }} />\n    </div>\n  );\n};\n")),Object(r.b)("p",null,"In this example we render the static text toolbar below the editor."),Object(r.b)("h4",{id:"usestatictexttoolbar-boolean"},Object(r.b)("inlineCode",{parentName:"h4"},"useStaticTextToolbar"),": boolean"),Object(r.b)("p",null,"The text toolbar appears inline when selecting some text and allows styling text.\nSet to true in order to render the text toolbar in a fixed position ",Object(r.b)("strong",{parentName:"p"},"above")," the editor."),Object(r.b)("div",{className:"card"},Object(r.b)(s.a,{toolbarSettings:{useStaticTextToolbar:!0},content:b,mdxType:"RicosEditor"})),Object(r.b)("h4",{id:"gettoolbarsettings-gettoolbarsettings"},Object(r.b)("inlineCode",{parentName:"h4"},"getToolbarSettings"),": GetToolbarSettings"),Object(r.b)("p",null,"TODO"),Object(r.b)("h3",{id:"cssoverride-object"},Object(r.b)("inlineCode",{parentName:"h3"},"cssOverride"),": object"),Object(r.b)("p",null,"CSS class overriding that will be passed to ",Object(r.b)("inlineCode",{parentName:"p"},"RichContentEditor")," or ",Object(r.b)("inlineCode",{parentName:"p"},"RichContentViewer"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Works similarly to the ",Object(r.b)("inlineCode",{parentName:"p"},"theme")," property of ",Object(r.b)("inlineCode",{parentName:"p"},"RichContentEditor")," and ",Object(r.b)("inlineCode",{parentName:"p"},"RichContentViewer"),"."))),Object(r.b)("h3",{id:"theme-ricostheme"},Object(r.b)("inlineCode",{parentName:"h3"},"theme"),": RicosTheme"),Object(r.b)("h4",{id:"palette-palette"},Object(r.b)("inlineCode",{parentName:"h4"},"palette"),": Palette"),Object(r.b)("p",null,"Defines the palette of colors that will be used. More info in ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"theming"}),"Theming")),Object(r.b)("h3",{id:"onerror-onerrorfunction"},Object(r.b)("inlineCode",{parentName:"h3"},"onError"),": OnErrorFunction"),Object(r.b)("p",null,"TODO"))}g.isMDXComponent=!0},250:function(e,t,n){var i={"./messages_ar.json":[331,71],"./messages_bg.json":[332,72],"./messages_cs.json":[333,73],"./messages_da.json":[334,74],"./messages_de.json":[335,75],"./messages_el.json":[336,76],"./messages_en.json":[178],"./messages_es.json":[337,77],"./messages_fi.json":[338,78],"./messages_fr.json":[339,79],"./messages_he.json":[340,80],"./messages_hi.json":[341,81],"./messages_hu.json":[342,82],"./messages_id.json":[343,83],"./messages_it.json":[344,84],"./messages_ja.json":[345,85],"./messages_ko.json":[346,86],"./messages_lt.json":[347,87],"./messages_ms.json":[348,88],"./messages_nl.json":[349,89],"./messages_no.json":[350,90],"./messages_pl.json":[351,91],"./messages_pt.json":[352,92],"./messages_ro.json":[353,93],"./messages_ru.json":[354,94],"./messages_sv.json":[355,95],"./messages_th.json":[356,96],"./messages_tl.json":[357,97],"./messages_tr.json":[358,98],"./messages_uk.json":[359,99],"./messages_zh.json":[360,100]};function o(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(i)},o.id=250,e.exports=o},251:function(e){e.exports=JSON.parse('{"blocks":[{"key":"d79aa","text":"Hi there! I\'m Ricos, your rich content framework. \ud83d\udc7e","type":"header-two","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{},"VERSION":"7.5.0"}')}}]);