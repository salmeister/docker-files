"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[678,80],{46768:function(n,e,t){t.r(e);var o=t(64400),u=t(44302),r=t(1001),c=(0,r.Z)(u.Z,o.s,o.x,!1,null,null,null);e["default"]=c.exports},51523:function(n,e,t){t.r(e);var o=t(81647),u=t(96062),r=t(1001),c=(0,r.Z)(u.Z,o.s,o.x,!1,null,null,null);e["default"]=c.exports},44302:function(n,e,t){var o=t(30586);e["Z"]=o.Z},96062:function(n,e,t){var o=t(55233);e["Z"]=o.Z},64400:function(n,e,t){t.d(e,{s:function(){return o},x:function(){return u}});var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t(n.compiled,{tag:"component",attrs:{ingredient_factor:n.ingredient_factor,code:n.code}})],1)},u=[]},81647:function(n,e,t){t.d(e,{s:function(){return o},x:function(){return u}});var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("span",{domProps:{innerHTML:n._s(n.calculateAmount(n.number))}})},u=[]},30586:function(n,e,t){var o=t(70538),u=t(51523);e["Z"]={name:"CompileComponent",props:["code","ingredient_factor"],data:function(){return{compiled:null}},mounted:function(){this.compiled=o["default"].component("compiled-component",{props:["ingredient_factor","code"],components:{ScalableNumber:u["default"]},template:"<div>".concat(this.code,"</div>")})}}},55233:function(n,e,t){t(9653);var o=t(4222);e["Z"]={name:"ScalableNumber",props:{number:Number,factor:{type:Number,default:4}},methods:{calculateAmount:function(n){return(0,o.calculateAmount)(n,this.factor)}}}}}]);