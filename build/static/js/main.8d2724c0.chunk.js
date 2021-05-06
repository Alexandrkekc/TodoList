(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{51:function(e,t,n){},52:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),o=n(12),r=n.n(o),a=(n(51),n(25)),s=n(37),l=n(38),d=n(42),j=n(41),u=(n(52),n(79)),b=n(2),h=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isOpen:!1},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)(i.a.Fragment,{children:[Object(b.jsx)(u.a,{variant:"contained",onClick:function(){return e.setState({isOpen:!0})},children:"Open modal"}),this.state.isOpen&&Object(b.jsx)("div",{className:"modal",children:Object(b.jsxs)("div",{className:"modal-body",children:[Object(b.jsx)("h1",{children:"Modal title"}),Object(b.jsx)("p",{children:"Modal text"}),Object(b.jsx)(u.a,{variant:"contained",onClick:function(){return e.setState({isOpen:!1})},children:"Close modal"})]})})]})}}]),n}(i.a.Component),O=i.a.createContext(),p=n(83),x=n(40),f=n.n(x),m={li:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:".5rem 1rem",border:"2px solid black",borderRadius:"4px",marginBottom:".5rem",fontSize:"18px"},input:{marginRight:"1rem"}};var g=function(e){var t=e.todo,n=e.index,i=e.onChange,o=Object(c.useContext)(O).removeTodo,r=[];return t.completed&&r.push("done"),Object(b.jsxs)("li",{style:m.li,children:[Object(b.jsxs)("span",{className:r.join(" "),children:[Object(b.jsx)("input",{type:"checkbox",checked:t.completed,style:m.input,onChange:function(){return i(t.id)}}),Object(b.jsx)("strong",{children:++n}),"\xa0",t.title]}),Object(b.jsx)(p.a,{"aria-label":"delete",onClick:function(){return o(t.id)},children:Object(b.jsx)(f.a,{})})]})},v={ul:{listStyle:"none",margin:0,padding:0}};var y=function(e){return Object(b.jsx)("ul",{style:v.ul,children:e.todos.map((function(t,n){return Object(b.jsx)(g,{todo:t,index:n,onChange:e.onToggle},t.id)}))})};function C(){return Object(b.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:".5rem"},children:Object(b.jsx)("div",{className:"lds-circle",children:Object(b.jsx)("div",{})})})}var k=i.a.lazy((function(){return new Promise((function(e){setTimeout((function(){return e(Promise.all([n.e(3),n.e(4)]).then(n.bind(null,110)))}),1e3)}))}));var S=function(){var e=i.a.useState([]),t=Object(a.a)(e,2),n=t[0],o=t[1],r=i.a.useState(!0),s=Object(a.a)(r,2),l=s[0],d=s[1];return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(e){return e.json()})).then((function(e){o(e),d(!1)}))}),[]),Object(b.jsx)(O.Provider,{value:{removeTodo:function(e){o(n.filter((function(t){return t.id!==e})))}},children:Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("h1",{children:"Frontend tutorial"}),Object(b.jsx)(h,{}),Object(b.jsx)(i.a.Suspense,{fallback:Object(b.jsx)(C,{}),children:Object(b.jsx)(k,{onCreate:function(e){o(n.concat([{id:Date.now(),completed:!1,title:e}]))}})}),l&&Object(b.jsx)(C,{}),0!==n.length?Object(b.jsx)(y,{todos:n,onToggle:function(e){o(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))}}):l?null:Object(b.jsx)("p",{children:"\u041d\u0435\u0442 \u0417\u0430\u043f\u0438\u0441\u0435\u0439"})]})})},w=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,112)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),w()}},[[62,1,2]]]);
//# sourceMappingURL=main.8d2724c0.chunk.js.map