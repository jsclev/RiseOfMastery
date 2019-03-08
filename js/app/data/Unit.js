import store from '../store/Game.js'

import questions1 from './questions/Questions1.js'
import questions2 from './questions/Questions2.js'
import questions3 from './questions/Questions3.js'
import questions4 from './questions/Questions4.js'

const units = [{
    unitId: 10,
    name: 'Virginia History',
    questions: [],
    subUnits: [{
        unitId: 20,
        name: 'The Colonial Period',
        questions: questions1.concat(questions2).concat(questions3).concat(questions4),
        subUnits: []
    }]
}];

store.dispatch('questionManager/setUnits', units, {root: true});
store.dispatch('questionManager/setActiveUnit', units[0].subUnits[0], {root: true});
