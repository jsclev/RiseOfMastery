import store from '../store/index.js'

const components = [{
    componentId: 1,
    name: 'Hammer Fist',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 10,
    minSplashDamage: 0,
    defense: 3
}, {
    componentId: 2,
    name: 'Boom Stick',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 10,
    splashDamage: 0,
    defense: 3
}, {
    componentId: 3,
    name: 'Armored Chassis',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 10,
    splashDamage: 0,
    defense: 3
}, {
    componentId: 3,
    name: 'Chromium Chassis',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 3,
    splashDamage: 0,
    defense: 3
}, {
    componentId: 4,
    name: 'Photon Blaster',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 10,
    splashDamage: 0,
    defense: 3
}, {
    componentId: 5,
    name: 'Thrusters',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 10,
    splashDamage: 0,
    defense: 3
}, {
    componentId: 6,
    name: 'Rocket Launcher',
    level: 1,
    range: 4,
    cost: 3,
    damage: 3,
    weight: 14,
    splashDamage: 2,
    defense: 3
}, {
    componentId: 7,
    name: 'Phaser Cannon',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 10,
    splashDamage: 0,
    defense: 3
}];

store.dispatch('componentManager/setAvailableComponents', components, {root: true});
