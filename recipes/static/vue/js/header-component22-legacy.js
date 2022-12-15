"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[77],{98682:function(e,i,t){t.r(i);var n=t(99930),a=t(46475),s=(t(80110),t(1001)),r=(0,s.Z)(a.Z,n.s,n.x,!1,null,null,null);i["default"]=r.exports},80110:function(e,i,t){t(62504)},46475:function(e,i,t){var n=t(17917);i["Z"]=n.Z},99930:function(e,i,t){t.d(i,{s:function(){return n},x:function(){return a}});var n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return e.recipes!=={}?t("div",[t("div",{staticClass:"align-center",attrs:{id:"switcher"}},[t("i",{directives:[{name:"b-toggle",rawName:"v-b-toggle.related-recipes",modifiers:{"related-recipes":!0}}],staticClass:"btn btn-primary fas fa-receipt fa-xl fa-fw shadow-none btn-circle"})]),t("b-sidebar",{staticStyle:{"z-index":"10000"},attrs:{id:"related-recipes",backdrop:"",right:"",bottom:"","no-header":"",shadow:"sm"},on:{shown:function(i){return e.updatePinnedRecipes()}},scopedSlots:e._u([{key:"default",fn:function(i){var n=i.hide;return[t("div",{staticClass:"d-flex flex-column justify-content-end h-100 p-3 align-items-end"},[t("h5",[e._v(e._s(e.$t("Planned"))+" "),t("i",{staticClass:"fas fa-calendar fa-fw"})]),t("div",{staticClass:"text-right"},[e.planned_recipes.length>0?e._l(e.planned_recipes,(function(i){return t("div",{key:"plan"+i.id},[t("div",{staticClass:"pb-1 pt-1"},[t("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){e.navRecipe(i),n()}}},[e._v(e._s(i.name))])])])})):[t("span",{staticClass:"text-muted"},[e._v(e._s(e.$t("nothing_planned_today")))])]],2),t("h5",[e._v(e._s(e.$t("Pinned"))+" "),t("i",{staticClass:"fas fa-thumbtack fa-fw"})]),e.pinned_recipes.length>0?[t("div",{staticClass:"text-right"},e._l(e.pinned_recipes,(function(i){return t("div",{key:"pin"+i.id},[t("b-row",{staticClass:"pb-1 pt-1"},[t("b-col",{attrs:{cols:"2"}},[t("a",{staticClass:"text-muted",attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.unPinRecipe(i)}}},[t("i",{staticClass:"fas fa-times"})])]),t("b-col",{attrs:{cols:"10"}},[t("a",{staticClass:"align-self-end",attrs:{href:"javascript:void(0);"},on:{click:function(t){e.navRecipe(i),n()}}},[e._v(e._s(i.name)+" ")])])],1)],1)})),0)]:[t("span",{staticClass:"text-muted"},[e._v(e._s(e.$t("no_pinned_recipes")))])],e.related_recipes.length>0?[t("h5",[e._v("Related "),t("i",{staticClass:"fas fa-link fa-fw"})]),t("div",{staticClass:"text-right"},e._l(e.related_recipes,(function(i){return t("div",{key:"related"+i.id},[t("div",{staticClass:"pb-1 pt-1"},[t("a",{attrs:{href:"javascript:void(0);"},on:{click:function(t){e.navRecipe(i),n()}}},[e._v(e._s(i.name))])])])})),0)]:e._e()],2)]}},{key:"footer",fn:function(i){var n=i.hide;return[t("div",{staticClass:"d-flex bg-dark text-light align-items-center px-3 py-2"},[t("strong",{staticClass:"mr-auto"},[e._v(e._s(e.$t("Quick actions")))]),t("b-button",{attrs:{size:"sm"},on:{click:n}},[e._v(e._s(e.$t("Close")))])],1)]}}],null,!1,1200845374)})],1):e._e()},a=[]},62504:function(){},17917:function(e,i,t){var n=t(4367),a=t(68932),s=(t(9653),t(26699),t(32023),t(41539),t(78783),t(33948),t(92222),t(54747),t(74916),t(23123),t(21249),t(57327),t(38862),t(4222)),r=t(70846),c=r.ApiApiFactory;i["Z"]={name:"RecipeSwitcher",mixins:[s.ResolveUrlMixin],props:{recipe:{type:Number,default:void 0}},data:function(){return{related_recipes:[],planned_recipes:[],pinned_recipes:[],recipes:{}}},computed:{is_recipe_view:function(){return this.$root._vnode.tag.includes("RecipeView")}},mounted:function(){var e=this,i=[];i.push(this.loadRelatedRecipes()),this.loadPinnedRecipes(),i.push(this.loadMealPlans()),Promise.all(i).then((function(){e.loadRecipeData()}))},methods:{navRecipe:function(e){this.is_recipe_view?this.$emit("switch",this.recipes[e.id]):window.location.href=this.resolveDjangoUrl("view_recipe",e.id)},updatePinnedRecipes:function(){this.loadPinnedRecipes(),this.loadRecipeData()},loadRecipeData:function(){var e=this,i=new c,t=[].concat((0,a.Z)(this.related_recipes),(0,a.Z)(this.planned_recipes),(0,a.Z)(this.pinned_recipes)),n=[];t.forEach((function(e){var i=e.id;n.includes(i)||n.push(i)})),n.forEach((function(t){i.retrieveRecipe(t).then((function(i){e.recipes[t]=i.data}))}))},loadRelatedRecipes:function(){var e=this,i=new c;if(this.$parent.recipe)return this.related_recipes=[this.$parent.recipe],i.relatedRecipe(this.$parent.recipe.id,{query:{levels:2,format:"json"}}).then((function(i){e.related_recipes=e.related_recipes.concat(i.data)}))},loadPinnedRecipes:function(){var e=JSON.parse(localStorage.getItem("pinned_recipes"))||[];this.pinned_recipes=e},loadMealPlans:function(){var e=this,i=new c,t=6e4*(new Date).getTimezoneOffset(),s=new Date(Date.now()-t).toISOString().split("T")[0];return i.listMealPlans({query:{from_date:s,to_date:s}}).then((function(t){var s=[];return t.data.forEach((function(t){var r,c,l,o,d,p;e.planned_recipes.push((0,n.Z)((0,n.Z)({},null===t||void 0===t?void 0:t.recipe),{},{servings:null===t||void 0===t?void 0:t.servings}));var u=(null!==(r=null!==(c=null===t||void 0===t?void 0:t.servings)&&void 0!==c?c:null===t||void 0===t||null===(l=t.recipe)||void 0===l?void 0:l.servings)&&void 0!==r?r:1)/(null!==(o=null===t||void 0===t||null===(d=t.recipe)||void 0===d?void 0:d.servings)&&void 0!==o?o:1);s.push(i.relatedRecipe(null===t||void 0===t||null===(p=t.recipe)||void 0===p?void 0:p.id,{query:{levels:2}}).then((function(i){i.data=i.data.map((function(e){return(0,n.Z)((0,n.Z)({},e),{},{factor:u})})),e.planned_recipes=[].concat((0,a.Z)(e.planned_recipes),(0,a.Z)(i.data))})))})),Promise.all(s)}))},unPinRecipe:function(e){var i=JSON.parse(localStorage.getItem("pinned_recipes"))||[];i=i.filter((function(i){return i.id!==e.id})),console.log("pinned left",i),this.pinned_recipes=i,localStorage.setItem("pinned_recipes",JSON.stringify(i))}}}}}]);