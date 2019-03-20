import store from '../../store/index.js'

export default {
    name: 'Currency',
    template: `
        <div id="stats-container">
            <div id="currency-value-container" class="xp-containter">
                <div class="xp-icon">
                    <div class="xp-value"><b>16</b></div>
                    <!--<div class="xp-string"><b>XP</b></div>-->
                </div>
            </div>
            <div id="currency-value-container">
                <div id="currency-symbol" class="currency-value">                   
                    <div id="currency-value">{{ currencyValue }}</div>
                </div>
            </div>
        </div>`,
    computed: {
        currencyValue() {
            return '$'+store.state.player.numCurrency;
        }
    }
};
