(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{a65e:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"register-page"},[o("div",{staticClass:"container"},[o("h5",[t._v(t._s(t.title))]),o("transition",{attrs:{appear:"",mode:"out-in","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[1===t.step?o("q-form",{key:"1",on:{submit:t.onUserSubmit}},[o("q-input",{attrs:{label:"Nome",rules:[function(t){return!!t||"Campo nome é obrigatório"}]},model:{value:t.owner.name,callback:function(e){t.$set(t.owner,"name",e)},expression:"owner.name"}}),o("q-input",{attrs:{type:"tel",label:"Celular",rules:[function(t){return 15==t.length||"Campo celular inválido"}],mask:"(##) #####-####"},model:{value:t.owner.phone,callback:function(e){t.$set(t.owner,"phone",e)},expression:"owner.phone"}}),o("q-input",{attrs:{type:t.hidePass?"password":"text",label:"Senha",rules:[function(t){return t.length>=6||"Campo senha precisa ter no mínimo 6 caracteres"}]},scopedSlots:t._u([{key:"append",fn:function(){return[o("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.hidePass?"visibility_off":"visibility"},on:{click:function(e){t.hidePass=!t.hidePass}}})]},proxy:!0}],null,!1,624158838),model:{value:t.owner.password,callback:function(e){t.$set(t.owner,"password",e)},expression:"owner.password"}}),o("div",{staticClass:"button-container q-mt-lg"},[o("q-btn",{attrs:{size:"lg",flat:"",color:"grey-7"},on:{click:t.lastStep}},[t._v("Voltar")]),o("q-btn",{class:t.primaryColor,attrs:{type:"submit",size:"lg",flat:""}},[t._v("\n            Avançar\n          ")])],1)],1):2===t.step?o("q-form",{key:"2",on:{submit:t.onStoreSubmit}},[o("q-input",{attrs:{label:"Nome da Loja",rules:[function(t){return!!t||"Campo nome não pode ser vazio"}]},model:{value:t.store.name,callback:function(e){t.$set(t.store,"name",e)},expression:"store.name"}}),o("q-input",{attrs:{mask:"##.###.###/####-##",label:"CNPJ",rules:[function(t){return 18==t.length||"Campo CNPJ Inválido"}]},model:{value:t.store.documentNumber,callback:function(e){t.$set(t.store,"documentNumber",e)},expression:"store.documentNumber"}}),o("q-input",{attrs:{label:"Telefone",mask:"(##) ####-####"},model:{value:t.store.phones[0],callback:function(e){t.$set(t.store.phones,0,e)},expression:"store.phones[0]"}}),o("div",{staticClass:"button-container q-mt-lg"},[o("q-btn",{attrs:{size:"lg",flat:"",color:"grey-7"},on:{click:t.lastStep}},[t._v("Voltar")]),o("q-btn",{class:t.primaryColor,attrs:{type:"submit",size:"lg",flat:""}},[t._v("\n            Próximo\n          ")])],1)],1):3===t.step?o("q-form",{key:"3",on:{submit:t.onStoreSubmit}},[o("q-input",{attrs:{label:"CEP",mask:"#####-###",rules:[function(t){return!!t||"Campo CEP não pode ser vazio"}]},on:{blur:t.searchByZipCode},model:{value:t.store.location.zipcode,callback:function(e){t.$set(t.store.location,"zipcode",e)},expression:"store.location.zipcode"}}),o("div",{staticClass:"address-with-extra"},[o("q-input",{attrs:{label:"Rua",rules:[function(t){return!!t||"Campo rua não pode ser vazio"}]},model:{value:t.store.location.street,callback:function(e){t.$set(t.store.location,"street",e)},expression:"store.location.street"}}),o("q-input",{attrs:{rules:[function(t){return!!t||""}],label:"Nº"},model:{value:t.store.location.number,callback:function(e){t.$set(t.store.location,"number",e)},expression:"store.location.number"}})],1),o("q-input",{attrs:{label:"Bairro",rules:[function(t){return!!t||"Campo bairro não pode ser vazio"}]},model:{value:t.store.location.neighborhood,callback:function(e){t.$set(t.store.location,"neighborhood",e)},expression:"store.location.neighborhood"}}),o("div",{staticClass:"address-with-extra"},[o("q-input",{attrs:{label:"Cidade",rules:[function(t){return!!t||"Campo cidade não pode ser vazio"}]},model:{value:t.store.location.city,callback:function(e){t.$set(t.store.location,"city",e)},expression:"store.location.city"}}),o("q-input",{attrs:{label:"Estado",rules:[function(t){return!!t||""}],mask:"AA"},model:{value:t.store.location.state,callback:function(e){t.$set(t.store.location,"state",e)},expression:"store.location.state"}})],1),o("div",{staticClass:"button-container q-mt-lg"},[o("q-btn",{attrs:{size:"lg",flat:"",color:"grey-7"},on:{click:t.lastStep}},[t._v("Voltar")]),o("q-btn",{class:t.primaryColor,attrs:{type:"submit",disable:t.isSavingUser,size:"lg",flat:""}},[t._v("\n            Concluir\n          ")])],1)],1):o("div",[t._v("\n        Cadastro realizado com Sucesso!\n      ")])],1)],1),o("div",{staticClass:"slice",style:t.sliceStyle})])},r=[],s=(o("8e6e"),o("8a81"),o("ac6a"),o("cadf"),o("06db"),o("456d"),o("967e")),a=o.n(s),i=(o("96cf"),o("fa84")),c=o.n(i),l=o("c47a"),u=o.n(l),p=o("2f62"),d=o("d624"),m=o.n(d),b=o("9530"),f=o.n(b);function h(){var t=m()(["\n  mutation createStoreAndOwner($owner: UserInput!, $store: StoreInput!) {\n    createStoreAndOwner(user: $owner, store: $store) {\n      id\n    }\n  }\n"]);return h=function(){return t},t}var v=f()(h());function g(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function y(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?g(Object(o),!0).forEach((function(e){u()(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):g(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var w=3,C={data:function(){return{step:1,title:"Cadastre seu Usuário",hidePass:!0,isSavingUser:!1,owner:{name:"",phone:"",password:""},store:{name:"",documentNumber:"",phones:[""],location:{zipcode:"",country:"",state:"",city:"",neighborhood:"",street:"",number:""}},slice:{height:33,opacity:.7},animation:null}},computed:y({sliceStyle:function(){var t=this.slice,e=t.height,o=t.opacity;return{height:"".concat(e,"vh"),opacity:"".concat(o)}},primaryColor:function(){return["text-".concat(this.pageColor)]}},Object(p["e"])("login",["pageColor"])),created:function(){var t=this;this.$q.dark.set(!1),this.animation=setInterval((function(){t.slice.height+=1,t.slice.opacity+=.01,150===t.slice.height&&clearInterval(t.animation)}),2)},watch:{step:function(){1===this.step&&(this.title="Cadastre seu Usuário"),2!==this.step&&3!==this.step||(this.title="Cadastre sua Loja"),4===this.step&&(this.title="Obrigado!")}},methods:{nextStep:function(){this.step+=this.step>=w?0:1},lastStep:function(){return 1===this.step?this.$router.push("/Login"):(this.step-=this.step<=1?0:1,this.step)},onUserSubmit:function(){this.nextStep()},onStoreSubmit:function(){var t=this;return c()(a.a.mark((function e(){var o;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(2!==t.step){e.next=2;break}return e.abrupt("return",t.nextStep());case 2:return t.isSavingUser=!0,e.prev=3,e.next=6,t.$apollo.mutate({mutation:v,variables:{owner:t.owner,store:t.store}});case 6:return o=e.sent,t.isSavingUser=!1,t.step=4,setTimeout((function(){return t.$router.push("/Login")}),2500),e.abrupt("return",o);case 13:e.prev=13,e.t0=e["catch"](3),console.error(e.t0),t.isSavingUser=!1;case 17:case"end":return e.stop()}}),e,null,[[3,13]])})))()},searchByZipCode:function(){var t=this;return c()(a.a.mark((function e(){var o,n;return a.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("https:/viacep.com.br/ws/".concat(t.store.location.zipcode,"/json"));case 3:o=e.sent,n=o.data,t.store.location.street=n.logradouro,t.store.location.neighborhood=n.bairro,t.store.location.city=n.localidade,t.store.location.state=n.uf,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}}},k=C,S=(o("e758"),o("2877")),x=o("eebe"),q=o.n(x),O=o("9989"),$=o("0378"),P=o("27f9"),z=o("0016"),j=o("9c40"),_=Object(S["a"])(k,n,r,!1,null,"48502cb8",null);e["default"]=_.exports;q()(_,"components",{QPage:O["a"],QForm:$["a"],QInput:P["a"],QIcon:z["a"],QBtn:j["a"]})},dd48:function(t,e,o){},e758:function(t,e,o){"use strict";var n=o("dd48"),r=o.n(n);r.a}}]);