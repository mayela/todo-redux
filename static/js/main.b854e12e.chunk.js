(this["webpackJsonptodo-redux"]=this["webpackJsonptodo-redux"]||[]).push([[0],{14:function(e,t,n){e.exports=n(27)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),i=n(5),u=n(3),l=n(6),d="ADD_ITEM",s="DELETE_ITEM",p={list:[{id:1,text:"clean the house"},{id:2,text:"buy milk"}]};var m=Object(u.b)({appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return e={list:[].concat(Object(l.a)(e.list),[t.payload])};case s:return e={list:e.list.filter((function(e){return e.id!==t.payload}))};default:return e}}});var f=n(12),b={redux_add:function(e){return{type:d,payload:e}},redux_delete:function(e){return{type:s,payload:e}}},y=n(13),E=(n(24),function(e){var t=e.item,n=e.deleteItem;return a.a.createElement("div",{className:"todo-item"},a.a.createElement("p",{className:"todo-item-text"},t.text),a.a.createElement("button",{className:"todo-item-delete",onClick:function(){return n(t)}},"-"))}),O=(n(25),function(e){var t=e.list,n=e.redux_add,o=e.redux_delete,c=Object(r.useState)(""),i=Object(y.a)(c,2),u=i[0],d=i[1],s=function(){if(!u)return alert("Please enter a todo!");var e=t&&t.length>1?Math.max.apply(Math,Object(l.a)(t.map((function(e){return e.id}))))+1:1;n({id:e,text:u}),d("")},p=function(e){o(e.id)};return a.a.createElement("div",{className:"todo"},a.a.createElement("h1",{className:"todo-header"},"Redux ToDo"),a.a.createElement("div",{className:"todo-container"},a.a.createElement("div",{className:"todo-content"},t&&t.map((function(e){return a.a.createElement(E,{key:e.id,item:e,deleteItem:p})}))),a.a.createElement("div",{className:"todo-input"},a.a.createElement("input",{type:"text",value:u,onChange:function(e){d(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&s()}}),a.a.createElement("button",{className:"todo-add",onClick:s},"+"))))});n(26);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var h=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},b),j=Object(i.b)((function(e){return{list:e.appReducer.list}}),h)((function(e){return a.a.createElement(O,e)})),x=Object(u.c)(m);c.a.render(a.a.createElement(i.a,{store:x},a.a.createElement(j,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b854e12e.chunk.js.map