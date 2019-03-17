import store from '../../store/index.js'

export default {
    name: 'ActiveUnitStats',
    template: `
        <div id="active-unit-stats-container">
            <div>{{ unitName }} Loadout</div>
            
            <div id="unit-loadout-stats">
                <div>Weight: {{ weight }}</div>
                <div>Attack: {{ attack }}</div>
                <div>Defense: {{ defense }}</div>
            </div>
        </div>`,
    computed: {
        attack() {
            return store.getters['unitManager/attack'];
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
