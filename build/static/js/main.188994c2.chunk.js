(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{10:function(t,n,e){},12:function(t,n,e){"use strict";e.r(n);var r=e(1),c=e.n(r),o=e(5),i=e.n(o),u=(e(10),e(2)),a=e(4),f=e(0),s=window.screen.width/20,b=[[0,1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1],[1,0],[-1,0]],l=function(){for(var t=[],n=0;n<30;n++)t.push(Array.from(Array(s),(function(){return 0})));return t},d=function(){var t=Object(r.useState)((function(){return l()})),n=Object(u.a)(t,2),e=n[0],c=n[1],o=Object(r.useState)(!1),i=Object(u.a)(o,2),d=i[0],j=i[1],h=Object(r.useRef)(d);h.current=d;var O=Object(r.useCallback)((function(){h.current&&(c((function(t){return Object(a.a)(t,(function(n){for(var e=function(e){for(var r=function(r){var c=0;b.forEach((function(n){var o=Object(u.a)(n,2),i=o[0],a=o[1],f=e+i,b=r+a;f>=0&&f<30&&b>=0&&b<s&&(c+=t[f][b])})),c<2||c>3?n[e][r]=0:0===t[e][r]&&3===c&&(n[e][r]=1)},c=0;c<s;c++)r(c)},r=0;r<30;r++)e(r)}))})),setTimeout(O,1e3))}),[]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{onClick:function(){j(!d),d||(h.current=!0,O())},children:d?"stop":"start"}),Object(f.jsx)("button",{onClick:function(){for(var t=[],n=0;n<30;n++)t.push(Array.from(Array(s),(function(){return Math.random()>.7?1:0})));c(t)},children:"random"}),Object(f.jsx)("button",{onClick:function(){c(l())},children:"clear"}),Object(f.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(s,", 20px)")},children:e.map((function(t,n){return t.map((function(t,r){return Object(f.jsx)("div",{onClick:function(){var t=Object(a.a)(e,(function(t){t[n][r]=e[n][r]?0:1}));c(t)},style:{width:20,height:20,backgroundColor:e[n][r]?"#64ffda":"black",border:"solid 1px #383838"}},"".concat(n,"-").concat(r))}))}))})]})},j=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,13)).then((function(n){var e=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,i=n.getTTFB;e(t),r(t),c(t),o(t),i(t)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(d,{})}),document.getElementById("root")),j()}},[[12,1,2]]]);
//# sourceMappingURL=main.188994c2.chunk.js.map