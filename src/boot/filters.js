import Vue from 'vue';

const dateObjFmt = (d) => d.toLocaleDateString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });

const moneyNumFmt = (m) => Number(m).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

Vue.filter('dateObj', dateObjFmt);
Vue.filter('moneyNum', moneyNumFmt);
