"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[451],{82379:function(e,t,n){n.r(t);var i=n(63543),o=n(87389),s=(n(46099),n(1001)),r=(0,s.Z)(o.Z,i.s,i.x,!1,null,"fe779992",null);t["default"]=r.exports},46099:function(e,t,n){n(93884)},87389:function(e,t,n){var i=n(99500);t["Z"]=i.Z},63543:function(e,t,n){n.d(t,{s:function(){return i},x:function(){return o}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.isVisible,expression:"isVisible"},{name:"click-outside",rawName:"v-click-outside",value:e.close,expression:"close"}],ref:"popper",staticClass:"context-menu",attrs:{tabindex:"-1"},on:{"!contextmenu":function(e){e.preventDefault()}}},[n("ul",{staticClass:"dropdown-menu",attrs:{role:"menu"}},[e._t("menu",null,{contextData:e.contextData})],2)])},o=[]},93884:function(){},99500:function(e,t,n){var i=n(28981),o=n(2649),s=n.n(o);i.Z.Defaults.modifiers.computeStyle.gpuAcceleration=!1,t["Z"]={name:"ContextMenu.vue",props:{boundariesElement:{type:String,default:"body"}},components:{},data(){return{opened:!1,contextData:{}}},directives:{ClickOutside:s()},computed:{isVisible(){return this.opened}},methods:{open(e,t){this.opened=!0,this.contextData=t,this.popper&&this.popper.destroy(),this.popper=new i.Z(this.referenceObject(e),this.$refs.popper,{placement:"right-start",modifiers:{preventOverflow:{boundariesElement:document.querySelector(this.boundariesElement)}}}),this.$nextTick((()=>{this.popper.scheduleUpdate()}))},close(){this.opened=!1,this.contextData=null},referenceObject(e){const t=e.clientX,n=e.clientY,i=t+1,o=n+1,s=1,r=1;function c(){return{left:t,top:n,right:i,bottom:o}}const u={getBoundingClientRect:c,clientWidth:s,clientHeight:r};return u}},beforeUnmount(){void 0!==this.popper&&this.popper.destroy()}}}}]);