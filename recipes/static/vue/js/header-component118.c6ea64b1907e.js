"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[756],{19222:function(e,t,a){a.r(t);var n=a(40526),r=a(64070),s=a(1001),i=(0,s.Z)(r.Z,n.s,n.x,!1,null,"2b9980dc",null);t["default"]=i.exports},64070:function(e,t,a){var n=a(91461);t["Z"]=n.Z},40526:function(e,t,a){a.d(t,{s:function(){return n},x:function(){return r}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return void 0!==e.user_preferences?a("div",[a("b-form-group",{attrs:{label:e.$t("Share"),description:e.$t("plan_share_desc")}},[a("generic-multiselect",{attrs:{model:e.Models.USER,initial_selection:e.user_preferences.plan_share,label:"display_name",multiple:!0,placeholder:e.$t("User")},on:{change:function(t){e.user_preferences.plan_share=t.val,e.updateSettings(!1)}}})],1)],1):e._e()},r=[]},91461:function(e,t,a){var n=a(70846),r=a(4222),s=a(9669),i=a.n(s),o=a(26678);i().defaults.xsrfCookieName="csrftoken",i().defaults.xsrfHeaderName="X-CSRFTOKEN";t["Z"]={name:"MealPlanSettingsComponent",mixins:[r.ApiMixin],components:{GenericMultiselect:o["default"]},props:{user_id:Number},data(){return{user_preferences:void 0,languages:[]}},mounted(){this.user_preferences=this.preferences,this.languages=window.AVAILABLE_LANGUAGES,this.loadSettings()},methods:{loadSettings:function(){let e=new n.ApiApiFactory;e.retrieveUserPreference(this.user_id.toString()).then((e=>{this.user_preferences=e.data})).catch((e=>{r.StandardToasts.makeStandardToast(this,r.StandardToasts.FAIL_FETCH,e)}))},updateSettings:function(e){let t=new n.ApiApiFactory;t.partialUpdateUserPreference(this.user_id.toString(),this.user_preferences).then((t=>{r.StandardToasts.makeStandardToast(this,r.StandardToasts.SUCCESS_UPDATE),e&&location.reload()})).catch((e=>{r.StandardToasts.makeStandardToast(this,r.StandardToasts.FAIL_UPDATE,e)}))}}}}}]);