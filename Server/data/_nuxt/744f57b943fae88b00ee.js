(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{175:function(t,e,n){var content=n(179);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("5db11919",content,!0,{sourceMap:!1})},176:function(t,e,n){var content=n(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("752894d2",content,!0,{sourceMap:!1})},177:function(t,e,n){var content=n(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("6759f5ab",content,!0,{sourceMap:!1})},178:function(t,e,n){"use strict";var r=n(175);n.n(r).a},179:function(t,e,n){(t.exports=n(37)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},180:function(t,e,n){"use strict";var r=n(176);n.n(r).a},181:function(t,e,n){(t.exports=n(37)(!1)).push([t.i,".green[data-v-2e952846]{background:var(--oc-green-1)!important}.green[data-v-2e952846],.red[data-v-2e952846]{color:#000!important}.red[data-v-2e952846]{background:var(--oc-red-5)!important}.disable[data-v-2e952846]{background:var(--oc-orange-0)}.click[data-v-2e952846]{background:#e6fcf5;cursor:pointer}#cell-0[data-v-2e952846]{border:none;color:transparent}.container[data-v-2e952846]{flex-wrap:wrap;width:400px;min-height:0;margin:auto}.cell[data-v-2e952846],.container[data-v-2e952846]{display:-webkit-box;display:flex}.cell[data-v-2e952846]{-webkit-transition:1s linear;transition:1s linear;font-size:30px;font-weight:400;justify-content:space-around;-webkit-box-align:center;align-items:center;width:100px;height:100px;border:1px solid #aaa}.cell[data-v-2e952846]:nth-child(3n){margin-right:0}.cell[data-v-2e952846]:nth-child(27n){margin-bottom:0}.cell-move[data-v-2e952846]{-webkit-transition:-webkit-transform 1s;transition:-webkit-transform 1s;transition:transform 1s;transition:transform 1s,-webkit-transform 1s}",""])},182:function(t,e,n){"use strict";var r=n(177);n.n(r).a},183:function(t,e,n){(t.exports=n(37)(!1)).push([t.i,".container{min-height:50vh;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}.container,.title{display:-webkit-box;display:flex}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-weight:300;font-size:80px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""])},184:function(t,e,n){"use strict";n.r(e);n(39);function r(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n(178);var o=n(23),l=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports,c={props:{cells:{type:Array,required:!0},available:{type:Boolean,default:!0},green:{type:Boolean,default:!1},red:{type:Boolean,default:!1}},data:function(){return{left:-1,right:-1,up:-1,down:-1}},methods:{isClickable:function(t){return t==this.left||(t==this.right||(t==this.up||t==this.down))},move:function(t){this.available&&(t==this.left?this.$emit("move","Right"):t==this.right?this.$emit("move","Left"):t==this.up?this.$emit("move","Down"):t==this.down&&this.$emit("move","Up"))}},watch:{cells:function(t){var e=this.cells.map((function(t){return t.id})).indexOf(0);this.left=e%4<3?this.cells[e+1].id:-1,this.right=0<e%4?this.cells[e-1].id:-1,this.up=e/4<3?this.cells[e+4].id:-1,this.down=1<=e/4?this.cells[e-4].id:-1}}},d=(n(180),Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition-group",{staticClass:"container",attrs:{name:"cell",tag:"div"}},t._l(t.cells,(function(e){return n("div",{key:e.id,class:{cell:!0,click:t.isClickable(e.id)&&t.available,disable:!t.available,green:t.green,red:t.red},style:0==e.distance?"color:var(--oc-green-3)":"color:var(--oc-cyan-"+(e.distance+2)+")",attrs:{id:"cell-"+e.id},on:{click:function(n){return t.move(e.id)}}},[t._v(t._s(0!=e.number?e.number:""))])})),0)}),[],!1,null,"2e952846",null).exports),h=n(35),f=n.n(h);var v={components:{AppLogo:l,Puzzle:d},methods:{Request:function(){var t,e,n=arguments;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"None",r.next=3,regeneratorRuntime.awrap(f.a.post("/php/move.php",{state:this.state,action:t,error:!1}));case 3:return e=r.sent,r.abrupt("return",e.data);case 5:case"end":return r.stop()}}),null,this)},handleMove:function(t){var data;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:return this.available=!1,console.log(t),this.counter+=1,e.next=5,regeneratorRuntime.awrap(this.Request(t));case 5:data=e.sent,this.state=data.state,this.syncState(),this.stepCounter+=1,this.available=!0;case 10:case"end":return e.stop()}}),null,this)},shuffle:function(t){var e=this;this.counter=0,this.stepCounter=0,this.available=!1,this.AIturn=!1,f.a.get("/php/init.php").then((function(t){console.log(t),e.state=t.data,e.syncState(),e.available=!0}))},stop:function(t){this.available=!0,this.AIturn=!1},start:function(t){this.AIturn=!0,this.AIstep()},AIstep:function(){var data,t=this,e=arguments;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.length>0&&void 0!==e[0]&&e[0],this.available=!1,this.AIturn=!0,!this.Finished){n.next=6;break}return this.AIturn=!1,n.abrupt("return");case 6:return n.next=8,regeneratorRuntime.awrap(this.Request("None"));case 8:if(data=n.sent,this.available=!0,console.log(data.error),!data.error&&this.AIturn){n.next=18;break}return this.AIturn=!1,this.red=!0,setTimeout((function(){t.red=!1}),400),n.abrupt("return");case 18:this.state=data.state,this.syncState(),this.stepCounter+=1,this.AIstep(!0);case 22:case"end":return n.stop()}}),null,this)},syncState:function(){for(var t,e,n=(t=this.state,(e=[]).concat.apply(e,r(t))).map((function(t,e){return{id:t,number:t,distance:(n=t,r=e,o=n%4,l=Math.floor(n/4),c=r%4,d=Math.floor(r/4),Math.abs(c-o)+Math.abs(d-l))};var n,r,o,l,c,d})),i=0;i<16;i++){if(n[i].id!=i){this.Finished=!1;break}this.Finished=!0}console.log(n);for(var o=0;o<this.cells.length;o++)this.$set(this.cells,o,n[o])},test:function(t){var e;return regeneratorRuntime.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,regeneratorRuntime.awrap(f.a.post("/api",{state:this.state}));case 3:e=(e=t.sent).data,e.action,console.log(e),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),null,this,[[0,9]])}},data:function(){return{state:[[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]],cells:Array.apply(null,{length:16}).map((function(t,e){return{id:e,number:e}})),available:!0,counter:0,stepCounter:0,red:!1,AIturn:!1,Finished:!1}},mounted:function(){this.shuffle()}},m=(n(182),Object(o.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",[t._m(0),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("Internet Programming project")]),t._v(" "),n("div",{staticClass:"links",staticStyle:{"margin-top":"50px"}},[n("div",{staticClass:"button--green",on:{click:t.shuffle}},[t._v("Shuffle")]),t._v(" "),t.available?n("div",{staticClass:"button--green",on:{click:t.start}},[t._v("Start")]):t._e(),t._v(" "),t.available?t._e():n("div",{staticClass:"button--green",on:{click:t.stop}},[t._v("Stop")])]),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("\n      you helped\n      "),n("div",[t._v(t._s(t.counter))]),t._v("times\n    ")]),t._v(" "),n("Puzzle",{attrs:{cells:this.cells,available:t.available,green:t.Finished,red:t.red},on:{move:t.handleMove}}),t._v(" "),n("h3",{staticClass:"subtitle"},[t._v("Steps: "+t._s(t.stepCounter))]),t._v(" "),n("div",{staticStyle:{margin:"100px"}})],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"title"},[e("div",{staticStyle:{display:"flex",margin:"auto"}},[this._v("\n        AI\n        "),e("div",{staticStyle:{"font-size":"30pt",margin:"40px 10px 0px"}},[this._v("assisted")]),this._v("Puzzle\n      ")])])}],!1,null,null,null));e.default=m.exports}}]);