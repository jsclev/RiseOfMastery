import store from '../store/index.js'

const components = [{
    componentId: 1,
    name: 'Hammer Fist',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 9,
    minSplashDamage: 0,
    defense: 3
}, {
    componentId: 3,
    name: 'Armored Chassis',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 28,
    splashDamage: 0,
    defense: 3
}, {
    componentId: 4,
    name: 'Photon Blaster',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 12,
    splashDamage: 0,
    defense: 3
}, {
    componentId: 5,
    name: 'Thrusters',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 3,
    splashDamage: 0,
    defense: 3
}, {
    componentId: 5,
    name: 'Armored Legs',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 14,
    splashDamage: 0,
    defense: 3
}];

store.dispatch('unitManager/setComponents', components, {root: true});
