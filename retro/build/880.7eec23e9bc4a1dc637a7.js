(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[880],{60880:(e,t,n)=>{"use strict";n.r(t);var i=n(12350),o=n(8727);n(31816);const r=[n.e(5565).then(n.t.bind(n,5565,23)),n.e(5201).then(n.t.bind(n,18587,23)),n.e(1764).then(n.t.bind(n,61764,23)),n.e(4355).then(n.t.bind(n,24355,23))],s=[n.e(2115).then(n.t.bind(n,62115,23)),Promise.all([n.e(4462),n.e(6065),n.e(6927),n.e(4819)]).then(n.bind(n,4462)),n.e(7093).then(n.t.bind(n,51608,23))],a=JSON.parse(o.PageConfig.getOption("disabledExtensions")||"[]");async function l(e,t){try{return(await window._JUPYTERLAB[e].get(t))()}catch(n){throw console.warn(`Failed to create module: package: ${e}; module: ${t}`),n}}!async function(){const e=new i.JupyterLiteServer({});e.registerPluginModules(await Promise.all(r)),await e.start();const{serviceManager:t}=e,d=await Promise.all(s);let u=[n(81237),n(33499),n(1960),n(21364).default.filter((({id:e})=>!["@retrolab/application-extension:logo","@retrolab/application-extension:opener"].includes(e))),n(70071),n(32375),n(63555).default.filter((({id:e})=>["@jupyterlab/apputils-extension:palette","@jupyterlab/apputils-extension:settings","@jupyterlab/apputils-extension:themes-palette-menu"].includes(e))),n(96085).default.filter((({id:e})=>["@jupyterlab/codemirror-extension:services","@jupyterlab/codemirror-extension:codemirror"].includes(e))),n(32295).default.filter((({id:e})=>["@jupyterlab/completer-extension:manager"].includes(e))),n(54146).default.filter((({id:e})=>["@jupyterlab/docmanager-extension:plugin"].includes(e))),n(97484),n(30079),n(43813).default.filter((({id:e})=>["@jupyterlab/notebook-extension:factory","@jupyterlab/notebook-extension:tracker","@jupyterlab/notebook-extension:widget-factory"].includes(e))),n(1045),n(34056),n(13770),n(44417)];switch(o.PageConfig.getOption("retroPage")){case"tree":u=u.concat([n(34679).ZP.filter((({id:e})=>["@jupyterlab/filebrowser-extension:browser","@jupyterlab/filebrowser-extension:factory","@jupyterlab/filebrowser-extension:file-upload-status","@jupyterlab/filebrowser-extension:open-with","@jupyterlab/filebrowser-extension:share-file"].includes(e))),n(50786).default.filter((({id:e})=>"@retrolab/tree-extension:new-terminal"!==e))]);break;case"notebooks":u=u.concat([n(32295).default.filter((({id:e})=>["@jupyterlab/completer-extension:notebooks"].includes(e))),n(79777).default.filter((({id:e})=>["@jupyterlab/tooltip-extension:manager","@jupyterlab/tooltip-extension:notebooks"].includes(e)))]);break;case"edit":u=u.concat([n(32295).default.filter((({id:e})=>["@jupyterlab/completer-extension:files"].includes(e))),n(1763).default.filter((({id:e})=>["@jupyterlab/fileeditor-extension:plugin"].includes(e))),n(34679).ZP.filter((({id:e})=>["@jupyterlab/filebrowser-extension:browser","@jupyterlab/filebrowser-extension:factory"].includes(e)))])}const p=[],c=[],f=[],b=JSON.parse(o.PageConfig.getOption("federated_extensions")),m=new Set;function*y(e){let t;t=e.hasOwnProperty("__esModule")?e.default:e;let n=Array.isArray(t)?t:[t];for(let e of n)a.includes(e.id)||a.includes(e.id.split(":")[0])||(yield e)}b.forEach((e=>{e.extension&&(m.add(e.name),p.push(l(e.name,e.extension))),e.mimeExtension&&(m.add(e.name),c.push(l(e.name,e.mimeExtension))),e.style&&f.push(l(e.name,e.style))})),(await Promise.allSettled(c)).forEach((e=>{if("fulfilled"===e.status)for(let t of y(e.value))d.push(t);else console.error(e.reason)})),(await Promise.allSettled(p)).forEach((e=>{if("fulfilled"===e.status)for(let t of y(e.value))u.push(t);else console.error(e.reason)}));const{RetroApp:g}=n(82336),h=new g({serviceManager:t,mimeExtensions:d});h.name="RetroLite",h.registerPluginModules(u),console.log("Starting app"),await h.start(),console.log(`${h.name} started, waiting for restore`),await h.restored,console.log(`${h.name} restored`)}()},31816:(e,t,n)=>{"use strict";n.r(t),n(81088),n(60734),n(69213),n(42413),n(10139),n(7537),n(19697),n(43981),n(27784),n(56656),n(15619),n(17981),n(51347),n(21499),n(34706),n(60717),n(62562),n(20598),n(58489),n(34232),n(59047)},22383:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var i=n(1799),o=n.n(i),r=n(82609),s=n.n(r)()(o());s.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../../packages/application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const a=s},40227:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var i=n(1799),o=n.n(i),r=n(82609),s=n.n(r)()(o());s.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n","",{version:3,sources:["webpack://./../../packages/iframe-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E;;AAE9E;;EAEE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,YAAY;AACd",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-IFrameContainer iframe,\n.jp-IFrameContainer body {\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  border: none;\n}\n"],sourceRoot:""}]);const a=s},66633:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var i=n(1799),o=n.n(i),r=n(82609),s=n.n(r)()(o());s.push([e.id,"/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n","",{version:3,sources:["webpack://./../../packages/retro-application-extension/style/base.css"],names:[],mappings:"AAAA;;;8EAG8E",sourcesContent:["/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n"],sourceRoot:""}]);const a=s},51347:(e,t,n)=>{var i=n(22383);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.id,i,""]]);n(46062)(i,{insert:"head",singleton:!1}),i.locals&&(e.exports=i.locals)},34706:(e,t,n)=>{var i=n(40227);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.id,i,""]]);n(46062)(i,{insert:"head",singleton:!1}),i.locals&&(e.exports=i.locals)},60717:(e,t,n)=>{var i=n(66633);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.id,i,""]]);n(46062)(i,{insert:"head",singleton:!1}),i.locals&&(e.exports=i.locals)}}]);
//# sourceMappingURL=880.7eec23e9bc4a1dc637a7.js.map