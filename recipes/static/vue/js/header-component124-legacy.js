"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[70,451,762],{82379:function(t,e,n){n.r(e);var a=n(63543),s=n(87389),o=(n(46099),n(1001)),i=(0,o.Z)(s.Z,a.s,a.x,!1,null,"fe779992",null);e["default"]=i.exports},23121:function(t,e,n){n.r(e);var a=n(36547),s=n(51276),o=n(1001),i=(0,o.Z)(s.Z,a.s,a.x,!1,null,"49f66ea0",null);e["default"]=i.exports},72952:function(t,e,n){n.r(e);var a=n(90367),s=n(92071),o=(n(69342),n(1001)),i=(0,o.Z)(s.Z,a.s,a.x,!1,null,null,null);e["default"]=i.exports},46099:function(t,e,n){n(93884)},69342:function(t,e,n){n(64550)},87389:function(t,e,n){var a=n(99500);e["Z"]=a.Z},51276:function(t,e,n){var a=n(2560);e["Z"]=a.Z},92071:function(t,e,n){var a=n(6765);e["Z"]=a.Z},63543:function(t,e,n){n.d(e,{s:function(){return a},x:function(){return s}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"},{name:"click-outside",rawName:"v-click-outside",value:t.close,expression:"close"}],ref:"popper",staticClass:"context-menu",attrs:{tabindex:"-1"},on:{"!contextmenu":function(t){t.preventDefault()}}},[n("ul",{staticClass:"dropdown-menu",attrs:{role:"menu"}},[t._t("menu",null,{contextData:t.contextData})],2)])},s=[]},36547:function(t,e,n){n.d(e,{s:function(){return a},x:function(){return s}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{attrs:{role:"presentation"},on:{click:function(e){return t.$emit("click",e)}}},[t._t("default")],2)},s=[]},90367:function(t,e,n){n.d(e,{s:function(){return a},x:function(){return s}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-1",attrs:{id:"shopping_line_item"}},[n("b-row",{ref:"shopping_line_item",staticClass:"invis-border",attrs:{"align-h":"start"}},[t.settings.left_handed?n("b-col",{staticClass:"justify-content-start align-items-center d-flex d-md-none pr-0",attrs:{cols:"2",md:"2"}},[n("input",{key:t.entries[0].id,staticClass:"form-control form-control-sm checkbox-control-mobile",attrs:{type:"checkbox"},domProps:{checked:t.formatChecked},on:{change:t.updateChecked}}),n("b-button",{staticClass:"d-inline-block d-md-none p-0",attrs:{size:"sm",variant:"link"},on:{click:function(e){t.showDetails=!t.showDetails}}},[n("div",{staticClass:"text-nowrap"},[n("i",{staticClass:"fa fa-chevron-right rotate",class:t.showDetails?"rotated":""})])])],1):t._e(),n("b-col",{staticClass:"align-items-center d-flex",attrs:{cols:"1"}},[n("div",{staticClass:"dropdown b-dropdown position-static inline-block",attrs:{"data-html2canvas-ignore":"true"},on:{click:function(e){return e.stopPropagation(),t.$emit("open-context-menu",e,t.entries)}}},[n("button",{staticClass:"btn dropdown-toggle btn-link text-decoration-none text-body pr-0 pl-1 pr-md-3 pl-md-3 dropdown-toggle-no-caret",class:t.settings.left_handed?"dropdown-spacing":"",attrs:{"aria-haspopup":"true","aria-expanded":"false",type:"button"}},[n("i",{staticClass:"fas fa-ellipsis-v"})])])]),n("b-col",{staticClass:"px-1 justify-content-center align-items-center d-none d-md-flex",attrs:{cols:"1"}},[n("input",{key:t.entries[0].id,staticClass:"form-control form-control-sm checkbox-control",attrs:{type:"checkbox"},domProps:{checked:t.formatChecked},on:{change:t.updateChecked}})]),n("b-col",{attrs:{cols:"8"}},[n("b-row",{staticClass:"d-flex h-100"},[1==Object.entries(t.formatAmount).length?n("b-col",{directives:[{name:"touch",rawName:"v-touch:start",value:t.startHandler,expression:"startHandler",arg:"start"},{name:"touch",rawName:"v-touch:moving",value:t.moveHandler,expression:"moveHandler",arg:"moving"},{name:"touch",rawName:"v-touch:end",value:t.endHandler,expression:"endHandler",arg:"end"}],staticClass:"d-flex align-items-center",attrs:{cols:"6",md:"3"}},[n("strong",{staticClass:"mr-1"},[t._v(t._s(Object.entries(t.formatAmount)[0][1]))]),t._v(" "+t._s(Object.entries(t.formatAmount)[0][0])+" ")]):t._e(),1!=Object.entries(t.formatAmount).length?n("b-col",{directives:[{name:"touch",rawName:"v-touch:start",value:t.startHandler,expression:"startHandler",arg:"start"},{name:"touch",rawName:"v-touch:moving",value:t.moveHandler,expression:"moveHandler",arg:"moving"},{name:"touch",rawName:"v-touch:end",value:t.endHandler,expression:"endHandler",arg:"end"}],staticClass:"d-flex flex-column",attrs:{cols:"6",md:"3"}},t._l(Object.entries(t.formatAmount),(function(e,a){return n("div",{key:a,staticClass:"small"},[t._v(" "+t._s(e[1])+"   "+t._s(e[0])+" ")])})),0):t._e(),n("b-col",{staticClass:"align-items-center d-flex pl-0 pr-0 pl-md-2 pr-md-2",attrs:{cols:"6",md:"6"}},[t._v(" "+t._s(t.formatFood)+" ")]),n("b-col",{directives:[{name:"touch",rawName:"v-touch:start",value:t.startHandler,expression:"startHandler",arg:"start"},{name:"touch",rawName:"v-touch:moving",value:t.moveHandler,expression:"moveHandler",arg:"moving"},{name:"touch",rawName:"v-touch:end",value:t.endHandler,expression:"endHandler",arg:"end"}],staticClass:"align-items-center d-none d-md-flex justify-content-end",attrs:{cols:"3","data-html2canvas-ignore":"true"}},[n("b-button",{staticClass:"p-0 mr-0 mr-md-2 p-md-2 text-decoration-none",attrs:{size:"sm",variant:"link"},on:{click:function(e){t.showDetails=!t.showDetails}}},[n("div",{staticClass:"text-nowrap"},[n("i",{staticClass:"fa fa-chevron-right rotate",class:t.showDetails?"rotated":""}),n("span",{staticClass:"d-none d-md-inline-block"},[n("span",{staticClass:"ml-2"},[t._v(t._s(t.$t("Details")))])])])])],1)],1)],1),t.settings.left_handed?t._e():n("b-col",{directives:[{name:"touch",rawName:"v-touch:start",value:t.startHandler,expression:"startHandler",arg:"start"},{name:"touch",rawName:"v-touch:moving",value:t.moveHandler,expression:"moveHandler",arg:"moving"},{name:"touch",rawName:"v-touch:end",value:t.endHandler,expression:"endHandler",arg:"end"}],staticClass:"justify-content-start align-items-center d-flex d-md-none pl-0 pr-0",attrs:{cols:"2"}},[n("b-button",{staticClass:"d-inline-block d-md-none p-0",attrs:{size:"sm",variant:"link"},on:{click:function(e){t.showDetails=!t.showDetails}}},[n("div",{staticClass:"text-nowrap"},[n("i",{staticClass:"fa fa-chevron-right rotate",class:t.showDetails?"rotated":""})])]),n("input",{key:t.entries[0].id,staticClass:"form-control form-control-sm checkbox-control-mobile",attrs:{type:"checkbox"},domProps:{checked:t.formatChecked},on:{change:t.updateChecked}})],1)],1),n("b-row",{staticClass:"d-none d-md-flex",attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"12"}},[n("div",{staticClass:"small text-muted text-truncate"},[t._v(t._s(t.formatHint))])])],1),t.showDetails?n("div",{staticClass:"card no-body mb-1 pt-2 align-content-center shadow-sm"},t._l(t.entries,(function(e,a){return n("div",{key:e.id},[n("b-row",{staticClass:"small justify-content-around"},[n("b-col",{staticClass:"overflow-hidden text-nowrap",attrs:{cols:"auto",md:"4"}},[n("button",{staticClass:"btn btn-link btn-sm m-0 p-0 pl-2",staticStyle:{"text-overflow":"ellipsis"},attrs:{"aria-haspopup":"true","aria-expanded":"false",type:"button"},on:{click:function(n){return n.stopPropagation(),t.openRecipeCard(n,e)},mouseover:function(n){return t.openRecipeCard(n,e)}}},[t._v(" "+t._s(t.formatOneRecipe(e))+" ")])]),n("b-col",{staticClass:"text-muted",attrs:{cols:"auto",md:"4"}},[t._v(t._s(t.formatOneMealPlan(e)))]),n("b-col",{staticClass:"text-muted text-right overflow-hidden text-nowrap pr-4",attrs:{cols:"auto",md:"4"}},[t._v(" "+t._s(t.formatOneCreatedBy(e))+" "),t.formatOneCompletedAt(e)?n("div",[t._v(t._s(t.formatOneCompletedAt(e)))]):t._e()])],1),n("b-row",{attrs:{"align-h":"start"}},[t.settings.left_handed?n("b-col",{staticClass:"justify-content-start align-items-center d-flex d-md-none pr-0",attrs:{cols:"3",md:"2"}},[n("input",{key:t.entries[0].id,staticClass:"form-control form-control-sm checkbox-control-mobile",attrs:{type:"checkbox"},domProps:{checked:t.formatChecked},on:{change:t.updateChecked}})]):t._e(),n("b-col",{staticClass:"align-items-center d-flex",attrs:{cols:"2",md:"1"}},[n("div",{staticClass:"dropdown b-dropdown position-static inline-block",attrs:{"data-html2canvas-ignore":"true"},on:{click:function(n){return n.stopPropagation(),t.$emit("open-context-menu",n,e)}}},[n("button",{staticClass:"btn dropdown-toggle btn-link text-decoration-none text-body pr-1 pr-md-3 pl-md-3 dropdown-toggle-no-caret",class:t.settings.left_handed?"dropdown-spacing":"",attrs:{"aria-haspopup":"true","aria-expanded":"false",type:"button"}},[n("i",{staticClass:"fas fa-ellipsis-v fa-lg"})])])]),n("b-col",{staticClass:"justify-content-center align-items-center d-none d-md-flex",attrs:{cols:"1"}},[n("input",{key:t.entries[0].id,staticClass:"form-control form-control-sm checkbox-control",attrs:{type:"checkbox"},domProps:{checked:t.formatChecked},on:{change:t.updateChecked}})]),n("b-col",{attrs:{cols:"7",md:"9"}},[n("b-row",{staticClass:"d-flex align-items-center h-100"},[n("b-col",{staticClass:"d-flex align-items-center",attrs:{cols:"5",md:"3"}},[n("strong",{staticClass:"mr-1"},[t._v(t._s(t.formatOneAmount(e)))]),t._v(" "+t._s(t.formatOneUnit(e))+" ")]),n("b-col",{staticClass:"align-items-center d-flex pl-0 pr-0 pl-md-2 pr-md-2",attrs:{cols:"7",md:"6"}},[t._v(" "+t._s(t.formatOneFood(e))+" ")]),n("b-col",{staticClass:"d-flex d-md-none",attrs:{cols:"12"}},t._l(t.formatOneNote(e),(function(e,a){return n("div",{key:a,staticClass:"small text-muted text-truncate"},[t._v(t._s(e)+" ")])})),0)],1)],1),t.settings.left_handed?t._e():n("b-col",{staticClass:"justify-content-start align-items-center d-flex d-md-none",attrs:{cols:"3",md:"2"}},[n("input",{key:t.entries[0].id,staticClass:"form-control form-control-sm checkbox-control-mobile",attrs:{type:"checkbox"},domProps:{checked:t.formatChecked},on:{change:t.updateChecked}})])],1),a!==t.entries.length-1?n("hr",{staticClass:"w-75 mt-1 mb-1 mt-md-3 mb-md-3"}):t._e(),a===t.entries.length-1?n("div",{staticClass:"pb-1 pb-md-4"}):t._e()],1)})),0):t._e(),t.showDetails?t._e():n("hr",{staticClass:"m-1"}),n("ContextMenu",{ref:"recipe_card",staticStyle:{"max-width":"300"},attrs:{triggers:"click, hover",title:t.$t("Filters")},scopedSlots:t._u([t.recipe?{key:"menu",fn:function(e){var a=e.contextData;return[n("ContextMenuItem",[n("RecipeCard",{attrs:{recipe:a,detail:!1}})],1),n("ContextMenuItem",{on:{click:function(e){return t.$refs.menu.close()}}},[n("b-form-group",{staticClass:"text-nowrap m-0 mr-2",attrs:{"label-cols":"9","content-cols":"3"},scopedSlots:t._u([{key:"label",fn:function(){return[n("a",{staticClass:"dropdown-item p-2",attrs:{href:"#"}},[n("i",{staticClass:"fas fa-pizza-slice"}),t._v(" "+t._s(t.$t("Servings")))])]},proxy:!0}],null,!0)},[n("div",{on:{click:function(t){t.preventDefault(),t.stopPropagation()}}},[n("b-form-input",{staticClass:"mt-2",attrs:{min:"0",type:"number"},model:{value:t.servings,callback:function(e){t.servings=e},expression:"servings"}})],1)])],1)]}}:null],null,!0)}),n("i",{ref:"delay_icon",staticClass:"fa fa-hourglass fa-lg",staticStyle:{display:"none",position:"absolute"},attrs:{"aria-hidden":"true"}}),n("i",{ref:"check_icon",staticClass:"fa fa-check fa-lg",staticStyle:{display:"none",position:"absolute"},attrs:{"aria-hidden":"true"}})],1)},s=[]},93884:function(){},64550:function(){},99500:function(t,e,n){var a=n(28981),s=n(2649),o=n.n(s);a.Z.Defaults.modifiers.computeStyle.gpuAcceleration=!1,e["Z"]={name:"ContextMenu.vue",props:{boundariesElement:{type:String,default:"body"}},components:{},data:function(){return{opened:!1,contextData:{}}},directives:{ClickOutside:o()},computed:{isVisible:function(){return this.opened}},methods:{open:function(t,e){var n=this;this.opened=!0,this.contextData=e,this.popper&&this.popper.destroy(),this.popper=new a.Z(this.referenceObject(t),this.$refs.popper,{placement:"right-start",modifiers:{preventOverflow:{boundariesElement:document.querySelector(this.boundariesElement)}}}),this.$nextTick((function(){n.popper.scheduleUpdate()}))},close:function(){this.opened=!1,this.contextData=null},referenceObject:function(t){var e=t.clientX,n=t.clientY,a=e+1,s=n+1,o=1,i=1;function r(){return{left:e,top:n,right:a,bottom:s}}var l={getBoundingClientRect:r,clientWidth:o,clientHeight:i};return l}},beforeUnmount:function(){void 0!==this.popper&&this.popper.destroy()}}},2560:function(t,e){e["Z"]={name:"ContextMenuItem.vue"}},6765:function(t,e,n){var a=n(75200),s=(n(41539),n(54747),n(33948),n(68309),n(69720),n(93299),n(9653),n(21249),n(57327),n(69600),n(74916),n(15306),n(70538)),o=n(56738),i=(n(70044),n(82379)),r=n(23121),l=n(4222),c=n(50817),d=n(78627),u=n.n(d);s["default"].use(o.XG7),s["default"].use(u()),e["Z"]={name:"ShoppingLineItem",mixins:[l.ApiMixin],components:{RecipeCard:c["default"],ContextMenu:i["default"],ContextMenuItem:r["default"]},props:{entries:{type:Array},settings:Object,groupby:{type:String}},data:function(){return{showDetails:!1,recipe:void 0,servings:1,dragStartX:0,distance_left:0}},computed:{formatAmount:function(){var t={};this.entries.forEach((function(e){var n,a,s=null!==(n=null===e||void 0===e||null===(a=e.unit)||void 0===a?void 0:a.name)&&void 0!==n?n:"---";e.amount&&(t[s]?t[s]+=e.amount:t[s]=e.amount)}));for(var e=0,n=Object.entries(t);e<n.length;e++){var s=(0,a.Z)(n[e],2),o=s[0],i=s[1];t[o]=Math.round(100*i+Number.EPSILON)/100}return t},formatCategory:function(){return this.formatOneCategory(this.entries[0])||this.$t("Undefined")},formatChecked:function(){return this.entries.map((function(t){return t.checked})).every((function(t){return!0===t}))},formatHint:function(){return"recipe"==this.groupby?this.formatCategory:this.formatRecipe},formatFood:function(){return this.formatOneFood(this.entries[0])},formatUnit:function(){return this.formatOneUnit(this.entries[0])},formatRecipe:function(){var t,e=this;if(1==(null===(t=this.entries)||void 0===t?void 0:t.length))return this.formatOneMealPlan(this.entries[0])||"";var n=this.entries.filter((function(t){var e;return null===t||void 0===t||null===(e=t.recipe_mealplan)||void 0===e?void 0:e.name}));return n.map((function(t){return e.formatOneMealPlan(t)})).join(" - ")},formatNotes:function(){var t;return 1==(null===(t=this.entries)||void 0===t?void 0:t.length)&&this.formatOneNote(this.entries[0])||""}},watch:{},mounted:function(){var t,e,n,a;this.servings=null!==(t=null===(e=this.entries)||void 0===e||null===(n=e[0])||void 0===n||null===(a=n.recipe_mealplan)||void 0===a?void 0:a.servings)&&void 0!==t?t:0},methods:{formatDate:function(t){if(t)return Intl.DateTimeFormat(window.navigator.language,{dateStyle:"short",timeStyle:"short"}).format(Date.parse(t))},startHandler:function(t){t.changedTouches.length>0&&(this.dragStartX=t.changedTouches[0].clientX)},getOffset:function(t){var e=t.getBoundingClientRect();return{left:e.left+window.scrollX,top:e.top+window.scrollY,right:e.right-window.scrollX}},moveHandler:function(t){var e=this.$refs["shopping_line_item"];this.distance_left=t.changedTouches[0].clientX-this.dragStartX,e.style.marginLeft=this.distance_left,e.style.marginRight=-this.distance_left,e.style.backgroundColor="#ddbf86",e.style.border="1px solid #000";var n=this.$refs["delay_icon"],a=this.$refs["check_icon"],s=Math.abs(this.distance_left)/100;this.distance_left>0?(e.parentElement.parentElement.style.backgroundColor="rgba(130,170,139,0)".replace(/[^,]+(?=\))/,s),a.style.display="block",a.style.left=this.getOffset(e.parentElement.parentElement).left+40,a.style.top=this.getOffset(e.parentElement.parentElement).top-92,a.style.opacity=s-.3):(e.parentElement.parentElement.style.backgroundColor="rgba(185,135,102,0)".replace(/[^,]+(?=\))/,s),n.style.display="block",n.style.left=this.getOffset(e.parentElement.parentElement).right-40,n.style.top=this.getOffset(e.parentElement.parentElement).top-92,n.style.opacity=s-.3)},endHandler:function(t){var e=this.$refs["shopping_line_item"];e.removeAttribute("style"),e.parentElement.parentElement.removeAttribute("style");var n=this.$refs["delay_icon"],a=this.$refs["check_icon"];if(n.style.display="none",a.style.display="none",Math.abs(this.distance_left)>window.screen.width/6)if(this.distance_left>0){var s=!1;this.entries.forEach((function(t){s=t.checked}));var o={entries:this.entries.map((function(t){return t.id})),checked:!s};this.$emit("update-checkbox",o)}else this.$emit("update-delaythis",this.entries)},formatOneAmount:function(t){var e;return null!==(e=null===t||void 0===t?void 0:t.amount)&&void 0!==e?e:1},formatOneUnit:function(t){var e,n;return null!==(e=null===t||void 0===t||null===(n=t.unit)||void 0===n?void 0:n.name)&&void 0!==e?e:""},formatOneCategory:function(t){var e,n;return null===t||void 0===t||null===(e=t.food)||void 0===e||null===(n=e.supermarket_category)||void 0===n?void 0:n.name},formatOneCompletedAt:function(t){return!!t.completed_at&&[this.$t("Completed"),"@",this.formatDate(t.completed_at)].join(" ")},formatOneFood:function(t){return t.food.name},formatOneDelayUntil:function(t){return!(!t.delay_until||t.delay_until&&t.checked)&&[this.$t("DelayUntil"),"-",this.formatDate(t.delay_until)].join(" ")},formatOneMealPlan:function(t){var e,n;return null!==(e=null===t||void 0===t||null===(n=t.recipe_mealplan)||void 0===n?void 0:n.name)&&void 0!==e?e:""},formatOneRecipe:function(t){var e,n;return null!==(e=null===t||void 0===t||null===(n=t.recipe_mealplan)||void 0===n?void 0:n.recipe_name)&&void 0!==e?e:""},formatOneNote:function(t){var e,n,a;return t||(t=this.entries[0]),[null===(e=t)||void 0===e||null===(n=e.recipe_mealplan)||void 0===n?void 0:n.mealplan_note,null===(a=t)||void 0===a?void 0:a.ingredient_note].filter(String)},formatOneCreatedBy:function(t){return[this.$t("Added_by"),null===t||void 0===t?void 0:t.created_by.display_name,"@",this.formatDate(t.created_at)].join(" ")},openRecipeCard:function(t,e){var n=this;this.genericAPI(this.Models.RECIPE,this.Actions.FETCH,{id:e.recipe_mealplan.recipe}).then((function(e){var a=e.data;a.steps=void 0,n.recipe=!0,n.$refs.recipe_card.open(t,a)}))},updateChecked:function(t,e){var n=void 0;n=e?{entries:[e],checked:!e.checked}:{entries:this.entries.map((function(t){return t.id})),checked:!this.formatChecked},console.log(n),this.$emit("update-checkbox",n)}}}}}]);