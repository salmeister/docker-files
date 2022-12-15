"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[109],{38557:function(t,e,a){a.r(e);var s=a(62467),n=a(87958),o=a(1001),i=(0,o.Z)(n.Z,s.s,s.x,!1,null,"61d4e7d2",null);e["default"]=i.exports},87958:function(t,e,a){var s=a(57302);e["Z"]=s.Z},62467:function(t,e,a){a.d(e,{s:function(){return s},x:function(){return n}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(" The API is made for developers to interact with the application. It is possible to break things using the API so be careful and create a backup first. The API definition can and will change in the future, make sure to read the changelog to spot changes early on. "),a("b-button-toolbar",[a("b-button-group",{staticClass:"mx-1"},[a("a",{staticClass:"btn btn-info",attrs:{href:t.resolveDjangoUrl("docs_api"),target:"_blank",rel:"noreferrer nofollow"}},[t._v("Docs")])]),a("b-button-group",{staticClass:"mx-1"},[a("a",{staticClass:"btn btn-success",attrs:{href:t.resolveDjangoUrl("api:api-root"),target:"_blank",rel:"noreferrer nofollow"}},[t._v("Interactive API Browser")])])],1)],1),t._v(" Authentication works by proving the word "),a("code",[t._v("Bearer")]),t._v(" followed by an API Token as a request Authorization header as shown below. "),a("br"),a("code",[t._v("Authorization: Bearer TOKEN")]),t._v(" -or-"),a("br"),a("code",[t._v("curl -X GET http://your.domain.com/api/recipes/ -H 'Authorization: Bearer TOKEN'")]),a("br"),a("br"),t._v(" You can have multiple tokens and each token can have its own scope. Currently there is "),a("code",[t._v("read")]),t._v(", "),a("code",[t._v("write")]),t._v(" and "),a("code",[t._v("bookmarklet")]),t._v(". Read and write do what the name says, the bookmarklet scope is only used for the bookmarklet to limit access to it. "),a("b-alert",{attrs:{show:"",variant:"info"}},[t._v("Make sure to save your token after creation as they cannot be viewed afterwards. ")]),a("b-list-group",{staticClass:"mt-3"},t._l(t.access_tokens,(function(e){return a("b-list-group-item",{key:e.id},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-9"},[t._v(" "+t._s(e.token)),a("br"),a("small",[a("span",{staticClass:"text-muted"},[t._v("Scope:")]),t._v(" "),a("code",[t._v(t._s(e.scope))]),t._v(" "),a("span",{staticClass:"text-muted"},[t._v("Expires:")]),t._v(" "+t._s(t.formatDate(e.expires))+" ")])]),a("div",{staticClass:"col-3"},[a("b-button-group",[a("b-button",{attrs:{variant:"primary"},on:{click:function(a){t.active_token=e,t.generic_action=t.Actions.UPDATE}}},[a("i",{staticClass:"far fa-edit"})]),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){t.active_token=e,t.generic_action=t.Actions.DELETE}}},[a("i",{staticClass:"fas fa-trash-alt"})])],1)],1)])])})),1),a("b-button",{staticClass:"mt-1",attrs:{variant:"success"},on:{click:function(e){t.generic_action=t.Actions.CREATE}}},[t._v(t._s(t.$t("New")))]),a("generic-modal-form",{attrs:{model:t.Models.ACCESS_TOKEN,action:t.generic_action,show:null!==t.generic_action,item1:t.active_token},on:{"finish-action":t.updateToken}})],1)},n=[]},57302:function(t,e,a){var s=a(70846),n=a(4222),o=a(9669),i=a.n(o),r=a(80062),c=a(30381),l=a.n(c);i().defaults.xsrfCookieName="csrftoken",i().defaults.xsrfHeaderName="X-CSRFTOKEN",e["Z"]={name:"APISettingsComponent",components:{GenericModalForm:r["default"]},mixins:[n.ApiMixin,n.ResolveUrlMixin],props:{user_id:Number},data(){return{access_tokens:[],active_token:null,generic_action:null}},mounted(){this.user_preferences=this.preferences,this.languages=window.AVAILABLE_LANGUAGES,this.loadTokens()},methods:{formatDate:function(t){return l().locale(window.navigator.language),l()(t).format("L")},loadTokens:function(){let t=new s.ApiApiFactory;t.listAccessTokens().then((t=>{this.access_tokens=t.data})).catch((t=>{n.StandardToasts.makeStandardToast(this,n.StandardToasts.FAIL_FETCH,t)}))},updateToken:function(t){"cancel"!==t&&(this.generic_action===this.Actions.UPDATE?this.access_tokens[this.access_tokens.indexOf(this.active_token)]=t.item:this.generic_action===this.Actions.CREATE?this.access_tokens.push(t.item):this.generic_action===this.Actions.DELETE&&this.access_tokens.splice(this.access_tokens.indexOf(this.active_token),1)),this.generic_action=null}}}}}]);