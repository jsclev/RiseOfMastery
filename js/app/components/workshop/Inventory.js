import store from '../../store/Game.js'

export default {
    name: 'Inventory',
    template: `
        <div id="inventory-container">

        </div>`,
    computed: {
        components() {
            return store.state.activeScreen === 2;
        }
    }
};
