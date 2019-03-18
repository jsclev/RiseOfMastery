import store from '../../store/index.js'

export default {
    name: 'AllUnits',
    template: `
        <div id="active-unit-stats-container">
            <div>{{ unitName }} Loadout</div>
            
            <div id="unit-loadout-stats">
                <div>Weight: {{ weight }}</div>
                <div>damage: {{ damage }}</div>
                <div>Defense: {{ defense }}</div>
            </div>
        </div>`,
    computed: {
        damage() {
            return store.getters['unitManager/damage'];
        },
        defense() {
            return store.getters['unitManager/defense'];
        },
        unitName() {
            return store.state.unitManager.name;
        },
        weight() {
            return store.getters['unitManager/weight'];
        }
    },
    methods: {
        setActiveComponent(componentId) {
            store.dispatch('componentManager/setActiveComponent', componentId, {root: true});
        }
    }
};
