(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"0ee9":function(e,t,n){},"4d89":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.catalogue?n("div",{staticClass:"q-pa-md showroom-index"},e._l(e.catalogue.items,(function(t){return n("s-product",e._b({key:t.id},"s-product",t,!1))})),1):e._e()},a=[],s=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),i=n.n(s),c=n("967e"),o=n.n(c),u=(n("96cf"),n("fa84")),l=n.n(u),d=n("2f62"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"product-item q-mb-lg",on:{click:e.productDetail}},[n("q-img",{staticClass:"rounded-borders product-img",staticStyle:{height:"70vw",width:"70vw"},attrs:{src:e.url||"https://via.placeholder.com/500",alt:e.name}}),n("div",{staticClass:"details"},[n("div",{staticClass:"left"},[n("div",{staticClass:"name q-mb-xs"},[e._v(e._s(e.name))]),n("div",{staticClass:"fields"},e._l(e.fields,(function(t,r){return n("div",{key:r,staticClass:"field"},[n("span",{staticClass:"label"},[e._v(e._s(t.label)+": ")]),n("span",{staticClass:"value"},[e._v(e._s(t.value))])])})),0)]),n("div",{staticClass:"right"},[n("div",{staticClass:"price"},[e._v(e._s(e._f("moneyNum")(e.value)))])])])],1)},f=[],v=(n("c5f6"),{props:{id:{type:String},photos:{type:Array},name:{type:String,default:""},value:{type:Number,default:0},fields:{type:Array}},computed:{url:function(){return this.photos[0]}},methods:{productDetail:function(){this.$router.push("/v/".concat(this.$route.params.id,"/item/").concat(this.id))}}}),m=v,b=(n("614c"),n("2877")),h=n("eebe"),g=n.n(h),y=n("068f"),w=Object(b["a"])(m,p,f,!1,null,"086b088e",null),O=w.exports;g()(w,"components",{QImg:y["a"]});var _=n("6e7a");function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S={components:{sProduct:O},mounted:function(){var e=this;return l()(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.catalogue.id){t.next=2;break}return t.abrupt("return");case 2:if(t.prev=2,!(e.$route.params.id.length<5)){t.next=5;break}throw new Error("Invalid Slug");case 5:return t.next=7,e.$apollo.query({query:_["a"],variables:{slug:e.$route.params.id}});case 7:if(n=t.sent,r=n.data.catalogueBySlug,r){t.next=11;break}throw new Error("Invalid Slug");case 11:e.SAVE_CATALOGUE(r),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](2),e.$router.push("/v/Erro");case 17:case"end":return t.stop()}}),t,null,[[2,14]])})))()},computed:C({},Object(d["e"])("showroom",["catalogue"])),methods:C({},Object(d["d"])("showroom",["SAVE_CATALOGUE"]))},$=S,k=Object(b["a"])($,r,a,!1,null,"9003b970",null);t["default"]=k.exports},"614c":function(e,t,n){"use strict";var r=n("0ee9"),a=n.n(r);a.a},"6e7a":function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l}));var r=n("d624"),a=n.n(r),s=n("9530"),i=n.n(s);function c(){var e=a()(["\n  query item ($id: ID!) {\n    item(itemId: $id) {\n      id\n      description\n      fields {\n        label\n        value\n      }\n      name\n      photos\n      tags\n      value\n    }\n  }\n"]);return c=function(){return e},e}function o(){var e=a()(["\n  query catalogueBySlug($slug: String!) {\n    catalogueBySlug(slug: $slug) {\n      id\n      name\n      seller {\n        id\n        email\n        phone\n      }\n      customer {\n        name\n        phone\n      }\n      store {\n        id\n      }\n      items {\n        id\n        name\n        photos\n        description\n        tags\n        value\n        fields {\n          label\n          value\n        }\n        store {\n          name\n        }\n      }\n      slug\n      creationDate\n      updateDate\n      active\n    }\n  }\n"]);return o=function(){return e},e}var u=i()(o()),l=i()(c())}}]);