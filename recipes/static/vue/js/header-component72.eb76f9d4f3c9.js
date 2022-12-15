"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[591],{82797:function(t,e,n){n.r(e);var r=n(92956),a=n(46018),i=(n(17869),n(1001)),o=(0,i.Z)(a.Z,r.s,r.x,!1,null,"4014e982",null);e["default"]=o.exports},17869:function(t,e,n){n(62897)},46018:function(t,e,n){var r=n(55607);e["Z"]=r.Z},92956:function(t,e,n){n.d(e,{s:function(){return r},x:function(){return a}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"hover",rawName:"v-hover"}],key:t.value.id,staticClass:"card cv-item meal-plan-card p-0",class:t.value.classes,style:"top:"+t.top+";max-height:"+t.item_height,attrs:{draggable:!0,"aria-grabbed":t.value==t.currentDragItem},on:{dragstart:function(e){return t.onDragItemStart(t.value,e)},click:function(e){return t.onClickItem(t.value,e)},contextmenu:function(e){return e.preventDefault(),t.$emit("open-context-menu",e,t.value)}}},[t.detailed?n("div",{staticClass:"card-header p-1 text-center text-primary border-bottom-0",style:"background-color: "+t.background_color},[null!=t.entry.entry.meal_type.icon?n("span",{staticClass:"font-light text-center"},[t._v(t._s(t.entry.entry.meal_type.icon))]):t._e(),n("span",{staticClass:"font-light d-none d-md-inline"},[t._v(t._s(t.entry.entry.meal_type.name))]),t.entry.entry.shopping?n("span",{staticClass:"font-light"},[n("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",modifiers:{hover:!0,top:!0}}],staticClass:"fas fa-shopping-cart fa-xs float-left",attrs:{title:t.$t("in_shopping")}})]):t._e()]):t._e(),t.detailed?n("div",{staticClass:"card-img-overlay h-100 d-flex flex-column justify-content-right float-right text-right p-0"},[n("a",[n("div",{staticStyle:{position:"static"}},[n("div",{staticClass:"dropdown b-dropdown position-static btn-group"},[n("button",{staticClass:"btn btn-link text-decoration-none text-body pr-2 dropdown-toggle-no-caret",attrs:{"aria-haspopup":"true","aria-expanded":"false",type:"button"},on:{click:function(e){return e.stopPropagation(),t.$emit("open-context-menu",e,t.value)}}},[n("i",{staticClass:"fas fa-ellipsis-v fa-lg"})])])])])]):t._e(),t.detailed?n("div",{staticClass:"card-header p-1 text-center",style:"background-color: "+t.background_color},[n("span",{staticClass:"font-light"},[t._v(t._s(t.title))])]):t._e(),t.hasRecipe&&t.detailed?n("b-img",{staticClass:"card-img-bottom",attrs:{fluid:"",src:t.entry.entry.recipe.image}}):t._e(),t.detailed&&(!t.hasRecipe&&""===t.entry.entry.note||t.hasRecipe&&null===t.entry.entry.recipe.image)?n("b-img",{staticClass:"card-img-bottom",attrs:{fluid:"",src:t.image_placeholder}}):t._e(),t.detailed&&null==t.entry.entry.recipe?n("div",{staticClass:"card-body p-1",style:"background-color: "+t.background_color},[n("p",[t._v(t._s(t.entry.entry.note))])]):t._e(),t.detailed?t._e():n("div",{staticClass:"row p-1 flex-nowrap",style:"background-color: "+t.background_color},[n("div",{staticClass:"col-2"},[null!=t.entry.entry.meal_type.icon?n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"font-light text-center",attrs:{title:t.entry.entry.meal_type.name}},[t._v(t._s(t.entry.entry.meal_type.icon))]):t._e(),null==t.entry.entry.meal_type.icon?n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"font-light text-center",attrs:{title:t.entry.entry.meal_type.name}},[t._v("❓")]):t._e()]),n("div",{staticClass:"col-10 d-inline-block text-truncate",style:"max-height:"+t.item_height},[n("span",{staticClass:"font-light"},[t._v(t._s(t.title))])])])],1)},a=[]},62897:function(){},55607:function(t,e){e["Z"]={name:"MealPlanCard.vue",components:{},props:{value:Object,weekStartDate:Date,top:String,detailed:Boolean,item_height:String},data:function(){return{dateSelectionOrigin:null,currentDragItem:null,image_placeholder:window.IMAGE_PLACEHOLDER}},mounted(){},computed:{entry:function(){return this.value.originalItem},title:function(){return null!=this.entry.entry.title&&""!==this.entry.entry.title?this.entry.entry.title:this.entry.entry.recipe_name},hasRecipe:function(){return null!=this.entry.entry.recipe},background_color:function(){return null!=this.entry.entry.meal_type.color&&""!==this.entry.entry.meal_type.color?this.entry.entry.meal_type.color:"#fff"}},methods:{onDragItemStart(t,e){return this.$emit("dragstart",t,e),!0},onContextMenuOpen(t,e){return this.$emit("dragstart",t,e),!0},onClickItem(t,e){return this.$emit("click-item",t),!0}},directives:{hover:{inserted:t=>{t.addEventListener("mouseenter",(()=>{t.classList.add("shadow")})),t.addEventListener("mouseleave",(()=>{t.classList.remove("shadow")}))}}}}}}]);