export default {
    namespaced: true,
    state: {
        activeComponent: null,
        components: [],
    },
    actions: {
        setActiveComponent({commit}, componentId) {
            commit('setActiveComponent', componentId);
        },
        setAvailableComponents({commit}, components) {
            commit('setAvailableComponents', components);
        }
    },
    mutations: {
        setActiveComponent(state, componentId) {
            for (let component of state.components) {
                if (component.componentId === componentId) {
                    state.activeComponent = component;
                }
            }
        },
        setAvailableComponents(state, components) {
            state.components = components;
        }
    }
};
