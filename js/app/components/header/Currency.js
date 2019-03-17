import store from '../../store/index.js'

export default {
    name: 'Currency',
    template: `
        <div id="stats-container">
            <div id="currency-value-container" class="header-item">
                <div id="level-symbol" class="fa fa-level-up-alt fa-3x"></div>
                <div id="level-value">{{ currencyValue }}</div>
            </div>
            <div id="currency-value-container" class="header-item">
                <div id="currency-symbol" class="fa fa-dollar-sign fa-3x"></div>
                <div id="currency-value">{{ currencyValue }}</div>
            </div>
        </div>`,
    computed: {
        currencyValue() {
            return store.state.player.numCurrency;
        }
    }
};
