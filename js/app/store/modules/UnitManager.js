export default {
    namespaced: true,
    state: {
        components: [],
        name: null
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
        movementLevel(state) {
            let sum = 0;

            for (let component of state.components) {
                sum += component.movement;
            }

            return (sum / 5) * 100;
        },
        movementValue(state) {
            let sum = 0;

            for (let component of state.components) {
                sum += component.movement;
            }

            return sum;
        },
        weightLevel(state) {
            let weight = 0;

            for (let component of state.components) {
                weight += component.weight;
            }

            return weight;
        },
        weightValue(state) {
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
        },
        setName({commit}, name) {
            commit('setName', name);
        }
    },
    mutations: {
        setComponents(state, components) {
            state.components = components;
        },
        setName(state, name) {
            state.name = name;
        }
    }
};
