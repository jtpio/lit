(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2099,688],{52099:(e,t,s)=>{"use strict";s.r(t),s.d(t,{editorSyntaxStatus:()=>_,default:()=>f});var o,a=s(26260),n=s.n(a),r=s(77031),i=s(88647),c=s(94257),d=s(64662),l=s(67106),m=s(40100),u=s(44588),g=s(34016),h=s(17179);!function(e){e.changeKeyMap="codemirror:change-keymap",e.changeTheme="codemirror:change-theme",e.changeMode="codemirror:change-mode",e.find="codemirror:find",e.goToLine="codemirror:go-to-line"}(o||(o={}));const p={id:"@jupyterlab/codemirror-extension:codemirror",provides:l.ICodeMirror,activate:function(e){return new x}},y={id:"@jupyterlab/codemirror-extension:services",provides:d.IEditorServices,activate:function(e){return n().prototype.save=()=>{e.commands.execute("docmanager:save")},l.editorServices}},b={id:"@jupyterlab/codemirror-extension:commands",requires:[m.IEditorTracker,u.ISettingRegistry,h.ITranslator,l.ICodeMirror],optional:[c.IMainMenu],activate:function(e,t,a,n,i,c){const d=n.load("jupyterlab"),{commands:m,restored:u}=e;let{theme:g,keyMap:h,scrollPastEnd:p,styleActiveLine:y,styleSelectedText:b,selectionPointer:_,lineWiseCopyCut:f}=l.CodeMirrorEditor.defaultConfig;async function x(e){var t,o,a,n,r;if(h=e.get("keyMap").composite||h,"vim"===h&&await i.ensureVimKeymap(),g=e.get("theme").composite||g,"jupyter"!==g&&"default"!==g){const e="solarized light"===g||"solarized dark"===g?"solarized":g;await s(98908)(`./${e}.css`)}p=null!==(t=e.get("scrollPastEnd").composite)&&void 0!==t?t:p,y=null!==(o=e.get("styleActiveLine").composite)&&void 0!==o?o:y,b=null!==(a=e.get("styleSelectedText").composite)&&void 0!==a?a:b,_=null!==(n=e.get("selectionPointer").composite)&&void 0!==n?n:_,f=null!==(r=e.get("lineWiseCopyCut").composite)&&void 0!==r?r:f}const M={keyMap:h,theme:g,scrollPastEnd:p,styleActiveLine:y,styleSelectedText:b,selectionPointer:_,lineWiseCopyCut:f};function T(){t.forEach((e=>{e.content.editor instanceof l.CodeMirrorEditor&&e.content.editor.setOptions(M)}))}function v(){return null!==t.currentWidget&&t.currentWidget===e.shell.currentWidget}Promise.all([a.load(k),u]).then((async([e])=>{await x(e),T(),e.changed.connect((async()=>{await x(e),T()}))})).catch((e=>{console.error(e.message),T()})),t.widgetAdded.connect(((e,t)=>{t.content.editor instanceof l.CodeMirrorEditor&&t.content.editor.setOptions(M)}));const C=new r.Menu({commands:m}),E=new r.Menu({commands:m}),w=new r.Menu({commands:m});C.title.label=d.__("Text Editor Theme"),E.title.label=d.__("Text Editor Key Map"),w.title.label=d.__("Text Editor Syntax Highlighting"),m.addCommand(o.changeTheme,{label:e=>"default"===e.theme?d.__("codemirror"):e.displayName,execute:e=>{const t=g=e.theme||g;return a.set(k,"theme",t).catch((e=>{console.error(`Failed to set ${k}:theme - ${e.message}`)}))},isToggled:e=>e.theme===g}),m.addCommand(o.changeKeyMap,{label:e=>{const t=e.displayName;return"sublime"===e.keyMap?d.__("Sublime Text"):t},execute:e=>{const t=h=e.keyMap||h;return a.set(k,"keyMap",t).catch((e=>{console.error(`Failed to set ${k}:keyMap - ${e.message}`)}))},isToggled:e=>e.keyMap===h}),m.addCommand(o.find,{label:d.__("Find..."),execute:()=>{const e=t.currentWidget;e&&e.content.editor.execCommand("find")},isEnabled:v}),m.addCommand(o.goToLine,{label:d.__("Go to Line..."),execute:()=>{const e=t.currentWidget;e&&e.content.editor.execCommand("jumpToLine")},isEnabled:v}),m.addCommand(o.changeMode,{label:e=>e.name,execute:e=>{const s=e.name,o=t.currentWidget;if(s&&o){const e=l.Mode.findByName(s);e&&(o.content.model.mimeType=e.mime)}},isEnabled:v,isToggled:e=>{const s=t.currentWidget;if(!s)return!1;const o=s.content.model.mimeType,a=l.Mode.findByMIME(o),n=a&&a.name;return e.name===n}}),l.Mode.getModeInfo().sort(((e,t)=>{const s=e.name||"",o=t.name||"";return s.localeCompare(o)})).forEach((e=>{0!==e.mode.indexOf("brainf")&&w.addItem({command:o.changeMode,args:Object.assign({},e)})})),[["jupyter",d.__("jupyter")],["default",d.__("default")],["abcdef",d.__("abcdef")],["base16-dark",d.__("base16-dark")],["base16-light",d.__("base16-light")],["hopscotch",d.__("hopscotch")],["material",d.__("material")],["mbo",d.__("mbo")],["mdn-like",d.__("mdn-like")],["seti",d.__("seti")],["solarized dark",d.__("solarized dark")],["solarized light",d.__("solarized light")],["the-matrix",d.__("the-matrix")],["xq-light",d.__("xq-light")],["zenburn",d.__("zenburn")]].forEach((([e,t])=>C.addItem({command:o.changeTheme,args:{theme:e,displayName:t}}))),[["default",d.__("default")],["sublime",d.__("sublime")],["vim",d.__("vim")],["emacs",d.__("emacs")]].forEach((([e,t])=>{E.addItem({command:o.changeKeyMap,args:{keyMap:e,displayName:t}})})),c&&(c.settingsMenu.addGroup([{type:"submenu",submenu:E},{type:"submenu",submenu:C}],10),c.viewMenu.addGroup([{type:"submenu",submenu:w}],40),c.editMenu.goToLiners.add({tracker:t,goToLine:e=>{e.content.editor.execCommand("jumpToLine")}}))},autoStart:!0},_={id:"@jupyterlab/codemirror-extension:editor-syntax-status",autoStart:!0,requires:[m.IEditorTracker,i.ILabShell,h.ITranslator],optional:[g.IStatusBar],activate:(e,t,s,o,a)=>{if(!a)return;const n=new l.EditorSyntaxStatus({commands:e.commands,translator:o});s.currentChanged.connect((()=>{const e=s.currentWidget;e&&t.has(e)&&n.model&&(n.model.editor=e.content.editor)})),a.registerStatusItem("@jupyterlab/codemirror-extension:editor-syntax-status",{item:n,align:"left",rank:0,isActive:()=>!!s.currentWidget&&!!t.currentWidget&&s.currentWidget===t.currentWidget})}},f=[b,y,_,p],k=b.id;class x{get CodeMirror(){return n()}async ensureVimKeymap(){"Vim"in n()||await Promise.all([s.e(3326),s.e(8133),s.e(832)]).then(s.t.bind(s,50832,23))}}},98908:(e,t,s)=>{var o={"./3024-day.css":[5210,5210],"./3024-night.css":[37123,7123],"./abbott.css":[54896,4896],"./abcdef.css":[55169,5169],"./ambiance-mobile.css":[17677,7677],"./ambiance.css":[22607,2607],"./ayu-dark.css":[29335,9335],"./ayu-mirage.css":[59304,9304],"./base16-dark.css":[95273,5273],"./base16-light.css":[19554,9554],"./bespin.css":[49078,9078],"./blackboard.css":[75086,5086],"./cobalt.css":[66866,6866],"./colorforth.css":[27497,7497],"./darcula.css":[23989,3989],"./dracula.css":[86764,6764],"./duotone-dark.css":[41626,1626],"./duotone-light.css":[41831,1831],"./eclipse.css":[14606,4606],"./elegant.css":[33993,3993],"./erlang-dark.css":[76649,6649],"./gruvbox-dark.css":[25124,5124],"./hopscotch.css":[48797,8797],"./icecoder.css":[66074,6074],"./idea.css":[56787,6787],"./isotope.css":[96502,6502],"./lesser-dark.css":[30406,406],"./liquibyte.css":[30111,111],"./lucario.css":[15082,8587],"./material-darker.css":[74855,4855],"./material-ocean.css":[50257,257],"./material-palenight.css":[56756,6756],"./material.css":[10382,382],"./mbo.css":[50451,451],"./mdn-like.css":[86472,6472],"./midnight.css":[53217,3217],"./monokai.css":[98078,8078],"./moxer.css":[55185,5185],"./neat.css":[44911,4911],"./neo.css":[76092,6092],"./night.css":[5792,5792],"./nord.css":[86322,6322],"./oceanic-next.css":[93515,3515],"./panda-syntax.css":[31609,1609],"./paraiso-dark.css":[1361,1361],"./paraiso-light.css":[98142,8142],"./pastel-on-dark.css":[90141,141],"./railscasts.css":[59854,9854],"./rubyblue.css":[96724,6724],"./seti.css":[12763,2763],"./shadowfox.css":[53569,3569],"./solarized.css":[29496,9496],"./ssms.css":[61307,1307],"./the-matrix.css":[18035,8035],"./tomorrow-night-bright.css":[58585,8585],"./tomorrow-night-eighties.css":[99656,9656],"./ttcn.css":[42336,2336],"./twilight.css":[36946,6946],"./vibrant-ink.css":[96089,6089],"./xq-dark.css":[8464,8464],"./xq-light.css":[41885,1885],"./yeti.css":[22980,2980],"./yonce.css":[6570,6570],"./zenburn.css":[39439,9439]};function a(e){if(!s.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],a=t[0];return s.e(t[1]).then((()=>s.t(a,7)))}a.keys=()=>Object.keys(o),a.id=98908,e.exports=a}}]);
//# sourceMappingURL=2099.0b0eeef45395a445e5bd.js.map