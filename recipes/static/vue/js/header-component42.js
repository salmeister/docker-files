"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[578],{1105:function(n,t,e){e.r(t);var u=e(18307),i=e(56617),a=(e(73079),e(1001)),s=(0,a.Z)(i.Z,u.s,u.x,!1,null,"4891f0fc",null);t["default"]=s.exports},73079:function(n,t,e){e(74435)},56617:function(n,t,e){var u=e(52649);t["Z"]=u.Z},18307:function(n,t,e){e.d(t,{s:function(){return u},x:function(){return i}});var u=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-input-group",[e("b-input-group-prepend",{staticClass:"d-print-none"},[e("b-button",{staticClass:"py-0 px-2",attrs:{variant:"outline-primary",size:"sm"},on:{click:function(t){return n.valueChange(n.value-1)}}},[e("b-icon",{attrs:{icon:"dash","font-scale":"1.6"}})],1)],1),e("b-form-input",{staticClass:"custom-spin-input",attrs:{variant:"outline-primary",size:n.size,value:n.value,type:"number",min:"0",number:""},on:{update:n.valueChange}}),e("b-input-group-append",{staticClass:"d-print-none"},[e("b-button",{staticClass:"py-0 px-2",attrs:{variant:"outline-primary",size:"sm"},on:{click:function(t){return n.valueChange(n.value+1)}}},[e("b-icon",{attrs:{icon:"plus","font-scale":"1.6"}})],1)],1)],1)},i=[]},74435:function(){},52649:function(n,t,e){e(26699);var u=e(43022),i=e(72466);t["Z"]={name:"CustomInputSpinButton",components:{BIcon:u.H,BIconDash:i.Loc,BIconPlus:i.s3j},props:{size:{type:String,required:!1,default:"md",validator:function(n){return["sm","md","lg"].includes(n)}},value:{type:Number,required:!0}},methods:{valueChange(n){n<=0?this.$emit("input",0):this.$emit("input",n)}}}}}]);