import store from '../../store/index.js'

const components = [{
    componentId: 1,
    name: 'Hammer',
    level: 1,
    range: 1,
    cost: 1,
    damage: 1.1,
    weight: 2,
    minSplashDamage: 0,
    defense: 3,
    category: 'component-melee1'
}, {
    componentId: 2,
    name: 'Battle Axe',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 10,
    splashDamage: 0,
    defense: 3,
    category: 'component-melee2'
}, {
    componentId: 3,
    name: 'Double Battle Axe',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 10,
    splashDamage: 0,
    defense: 3,
    category: 'component-melee3'
}, {
    componentId: 4,
    name: 'Short Sword',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 3,
    splashDamage: 0,
    defense: 3,
    category: 'component-melee4'
}, {
    componentId: 5,
    name: 'Long Sword',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 10,
    splashDamage: 0,
    defense: 3,
    category: 'component-melee5'
}, {
    componentId: 6,
    name: 'Bow',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 10,
    splashDamage: 0,
    defense: 3,
    category: 'component-melee6'
}, {
    componentId: 7,
    name: 'Spear',
    level: 1,
    range: 4,
    cost: 3,
    damage: 3,
    weight: 14,
    splashDamage: 2,
    defense: 3,
    category: 'component-melee7'
}, {
    componentId: 8,
    name: 'Magic Staff',
    level: 1,
    range: 1,
    cost: 1,
    damage: 4,
    weight: 10,
    splashDamage: 0,
    defense: 3,
    category: 'component-melee8'
}];

store.dispatch('componentManager/setAvailableComponents', components, {root: true});
