export default {
    namespaced: true,
    state: {
        components: [],
        name: 'ROC-13'
    },
    getters: {
        attack(state) {
            let attack = 0;

            for (let component of state.components) {
                attack += component.damage;
            }

            return attack;
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
