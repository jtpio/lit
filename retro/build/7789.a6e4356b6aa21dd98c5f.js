(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7789],{57789:(e,s,t)=>{"use strict";t.r(s),t.d(s,{IDocumentProviderFactory:()=>k,ProviderMock:()=>C,WebSocketProviderWithLocks:()=>v});var n=t(80185),c=t(62538),i=t(40870),o=t(23406),a=t(94072),r=t(68078),h=t(65831),d=t(6493),u=t(31955),l=t(75736),w=t(21332),_=t(29849);const f=[];f[0]=(e,s,t,n,c)=>{o.uE(e,0);const i=r.zu(s,e,t.doc,t);n&&i===r.Px&&!t.synced&&(t.synced=!0)},f[3]=(e,s,t,n,c)=>{o.uE(e,1),o.mP(e,d.xq(t.awareness,Array.from(t.awareness.getStates().keys())))},f[1]=(e,s,t,n,c)=>{d.oy(t.awareness,a.HN(s),t)},f[2]=(e,s,t,n,c)=>{h.nw(s,t.doc,m)};const m=(e,s)=>console.warn(`Permission denied to access ${e.url}.\n${s}`),y=(e,s,t)=>{const n=a.l1(s),c=o.Mf(),i=a.yg(n),r=e.messageHandlers[i];return r?r(c,n,e,t,i):console.error("Unable to compute message"),c},b=e=>{if(e.shouldConnect&&null===e.ws){const s=new e._WS(e.url);s.binaryType="arraybuffer",e.ws=s,e.wsconnecting=!0,e.wsconnected=!1,e.synced=!1,s.onmessage=t=>{e.wsLastMessageReceived=i.ZG();const n=y(e,new Uint8Array(t.data),!0);o.kE(n)>1&&s.send(o._f(n))},s.onclose=()=>{e.ws=null,e.wsconnecting=!1,e.wsconnected?(e.wsconnected=!1,e.synced=!1,d.Ag(e.awareness,Array.from(e.awareness.getStates().keys()).filter((s=>s!==e.doc.clientID)),e),e.emit("status",[{status:"disconnected"}])):e.wsUnsuccessfulReconnects++,setTimeout(b,w.VV(1200*w.mv(e.wsUnsuccessfulReconnects+1),2500),e)},s.onopen=()=>{e.wsLastMessageReceived=i.ZG(),e.wsconnecting=!1,e.wsconnected=!0,e.wsUnsuccessfulReconnects=0,e.emit("status",[{status:"connected"}]);const t=o.Mf();if(o.uE(t,0),r._J(t,e.doc),s.send(o._f(t)),null!==e.awareness.getLocalState()){const t=o.Mf();o.uE(t,1),o.mP(t,d.xq(e.awareness,[e.doc.clientID])),s.send(o._f(t))}},e.emit("status",[{status:"connecting"}])}},g=(e,s)=>{e.wsconnected&&e.ws.send(s),e.bcconnected&&e.mux((()=>{c.nY(e.bcChannel,s)}))};class p extends l.y{constructor(e,s,t,{connect:n=!0,awareness:a=new d.GL(t),params:h={},WebSocketPolyfill:l=WebSocket,resyncInterval:w=-1}={}){for(super();"/"===e[e.length-1];)e=e.slice(0,e.length-1);const m=_.b(h);this.bcChannel=e+"/"+s,this.url=e+"/"+s+(0===m.length?"":"?"+m),this.roomname=s,this.doc=t,this._WS=l,this.awareness=a,this.wsconnected=!1,this.wsconnecting=!1,this.bcconnected=!1,this.wsUnsuccessfulReconnects=0,this.messageHandlers=f.slice(),this.mux=u.M(),this._synced=!1,this.ws=null,this.wsLastMessageReceived=0,this.shouldConnect=n,this._resyncInterval=0,w>0&&(this._resyncInterval=setInterval((()=>{if(this.ws){const e=o.Mf();o.uE(e,0),r._J(e,t),this.ws.send(o._f(e))}}),w)),this._bcSubscriber=e=>{this.mux((()=>{const s=y(this,new Uint8Array(e),!1);o.kE(s)>1&&c.nY(this.bcChannel,o._f(s))}))},this._updateHandler=(e,s)=>{if(s!==this){const s=o.Mf();o.uE(s,0),r.lr(s,e),g(this,o._f(s))}},this.doc.on("update",this._updateHandler),this._awarenessUpdateHandler=({added:e,updated:s,removed:t},n)=>{const c=e.concat(s).concat(t),i=o.Mf();o.uE(i,1),o.mP(i,d.xq(a,c)),g(this,o._f(i))},"undefined"!=typeof window&&window.addEventListener("beforeunload",(()=>{d.Ag(this.awareness,[t.clientID],"window unload")})),a.on("update",this._awarenessUpdateHandler),this._checkInterval=setInterval((()=>{this.wsconnected&&3e4<i.ZG()-this.wsLastMessageReceived&&this.ws.close()}),3e3),n&&this.connect()}get synced(){return this._synced}set synced(e){this._synced!==e&&(this._synced=e,this.emit("synced",[e]),this.emit("sync",[e]))}destroy(){0!==this._resyncInterval&&clearInterval(this._resyncInterval),clearInterval(this._checkInterval),this.disconnect(),this.awareness.off("update",this._awarenessUpdateHandler),this.doc.off("update",this._updateHandler),super.destroy()}connectBc(){this.bcconnected||(c.Ld(this.bcChannel,this._bcSubscriber),this.bcconnected=!0),this.mux((()=>{const e=o.Mf();o.uE(e,0),r._J(e,this.doc),c.nY(this.bcChannel,o._f(e));const s=o.Mf();o.uE(s,0),r.K0(s,this.doc),c.nY(this.bcChannel,o._f(s));const t=o.Mf();o.uE(t,3),c.nY(this.bcChannel,o._f(t));const n=o.Mf();o.uE(n,1),o.mP(n,d.xq(this.awareness,[this.doc.clientID])),c.nY(this.bcChannel,o._f(n))}))}disconnectBc(){const e=o.Mf();o.uE(e,1),o.mP(e,d.xq(this.awareness,[this.doc.clientID],new Map)),g(this,o._f(e)),this.bcconnected&&(c.r1(this.bcChannel,this._bcSubscriber),this.bcconnected=!1)}disconnect(){this.shouldConnect=!1,this.disconnectBc(),null!==this.ws&&this.ws.close()}connect(){this.shouldConnect=!0,this.wsconnected||null!==this.ws||(b(this),this.connectBc())}}class v extends p{constructor(e){super(e.url,e.guid,e.ymodel.ydoc,{awareness:e.ymodel.awareness}),this._currentLockRequest=null,this._initialContentRequest=null,this.messageHandlers[127]=(e,s,t,n,c)=>{const i=a.Jl(s),o=this._currentLockRequest;this._currentLockRequest=null,o&&o.resolve(i)},this.messageHandlers[125]=(e,s,t,c,i)=>{const o=a.iU(s);o.byteLength>0&&setTimeout((()=>{n.NG(this.doc,o)}),0);const r=this._initialContentRequest;this._initialContentRequest=null,r&&r.resolve(o.byteLength>0)},this.isInitialized=!1,this.onConnectionStatus=this.onConnectionStatus.bind(this),this.on("status",this.onConnectionStatus)}requestInitialContent(){if(this._initialContentRequest)return this._initialContentRequest.promise;let e,s;const t=new Promise(((t,n)=>{e=t,s=n}));return this._initialContentRequest={promise:t,resolve:e,reject:s},this._sendMessage(new Uint8Array([125])),setTimeout((()=>e(!1)),1e3),t}async onConnectionStatus(e){if(this.isInitialized&&"connected"===e.status){const e=await this.acquireLock();await this.requestInitialContent()||this.putInitializedState(),this.releaseLock(e)}}putInitializedState(){const e=o.Mf();o.uE(e,124),o.HK(e,n.D$(this.doc)),this._sendMessage(o._f(e)),this.isInitialized=!0}acquireLock(){if(this._currentLockRequest)return this._currentLockRequest.promise;this._sendMessage(new Uint8Array([127]));const e=setInterval((()=>{this.wsconnected&&this._sendMessage(new Uint8Array([127]))}),500);let s,t;const n=new Promise(((e,n)=>{s=e,t=n}));this._currentLockRequest={promise:n,resolve:s,reject:t};const c=()=>{clearInterval(e)};return n.then(c,c),n}releaseLock(e){const s=o.Mf();o.uE(s,126),o.Ep(s,e),this._sendMessage(o._f(s))}_sendMessage(e){const s=()=>{setTimeout((()=>{this.wsconnected?this.ws.send(e):this.once("status",s)}),0)};s()}}class C{requestInitialContent(){return Promise.resolve(!1)}putInitializedState(){}acquireLock(){return Promise.resolve(0)}releaseLock(e){}destroy(){}}const k=new(t(66065).Token)("@jupyterlab/docprovider:IDocumentProviderFactory")},62538:(e,s,t)=>{"use strict";t.d(s,{Ld:()=>h,r1:()=>d,nY:()=>u});var n=t(23205),c=t(24803),i=t(55852);const o=new Map,a="undefined"==typeof BroadcastChannel?class{constructor(e){this.room=e,this.onmessage=null,i.z((s=>s.key===e&&null!==this.onmessage&&this.onmessage({data:c.Gh(s.newValue||"")})))}postMessage(e){i.X.setItem(this.room,c.s3(c.eh(e)))}}:BroadcastChannel,r=e=>n.Yu(o,e,(()=>{const s=new Set,t=new a(e);return t.onmessage=e=>s.forEach((s=>s(e.data))),{bc:t,subs:s}})),h=(e,s)=>r(e).subs.add(s),d=(e,s)=>r(e).subs.delete(s),u=(e,s)=>{const t=r(e);t.bc.postMessage(s),t.subs.forEach((e=>e(s)))}},31955:(e,s,t)=>{"use strict";t.d(s,{M:()=>n});const n=()=>{let e=!0;return(s,t)=>{if(e){e=!1;try{s()}finally{e=!0}}else void 0!==t&&t()}}},29849:(e,s,t)=>{"use strict";t.d(s,{b:()=>c});var n=t(69600);const c=e=>n.UI(e,((e,s)=>`${encodeURIComponent(s)}=${encodeURIComponent(e)}`)).join("&")},65831:(e,s,t)=>{"use strict";t.d(s,{nw:()=>c});var n=t(94072);const c=(e,s,t)=>{switch(n.yg(e)){case 0:t(s,n.kf(e))}}},68078:(e,s,t)=>{"use strict";t.d(s,{Px:()=>o,_J:()=>a,K0:()=>r,lr:()=>d,zu:()=>l});var n=t(23406),c=t(94072),i=t(76961);const o=1,a=(e,s)=>{n.uE(e,0);const t=i.gJ(s);n.mP(e,t)},r=(e,s,t)=>{n.uE(e,o),n.mP(e,i.D$(s,t))},h=(e,s,t)=>{try{i.NG(s,c.HN(e),t)}catch(e){console.error("Caught error while handling a Yjs update",e)}},d=(e,s)=>{n.uE(e,2),n.mP(e,s)},u=h,l=(e,s,t,n)=>{const i=c.yg(e);switch(i){case 0:((e,s,t)=>{r(s,t,c.HN(e))})(e,s,t);break;case o:h(e,t,n);break;case 2:u(e,t,n);break;default:throw new Error("Unknown message type")}return i}}}]);
//# sourceMappingURL=7789.a6e4356b6aa21dd98c5f.js.map