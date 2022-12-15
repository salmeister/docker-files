"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[362],{1429:function(t,e,o){o.r(e);var r=o(80017),i=o(9780),n=(o(86336),o(1001)),a=(0,n.Z)(i.Z,r.s,r.x,!1,null,null,null);e["default"]=a.exports},86336:function(t,e,o){o(56359)},9780:function(t,e,o){var r=o(54808);e["Z"]=r.Z},80017:function(t,e,o){o.d(e,{s:function(){return r},x:function(){return i}});var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"cv-header"},[o("div",{staticClass:"cv-header-nav d-none d-md-block"},[o("b-button-toolbar",{attrs:{"key-nav":"","aria-label":"Toolbar with button groups"}},[o("b-button-group",{staticClass:"mx-1"},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",modifiers:{hover:!0,top:!0}}],staticClass:"text-white",attrs:{title:t.$t("Previous_Period")},domProps:{innerHTML:t._s("<<")},on:{click:function(e){return t.onInput(t.headerProps.previousPeriod)}}}),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",modifiers:{hover:!0,top:!0}}],staticClass:"text-white",attrs:{title:t.$t("Previous_Day")},domProps:{innerHTML:t._s("<")},on:{click:t.onDayBack}})],1),o("b-button-group",{staticClass:"mx-1"},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",modifiers:{hover:!0,top:!0}}],staticClass:"text-white",attrs:{title:t.$t("Current_Period")},on:{click:function(e){return t.onInput(t.headerProps.currentPeriod)}}},[o("i",{staticClass:"fas fa-home"})]),o("b-form-datepicker",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",modifiers:{hover:!0,top:!0}}],staticClass:"text-white",attrs:{"button-only":"","button-variant":"secondary",title:t.$t("Date")},on:{context:t.dateSelect}})],1),o("b-button-group",{staticClass:"mx-1"},[o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",modifiers:{hover:!0,top:!0}}],staticClass:"text-white",attrs:{title:t.$t("Next_Day")},domProps:{innerHTML:t._s(">")},on:{click:t.onDayForward}}),o("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",modifiers:{hover:!0,top:!0}}],staticClass:"text-white",attrs:{title:t.$t("Next_Period")},domProps:{innerHTML:t._s(">>")},on:{click:function(e){return t.onInput(t.headerProps.nextPeriod)}}})],1)],1)],1),o("div",{staticClass:"periodLabel"},[t._t("label",(function(){return[t._v(t._s(t.headerProps.periodLabel))]}))],2),o("div",{staticClass:"actionArea pt-1 pb-1 d-none d-lg-flex"},[o("span",{staticClass:"period-span-1 pt-1 pb-1 pl-1 pr-1 d-none d-xl-inline-flex text-body align-items-center"},[o("small",[t._v(t._s(t.$t("Period"))+":")]),o("b-form-select",{staticClass:"ml-1",attrs:{id:"UomInput",options:t.options.displayPeriodUom},model:{value:t.settings.displayPeriodUom,callback:function(e){t.$set(t.settings,"displayPeriodUom",e)},expression:"settings.displayPeriodUom"}})],1),o("span",{staticClass:"period-span-2 pt-1 pb-1 pl-1 pr-1 mr-1 ml-1 d-none d-xl-inline-flex text-body align-items-center"},[o("small",[t._v(t._s(t.$t("Periods"))+":")]),o("b-form-select",{staticClass:"ml-1",attrs:{id:"UomInput",options:t.options.displayPeriodCount},model:{value:t.settings.displayPeriodCount,callback:function(e){t.$set(t.settings,"displayPeriodCount",e)},expression:"settings.displayPeriodCount"}})],1),o("span",{staticClass:"delete-area text-danger p-1 mr-2 ml-1 d-none d-sm-flex align-items-center",on:{drop:function(e){return e.preventDefault(),t.onDeleteDrop(e)},dragenter:function(e){return e.preventDefault(),t.onDeleteDragEnter(e)},dragleave:function(e){return e.preventDefault(),t.onDeleteDragLeave(e)},dragover:function(e){return e.preventDefault(),t.onDeleteDragEnter.apply(null,arguments)}}},[o("i",{staticClass:"fa fa-trash"}),t._v(" "+t._s(t.$t("Drag_Here_To_Delete")))])])])},i=[]},56359:function(){},54808:function(t,e){e["Z"]={name:"MealPlanCalenderHeader",computed:{settings:{get:function(){return this.settings_prop},set:function(t){this.$emit("change",t)}}},props:{headerProps:{type:Object,required:!0},options:{},previousYearLabel:{type:String,default:"<<"},previousPeriodLabel:{type:String,default:"<"},nextPeriodLabel:{type:String,default:">"},nextYearLabel:{type:String,default:">>"},iCalUrl:{type:String,default:""},settings_prop:{}},methods:{onDayForward(){this.$emit("set-starting-day-forward")},onDayBack(){this.$emit("set-starting-day-back")},dateSelect(t){this.$emit("input",t.selectedDate)},onInput(t){this.$emit("input",t)},onDeleteDragEnter(t){t.currentTarget.classList.add("draghover")},onDeleteDragLeave(t){t.currentTarget.classList.remove("draghover")},onDeleteDrop(t){t.currentTarget.classList.remove("draghover"),this.$emit("delete-dragged")}}}}}]);