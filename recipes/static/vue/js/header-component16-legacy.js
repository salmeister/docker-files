"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[18],{29499:function(t,e,i){i.r(e);var n=i(95142),s=i(47360),c=i(1001),a=(0,c.Z)(s.Z,n.s,n.x,!1,null,null,null);e["default"]=a.exports},47360:function(t,e,i){var n=i(91777);e["Z"]=n.Z},95142:function(t,e,i){i.d(e,{s:function(){return n},x:function(){return s}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{cursor:"pointer"}},[t.button?t._e():i("a",{staticClass:"dropdown-item",on:{click:t.clipboard}},[i("i",{class:t.icon}),t._v(" "+t._s(t.label))]),t.button?i("b-button",{on:{click:t.clipboard}},[t._v(t._s(t.label))]):t._e()],1)},s=[]},91777:function(t,e,i){var n=i(68932),s=(i(74916),i(15306),i(69600),i(92222),i(47941),i(21249),i(26833),i(4222));e["Z"]={name:"CopyToClipboard",props:{items:{type:Array},icon:{type:String},label:{type:String},button:{type:Boolean,default:!1},settings:{type:Object},format:{type:String,default:"delim"}},methods:{clipboard:function(){var t="";switch(this.format){case"delim":t=this.delimited();break;case"table":t=this.table();break}navigator.clipboard.writeText(t).then((0,s.makeToast)(this.$t("Success"),this.$t("SuccessClipboard"),"success"))},delimited:function(){var t="",e=this.settings.csv_delim||",",i=this.settings.csv_prefix||"";return t+=[i+Object.keys(this.items[0]).join(e)].concat((0,n.Z)(this.items.map((function(t){return i+Object.values(t).join(e)})))).join("\n").replace(/(^\[)|(\]$)/gm,""),t},table:function(){var t="",e="|";return t+=[e+Object.keys(this.items[0]).join(e)+e,e+Object.keys(this.items[0]).map((function(t){return":---"})).join(e)+e].concat((0,n.Z)(this.items.map((function(t){return e+Object.values(t).join(e)+e})))).join("\n").replace(/(^\[)|(\]$)/gm,""),t}}}}}]);