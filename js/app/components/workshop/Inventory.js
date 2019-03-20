import store from '../../store/index.js'

export default {
    name: 'Inventory',
    template: `
        <div id="inventory-container">
            <div v-for="component in components" 
                 class="inventory-component"
                 draggable="true"
                 @click="setActiveComponent(component.componentId)">
                 
            </div>
        </div>`,
    computed: {
        components() {
            return store.state.componentManager.components;
        }
    },
    methods: {
        setActiveComponent(componentId) {
            store.dispatch('componentManager/setActiveComponent', componentId, {root: true});
        }
    }
};
