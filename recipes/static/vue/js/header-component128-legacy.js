"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[634],{39931:function(e,t,_){_.r(t),_.d(t,{default:function(){return l}});var i=function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("div",[-1===e.max_file_size_mb?_("div",[_("b-alert",{attrs:{show:"",variant:"warning"}},[e._v(" "+e._s(e.$t("file_upload_disabled"))+" ")])],1):_("b-progress",{attrs:{max:e.progress_max}},[_("b-progress-bar",{staticStyle:{"text-align":"center"},attrs:{value:e.current_file_size_mb}},[_("span",[_("strong",{staticClass:"text-dark "},[e._v(e._s(e.current_file_size_mb.toFixed(2))+" / "+e._s(e.display_max)+" MB")])])])],1)],1)},s=[],r={name:"StorageQuota",props:{},computed:{progress_max:function(){return 0===this.max_file_size_mb?4*this.current_file_size_mb:this.max_file_size_mb},display_max:function(){return 0===this.max_file_size_mb?"∞":this.max_file_size_mb}},data:function(){return{current_file_size_mb:window.CURRENT_FILE_SIZE_MB,max_file_size_mb:window.MAX_FILE_SIZE_MB}},mounted:function(){}},a=r,n=_(1001),u=(0,n.Z)(a,i,s,!1,null,"96821a92",null),l=u.exports}}]);