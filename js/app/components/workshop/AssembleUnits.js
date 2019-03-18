import store from '../../store/index.js'
const Inventory = () => import('./Inventory.js');
const ActiveComponentStats = () => import('./ActiveComponentStats.js');
const ActiveUnitStats = () => import('./ActiveUnitStats.js');
const AllUnits = () => import('./AllUnits.js');

export default {
    name: 'AssembleUnits',
    components: {
        ActiveUnitStats,
        ActiveComponentStats,
        AllUnits,
        Inventory
    },
    template: `
        <div v-if="isVisible" id="assemble-units">
            <div id="assemble-units-left">
                <inventory></inventory>
                <active-component-stats></active-component-stats>
            </div>
            <div id="assemble-units-center">

            </div>
            <div id="assemble-units-right">
                <active-unit-stats></active-unit-stats>
            </div>
        </div>`,
    computed: {
        isVisible() {
            return store.state.activeScreen === 2;
        }
    }
};
