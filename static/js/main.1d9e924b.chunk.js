(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{34:function(t,n,e){"use strict";e.r(n);var o=e(1),i=e(0),r=e.n(i),a=e(10),c=e.n(a),u=e(3),d=e(4),l=e(5);function s(){var t=Object(d.a)(['\n  display: flex;\n  margin: auto 0px;\n  padding: 5px;\n  color: grey;\n  align-items: center;\n  input [type="button"] {\n    width: 83px;\n  }\n  input {\n    height: 25px;\n    box-sizing: border-box;\n  }\n']);return s=function(){return t},t}function p(){var t=Object(d.a)(['\n  position: absolute;\n  right: 471px;\n  input [type="text"] {\n    width: 70px;\n  }\n']);return p=function(){return t},t}function j(){var t=Object(d.a)(["\n  display: flex;\n  vertical-align: middle;\n  ","\n  font-size : 25px;\n  padding-left: 30px;\n"]);return j=function(){return t},t}function b(){var t=Object(d.a)(["\n  display: flex;\n  paddingleft: 100px;\n  margin: 3px auto;\n  color: grey;\n"]);return b=function(){return t},t}function f(){var t=Object(d.a)(["\n  display: flex;\n  margin-bottom: 10px;\n  border: 1px solid grey;\n  border-radius: 10px;\n  justify-content: space-between;\n"]);return f=function(){return t},t}function x(){var t=Object(d.a)(["\n  margin: 10px 0px;\n  input {\n    margin-left: 5px;\n  }\n"]);return x=function(){return t},t}function O(){var t=Object(d.a)(["\n  display: flex;\n"]);return O=function(){return t},t}function v(){var t=Object(d.a)(["\n  display: block;\n  max-width: 900px;\n  min-height: 500px;\n  margin: 10px auto;\n"]);return v=function(){return t},t}var y=l.a.div(v()),h=(l.a.div(O()),l.a.div(x())),g=l.a.div(f()),m=l.a.p(b()),D=l.a.div(j(),(function(t){return t.isDone&&"text-decoration: line-through;\n    color: gray;"})),C=l.a.div(p()),k=l.a.div(s()),w=e(20),I=function(t){return t.todoState.todos},S=function(t){return t.filterState.filter},T="clearAll",z="addTodo",A="deleteTodo",J="updateTodo",B="updateFilter";function E(t,n,e){return{type:J,payload:{id:n,target:t,newContent:e}}}function F(){var t=Object(u.b)();return Object(o.jsx)(h,{children:Object(o.jsx)("input",{type:"button",value:"clear all",onClick:function(){t({type:T})}})})}function L(){var t=r.a.useState(""),n=Object(w.a)(t,2),e=n[0],i=n[1],a=Object(u.b)();return Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"text",placeholder:"creat todo",value:e,onChange:function(t){i(t.target.value)}}),Object(o.jsx)("input",{type:"submit",onClick:function(){a({type:z,payload:{content:e}}),i("")},value:"Add Todo"})]})}function q(){var t=Object(u.b)(),n=function(n){var e;t((e=n.target.value,{type:B,payload:e}))};return Object(o.jsxs)(h,{children:[Object(o.jsx)("input",{type:"button",value:"all",onClick:n}),Object(o.jsx)("input",{type:"button",value:"isDone",onClick:n}),Object(o.jsx)("input",{type:"button",value:"unDone",onClick:n})]})}function G(){var t=Object(u.c)(S),n=Object(u.c)(I),e=Object(u.b)();return Object(o.jsx)("div",{children:n.filter((function(n){return function(t,n){switch(t){case"isDone":return n;case"unDone":return!n;default:return!0}}(t,n.isDone)})).map((function(t){return Object(o.jsxs)(g,{children:[Object(o.jsx)(D,{isDone:t.isDone,children:t.content}),Object(o.jsxs)(k,{children:[Object(o.jsxs)(C,{children:[Object(o.jsx)("input",{type:"text",placeholder:"edit your event",value:t.edit,onChange:function(n){e(E("edit",t.id,n.target.value))}}),Object(o.jsx)("input",{type:"button",value:"update",onClick:function(){e(E("content",t.id,t.edit)),e(E("edit",t.id,""))}})]}),Object(o.jsx)("input",{type:"button",value:t.isDone?"set unDone":"set isDone",onClick:function(){e(E("isDone",t.id,!t.isDone))}}),Object(o.jsx)("input",{type:"button",value:"delete",onClick:function(){var n;e((n=t.id,{type:A,payload:{id:n}}))}})]})]},t.id)}))})}var H=function(){return Object(o.jsxs)(y,{children:[Object(o.jsx)(m,{children:"Todo List"}),Object(o.jsx)(L,{}),Object(o.jsx)(F,{}),Object(o.jsx)(q,{}),Object(o.jsx)(G,{})]})},K=e(7),M=e(12),N=e(2),P=e(21),Q={todos:[{id:"1",content:"isDone",isDone:!0,edit:""},{id:"2",content:"unDone",isDone:!1,edit:""}],todoId:3};var R={filter:"all"};var U=Object(K.b)({todoState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case T:return{todoId:1,todos:[]};case z:var e=n.payload;return{todoId:t.todoId+1,todos:[{id:t.todoId,content:e.content,isDone:!1,edit:""}].concat(Object(P.a)(t.todos))};case A:var o=t.todos.filter((function(t){return t.id!==n.payload.id}));return Object(N.a)(Object(N.a)({},t),{},{todos:o});case J:var i=n.payload.target,r=t.todos.map((function(t){return n.payload.id!==t.id?t:Object(N.a)(Object(N.a)({},t),{},Object(M.a)({},i,n.payload.newContent))}));return Object(N.a)(Object(N.a)({},t),{},{todos:r});default:return Object(N.a)({},t)}},filterState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case B:return{filter:n.payload};default:return Object(N.a)({},t)}}}),V=Object(K.c)(U);c.a.render(Object(o.jsx)(u.a,{store:V,children:Object(o.jsx)(H,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.1d9e924b.chunk.js.map