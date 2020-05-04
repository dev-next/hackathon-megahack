(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"4b29":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("q-page",{staticClass:"q-pa-md"},[r("h2",[e._v("Adicionar Lista")]),r("q-form",{on:{submit:e.saveList}},[r("q-input",{attrs:{label:"Nome",rules:[function(e){return e.length>=3||"Nome precisa ter ao menos 3 caracteres"}]},model:{value:e.catalogue.name,callback:function(t){e.$set(e.catalogue,"name",t)},expression:"catalogue.name"}}),r("q-input",{attrs:{label:"Nome único (url/link)",rules:[function(){return e.validate||"Este nome já existe. Escolha outro"}],loading:e.loadingState},on:{blur:e.formatText,input:e.formatText},model:{value:e.catalogue.slug,callback:function(t){e.$set(e.catalogue,"slug",t)},expression:"catalogue.slug"}}),r("q-select",{attrs:{label:"Comprador/Cliente",options:e.userOptions},model:{value:e.catalogue.customer,callback:function(t){e.$set(e.catalogue,"customer",t)},expression:"catalogue.customer"}}),r("q-select",{staticClass:"q-mt-md",attrs:{label:"Itens",options:e.itemOptions,multiple:""},model:{value:e.catalogue.items,callback:function(t){e.$set(e.catalogue,"items",t)},expression:"catalogue.items"}}),e.errorMsg?r("div",{staticClass:"error-message q-mt-sm text-negative"},[e._v("\n        "+e._s(e.errorMsg)+"\n      ")]):e._e(),r("q-btn",{staticClass:"q-mt-lg btn-submit-product",attrs:{color:"primary",type:"submit",size:"lg",fill:"",disabled:e.isLoading}},[e._v("\n        Adicionar\n      ")])],1)],1)],1)},n=[],s=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("967e")),u=r.n(s),o=(r("96cf"),r("fa84")),i=r.n(o),c=(r("a481"),r("7f7f"),r("c47a")),l=r.n(c),g=r("2f62"),m=r("d624"),p=r.n(m),f=r("9530"),d=r.n(f);function v(){var e=p()(["\n  query items {\n    items {\n      id\n      name\n    },\n  }\n"]);return v=function(){return e},e}function b(){var e=p()(["\n  query users($where: UserWhereInput) {\n    users(where: $where) {\n      id\n      name\n    },\n  }\n"]);return b=function(){return e},e}function h(){var e=p()(["\n  query validateSlug ($slug: String!) {\n    validateSlug(slug: $slug)\n  }\n"]);return h=function(){return e},e}var O=d()(h()),w=d()(b()),y=d()(v());function q(){var e=p()(["\n  mutation createCatalogue($catalogue: CatalogueInput) {\n    createCatalogue(catalogue: $catalogue) {\n      id\n    }\n  }\n"]);return q=function(){return e},e}var $=d()(q());function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C={apollo:{validate:{query:O,variables:function(){return{slug:this.catalogue.slug}},update:function(e){return e.validateSlug}},users:{query:w,variables:function(){return{where:{type:"CUSTOMER"}}},update:function(e){return e.users}},items:{query:y,update:function(e){return e.items}}},data:function(){return{catalogue:{name:"",slug:"",items:[],customer:""},validate:!1,users:[],items:[],loadingState:!1,isLoading:!1,errorMsg:null}},computed:x(x({},Object(g["e"])(["loggedUser"])),{},{userOptions:function(){return this.users&&this.users.length?this.users.map((function(e){return{label:e.name,value:e.id}})):[]},itemOptions:function(){return this.items&&this.items.length?this.items.map((function(e){return{label:e.name,value:e.id}})):[]}}),methods:{refetch:function(){return this.$apollo.queries.validate.refetch()},formatText:function(){return this.catalogue.slug=this.replaceDiacritics(this.catalogue.slug.toLowerCase()).replace(/ .+/g,"-").replace(/[\W ]+/g,"-"),this.refetch()},replaceDiacritics:function(e){for(var t="",r=[/[\300-\306]/g,/[\340-\346]/g,/[\310-\313]/g,/[\350-\353]/g,/[\314-\317]/g,/[\354-\357]/g,/[\322-\330]/g,/[\362-\370]/g,/[\331-\334]/g,/[\371-\374]/g,/[\321]/g,/[\361]/g,/[\307]/g,/[\347]/g],a=["A","a","E","e","I","i","O","o","U","u","N","n","C","c"],n=0;n<r.length;n++)t=e.replace(r[n],a[n]);return t},saveList:function(){var e=this;return i()(u.a.mark((function t(){var r,a,n;return u.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,e.errorMsg=null,r=x(x({},e.catalogue),{},{items:e.catalogue.items&&e.catalogue.items.length?e.catalogue.items.map((function(e){return e.value})):[],seller:e.loggedUser.id,customer:e.catalogue.customer?e.catalogue.customer.value:""}),t.next=6,e.$apollo.mutate({mutation:$,variables:{catalogue:r}});case 6:if(a=t.sent,n=a.data,!n.errors){t.next=10;break}throw new Error(n.errors[0].message);case 10:return e.$q.notify({type:"positive",message:"Lista salva com sucesso!"}),e.resetForm(),t.abrupt("return",e.$router.push("/"));case 15:t.prev=15,t.t0=t["catch"](0),e.errorMsg=t.t0.message.replace(/GraphQL error:/,"");case 18:return t.prev=18,e.isLoading=!1,t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[0,15,18,21]])})))()},resetForm:function(){this.catalogue={name:"",slug:"",items:[],seller:"",customer:""}}}},k=C,L=(r("71ab"),r("2877")),S=r("eebe"),P=r.n(S),E=r("9989"),_=r("0378"),D=r("27f9"),M=r("ddd8"),Q=r("9c40"),I=Object(L["a"])(k,a,n,!1,null,"24bbf1b7",null);t["default"]=I.exports;P()(I,"components",{QPage:E["a"],QForm:_["a"],QInput:D["a"],QSelect:M["a"],QBtn:Q["a"]})},"71ab":function(e,t,r){"use strict";var a=r("ccf0"),n=r.n(a);n.a},ccf0:function(e,t,r){}}]);