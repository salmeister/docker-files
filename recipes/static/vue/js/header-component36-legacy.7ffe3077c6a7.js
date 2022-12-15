"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[56],{23398:function(t,e,o){o.r(e);var i=o(16387),a=o(35102),s=o(1001),n=(0,s.Z)(a.Z,i.s,i.x,!1,null,"4e48a893",null);e["default"]=n.exports},35102:function(t,e,o){var i=o(39643);e["Z"]=i.Z},16387:function(t,e,o){o.d(e,{s:function(){return i},x:function(){return a}});var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-card",{directives:[{name:"hover",rawName:"v-hover"}],attrs:{"no-body":""}},[o("b-card-header",{staticClass:"p-4"},[o("h5",[t._v(" "+t._s(t.book_copy.icon)+" "+t._s(t.book_copy.name)+" "),o("span",{staticClass:"float-right text-primary",on:{click:t.editOrSave}},[o("i",{staticClass:"fa",class:{"fa-pen":!t.editing,"fa-save":t.editing},attrs:{"aria-hidden":"true"}})])]),t._l(t.book_copy.shared,(function(e){return o("b-badge",{key:e.id,staticClass:"font-weight-normal mr-1",attrs:{variant:"primary",pill:""}},[t._v(t._s(e.display_name))])}))],2),o("b-card-body",{staticClass:"p-4"},[t.editing?o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"inputName1"}},[t._v(t._s(t.$t("Name")))]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.book_copy.name,expression:"book_copy.name"}],staticClass:"form-control",attrs:{id:"inputName1",placeholder:"Name"},domProps:{value:t.book_copy.name},on:{input:function(e){e.target.composing||t.$set(t.book_copy,"name",e.target.value)}}})]):t._e(),t.editing?o("div",{staticClass:"form-group"},[o("emoji-input",{attrs:{field:"icon",label:t.$t("Icon"),value:t.book_copy.icon}})],1):t._e(),t.editing?o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"inputDesc1"}},[t._v(t._s(t.$t("Description")))]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.book_copy.description,expression:"book_copy.description"}],staticClass:"form-control",attrs:{id:"inputDesc1",rows:"3"},domProps:{value:t.book_copy.description},on:{input:function(e){e.target.composing||t.$set(t.book_copy,"description",e.target.value)}}})]):t._e(),t.editing?o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"inputDesc1"}},[t._v(t._s(t.$t("Share")))]),o("generic-multiselect",{staticStyle:{"flex-grow":"1","flex-shrink":"1","flex-basis":"0"},attrs:{parent_variable:"book.shared",initial_selection:t.book.shared,label:"display_name",model:t.Models.USER_NAME,placeholder:t.$t("Share"),limit:50},on:{change:function(e){t.book_copy.shared=e.val}}})],1):t._e(),t.editing?o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"inputDesc1"}},[t._v(t._s(t.$t("recipe_filter")))]),o("generic-multiselect",{staticStyle:{"flex-grow":"1","flex-shrink":"1","flex-basis":"0"},attrs:{parent_variable:"book.filter",initial_single_selection:t.book.filter,model:t.Models.CUSTOM_FILTER,multiple:!1,placeholder:t.$t("Custom Filter"),limit:50},on:{change:function(e){t.book_copy.filter=e.val}}}),o("small",{staticClass:"text-muted"},[t._v(t._s(t.$t("book_filter_help")))])],1):t._e(),t.editing?o("button",{staticClass:"btn btn-danger",on:{click:t.deleteBook}},[t._v(t._s(t.$t("Delete")))]):t._e(),t.editing?o("button",{staticClass:"btn btn-primary float-right",on:{click:t.editOrSave}},[t._v(t._s(t.$t("Save")))]):t._e(),t.editing?t._e():o("b-card-text",{staticStyle:{"text-overflow":"ellipsis"}},[t._v(" "+t._s(t.book_copy.description)+" ")])],1)],1)},a=[]},39643:function(t,e,o){o(68309);var i=o(70846),a=o(4222),s=o(81471),n=o(26678);e["Z"]={name:"CookbookEditCard",components:{EmojiInput:s["default"],GenericMultiselect:n["default"]},mixins:[a.ApiMixin],props:{book:Object},data:function(){return{editing:!1,book_copy:{},users:[]}},mounted:function(){this.book_copy=this.book,this.$root.$on("change",this.updateEmoji)},directives:{hover:{inserted:function(t){t.addEventListener("mouseenter",(function(){t.classList.add("shadow")})),t.addEventListener("mouseleave",(function(){t.classList.remove("shadow")}))}}},methods:{editOrSave:function(){this.editing?(this.editing=!1,this.saveData(),this.$emit("editing",!1),this.$emit("reload")):(this.editing=!0,this.$emit("editing",!0))},updateEmoji:function(t,e){"icon"===t&&(this.book_copy.icon=e)},saveData:function(){var t=this,e=new i.ApiApiFactory;e.updateRecipeBook(this.book_copy.id,this.book_copy).then((function(e){a.StandardToasts.makeStandardToast(t,a.StandardToasts.SUCCESS_UPDATE)})).catch((function(e){a.StandardToasts.makeStandardToast(t,a.StandardToasts.FAIL_UPDATE,e)}))},refreshData:function(){var t=this,e=new i.ApiApiFactory;e.listUsers().then((function(e){t.users=e.data}))},deleteBook:function(){var t=this;if(confirm(this.$t("delete_confirmation",{source:this.book.name}))){var e=new i.ApiApiFactory;e.destroyRecipeBook(this.book.id).then((function(e){t.$emit("refresh"),a.StandardToasts.makeStandardToast(t,a.StandardToasts.SUCCESS_DELETE)})).catch((function(e){a.StandardToasts.makeStandardToast(t,a.StandardToasts.FAIL_DELETE,e)}))}}}}}}]);