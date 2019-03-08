import store from '../store/Game.js'

export default {
    name: 'Currency',
    template: `
        <div id="stats-container">
            <div id="currency-value">{{ currencyValue }}</div>
        </div>`,
    computed: {
        currencyValue() {
            return store.state.player.numCurrency;
        }
    }
};
