export default {
    namespaced: true,
    state: {
        components: [],
        name: 'ROC-13'
    },
    getters: {
        damage(state) {
            let damage = 0;

            for (let component of state.components) {
                damage += component.damage;
            }

            return damage;
        },
        defense(state) {
            let defense = 0;

            for (let component of state.components) {
                defense += component.defense;
            }

            return defense;
        },
        weight(state) {
            let weight = 0;

            for (let component of state.components) {
                weight += component.weight;
            }

            return weight;
        }
    },
    actions: {
        setActiveComponent({commit}, componentId) {
            commit('setActiveComponent', componentId);
        },
        setComponents({commit}, components) {
            commit('setComponents', components);
        }
    },
    mutations: {
        setComponents(state, components) {
            state.components = components;
        }
    }
};
