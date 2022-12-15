"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[56],{23398:function(t,e,i){i.r(e);var o=i(16387),a=i(35102),s=i(1001),n=(0,s.Z)(a.Z,o.s,o.x,!1,null,"4e48a893",null);e["default"]=n.exports},35102:function(t,e,i){var o=i(39643);e["Z"]=o.Z},16387:function(t,e,i){i.d(e,{s:function(){return o},x:function(){return a}});var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-card",{directives:[{name:"hover",rawName:"v-hover"}],attrs:{"no-body":""}},[i("b-card-header",{staticClass:"p-4"},[i("h5",[t._v(" "+t._s(t.book_copy.icon)+" "+t._s(t.book_copy.name)+" "),i("span",{staticClass:"float-right text-primary",on:{click:t.editOrSave}},[i("i",{staticClass:"fa",class:{"fa-pen":!t.editing,"fa-save":t.editing},attrs:{"aria-hidden":"true"}})])]),t._l(t.book_copy.shared,(function(e){return i("b-badge",{key:e.id,staticClass:"font-weight-normal mr-1",attrs:{variant:"primary",pill:""}},[t._v(t._s(e.display_name))])}))],2),i("b-card-body",{staticClass:"p-4"},[t.editing?i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"inputName1"}},[t._v(t._s(t.$t("Name")))]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.book_copy.name,expression:"book_copy.name"}],staticClass:"form-control",attrs:{id:"inputName1",placeholder:"Name"},domProps:{value:t.book_copy.name},on:{input:function(e){e.target.composing||t.$set(t.book_copy,"name",e.target.value)}}})]):t._e(),t.editing?i("div",{staticClass:"form-group"},[i("emoji-input",{attrs:{field:"icon",label:t.$t("Icon"),value:t.book_copy.icon}})],1):t._e(),t.editing?i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"inputDesc1"}},[t._v(t._s(t.$t("Description")))]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.book_copy.description,expression:"book_copy.description"}],staticClass:"form-control",attrs:{id:"inputDesc1",rows:"3"},domProps:{value:t.book_copy.description},on:{input:function(e){e.target.composing||t.$set(t.book_copy,"description",e.target.value)}}})]):t._e(),t.editing?i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"inputDesc1"}},[t._v(t._s(t.$t("Share")))]),i("generic-multiselect",{staticStyle:{"flex-grow":"1","flex-shrink":"1","flex-basis":"0"},attrs:{parent_variable:"book.shared",initial_selection:t.book.shared,label:"display_name",model:t.Models.USER_NAME,placeholder:t.$t("Share"),limit:50},on:{change:function(e){t.book_copy.shared=e.val}}})],1):t._e(),t.editing?i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"inputDesc1"}},[t._v(t._s(t.$t("recipe_filter")))]),i("generic-multiselect",{staticStyle:{"flex-grow":"1","flex-shrink":"1","flex-basis":"0"},attrs:{parent_variable:"book.filter",initial_single_selection:t.book.filter,model:t.Models.CUSTOM_FILTER,multiple:!1,placeholder:t.$t("Custom Filter"),limit:50},on:{change:function(e){t.book_copy.filter=e.val}}}),i("small",{staticClass:"text-muted"},[t._v(t._s(t.$t("book_filter_help")))])],1):t._e(),t.editing?i("button",{staticClass:"btn btn-danger",on:{click:t.deleteBook}},[t._v(t._s(t.$t("Delete")))]):t._e(),t.editing?i("button",{staticClass:"btn btn-primary float-right",on:{click:t.editOrSave}},[t._v(t._s(t.$t("Save")))]):t._e(),t.editing?t._e():i("b-card-text",{staticStyle:{"text-overflow":"ellipsis"}},[t._v(" "+t._s(t.book_copy.description)+" ")])],1)],1)},a=[]},39643:function(t,e,i){var o=i(70846),a=i(4222),s=i(81471),n=i(26678);e["Z"]={name:"CookbookEditCard",components:{EmojiInput:s["default"],GenericMultiselect:n["default"]},mixins:[a.ApiMixin],props:{book:Object},data(){return{editing:!1,book_copy:{},users:[]}},mounted(){this.book_copy=this.book,this.$root.$on("change",this.updateEmoji)},directives:{hover:{inserted:function(t){t.addEventListener("mouseenter",(()=>{t.classList.add("shadow")})),t.addEventListener("mouseleave",(()=>{t.classList.remove("shadow")}))}}},methods:{editOrSave:function(){this.editing?(this.editing=!1,this.saveData(),this.$emit("editing",!1),this.$emit("reload")):(this.editing=!0,this.$emit("editing",!0))},updateEmoji:function(t,e){"icon"===t&&(this.book_copy.icon=e)},saveData:function(){let t=new o.ApiApiFactory;t.updateRecipeBook(this.book_copy.id,this.book_copy).then((t=>{a.StandardToasts.makeStandardToast(this,a.StandardToasts.SUCCESS_UPDATE)})).catch((t=>{a.StandardToasts.makeStandardToast(this,a.StandardToasts.FAIL_UPDATE,t)}))},refreshData:function(){let t=new o.ApiApiFactory;t.listUsers().then((t=>{this.users=t.data}))},deleteBook:function(){if(confirm(this.$t("delete_confirmation",{source:this.book.name}))){let t=new o.ApiApiFactory;t.destroyRecipeBook(this.book.id).then((t=>{this.$emit("refresh"),a.StandardToasts.makeStandardToast(this,a.StandardToasts.SUCCESS_DELETE)})).catch((t=>{a.StandardToasts.makeStandardToast(this,a.StandardToasts.FAIL_DELETE,t)}))}}}}}}]);