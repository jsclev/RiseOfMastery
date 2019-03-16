import App from './components/Base.js';
import store from './store/Game.js';

new Vue({
    render: h => h(App),
}).$mount('#vuex-hook');

store.dispatch('start', null, {root: true});
