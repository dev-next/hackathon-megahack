(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"07c0":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n("d624"),a=n.n(r),o=n("9530"),s=n.n(o);function i(){var e=a()(["\n  query tags {\n    tags,\n  }\n"]);return i=function(){return e},e}function u(){var e=a()(["\n  query items {\n    items {\n      id\n      name\n      description\n      photos\n      value\n      tags\n      fields {\n        label\n        value\n      }\n      creationDate\n    }\n  }\n"]);return u=function(){return e},e}var c=s()(u()),l=s()(i())},"277a":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("q-page",{staticClass:"q-pa-md"},[n("h2",[e._v("Adicionar Produto")]),n("q-form",{on:{submit:e.saveItem}},[n("q-input",{attrs:{label:"Nome",rules:[function(e){return e.length>=3||"Nome precisa ter ao menos 3 caracteres"}]},model:{value:e.product.name,callback:function(t){e.$set(e.product,"name",t)},expression:"product.name"}}),n("q-input",{attrs:{label:"Descrição",type:"textarea"},model:{value:e.product.description,callback:function(t){e.$set(e.product,"description",t)},expression:"product.description"}}),n("q-input",{attrs:{label:"Preço",mask:"#,##","fill-mask":"0","input-class":"text-right","unmasked-value":"","reverse-fill-mask":"",rules:[function(e){return!!e||"Preço nao pode ser vazio"}]},model:{value:e.product.value,callback:function(t){e.$set(e.product,"value",t)},expression:"product.value"}}),n("p-product-tags",{attrs:{defaultOptions:e.tagsOptions,label:"Tags"},model:{value:e.product.tags,callback:function(t){e.$set(e.product,"tags",t)},expression:"product.tags"}}),e.errorMsg?n("div",{staticClass:"error-message q-mt-sm text-negative"},[e._v("\n        "+e._s(e.errorMsg)+"\n      ")]):e._e(),n("q-btn",{staticClass:"q-mt-lg btn-submit-product",attrs:{color:"primary",type:"submit",size:"lg",fill:"",disabled:e.isLoading}},[e._v("\n        Adicionar\n      ")])],1)],1)],1)},a=[],o=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("967e")),s=n.n(o),i=(n("a481"),n("96cf"),n("fa84")),u=n.n(i),c=n("c47a"),l=n.n(c),p=n("2f62"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-select",{staticClass:"product-tag-select",attrs:{label:e.label,value:e.value,"use-input":"","use-chips":"",multiple:"","input-debounce":"0",options:e.defaultOptions},on:{add:function(t){return e.$emit("input",e.value.concat([t.value]))},remove:function(t){e.$emit("input",e.handleRemove(t))},"new-value":e.createValue,filter:e.filterFn}})},f=[],m=(n("6762"),n("2fdb"),{props:{value:{type:Array},label:{type:String},defaultOptions:{type:Array,default:function(){return[]}}},methods:{createValue:function(e,t){e.length>0&&(this.defaultOptions.includes(e)||this.defaultOptions.push(e),t(e,"toggle"))},filterFn:function(e,t){var n=this;t((function(){if(""===e)n.filterOptions=n.defaultOptions;else{var t=e.toLowerCase();n.filterOptions=n.defaultOptions.filter((function(e){return e.toLowerCase().indexOf(t)>-1}))}}))},handleRemove:function(e){return this.value.length>1?this.value.filter((function(t){return t===e.value})):[]}}}),v=m,g=(n("9728"),n("2877")),b=n("eebe"),h=n.n(b),O=n("ddd8"),y=n("b047"),w=Object(g["a"])(v,d,f,!1,null,null,null),$=w.exports;h()(w,"components",{QSelect:O["a"],QChip:y["a"]});var j=n("d624"),k=n.n(j),q=n("9530"),x=n.n(q);function P(){var e=k()(["\n  mutation createItem($item: ItemInput!, $store: ID!, $createdBy: ID!) {\n    createItem(item: $item, store: $store, createdBy: $createdBy) {\n      id\n    }\n  }\n"]);return P=function(){return e},e}var I=x()(P()),_=n("07c0");function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L={apollo:{tagsOptions:{query:_["b"],update:function(e){return e.tags}}},components:{pProductTags:$},data:function(){return{tags:[],tagsOptions:[],product:{name:"",description:"",value:0,tags:[]},isLoading:!1,errorMsg:null}},computed:C({},Object(p["e"])(["loggedUser"])),methods:{saveItem:function(){var e=this;return u()(s.a.mark((function t(){var n,r,a;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,e.errorMsg=null,n=C(C({},e.product),{},{value:e.product.value/100}),t.next=6,e.$apollo.mutate({mutation:I,variables:{item:n,store:e.loggedUser.stores[0].id,createdBy:e.loggedUser.id}});case 6:if(r=t.sent,a=r.data,!a.errors){t.next=10;break}throw new Error(a.errors[0].message);case 10:e.$q.notify({type:"positive",message:"Produto salvo com sucesso!"}),e.resetForm(),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),e.errorMsg=t.t0.message.replace(/GraphQL error:/,"");case 17:return t.prev=17,e.isLoading=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[0,14,17,20]])})))()},resetForm:function(){this.product={name:"",description:"",value:0,tags:[]}}}},Q=L,B=(n("9f37"),n("9989")),E=n("0378"),F=n("27f9"),M=n("9c40"),A=Object(g["a"])(Q,r,a,!1,null,"a430ff06",null);t["default"]=A.exports;h()(A,"components",{QPage:B["a"],QForm:E["a"],QInput:F["a"],QBtn:M["a"]})},6917:function(e,t,n){},7252:function(e,t,n){},9728:function(e,t,n){"use strict";var r=n("6917"),a=n.n(r);a.a},"9f37":function(e,t,n){"use strict";var r=n("7252"),a=n.n(r);a.a}}]);