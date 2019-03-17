import store from '../../store/index.js'

export default {
    name: 'ActiveComponentStats',
    template: `
        <div v-if="isVisible" id="active-component-stats-container">
            <div>{{ activeComponent.name }}</div>
            <div>Damage: {{ activeComponent.damage }}</div>
            <div>Weight: {{ activeComponent.weight }}</div>
            <div>Splash Damage: {{ activeComponent.splashDamage }}</div>
            <div>Damage: {{ activeComponent.damage }}</div>
            <div>Damage: {{ activeComponent.damage }}</div>
            <div>Damage: {{ activeComponent.damage }}</div>
        </div>`,
    computed: {
        activeComponent() {
            return store.state.componentManager.activeComponent;
        },
        isVisible() {
            return store.state.componentManager.activeComponent !== null;
        }
    },
    methods: {
        setActiveComponent(componentId) {
            store.dispatch('componentManager/setActiveComponent', componentId, {root: true});
        }
    }
};
