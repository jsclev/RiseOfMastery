import store from '../store/index.js'

const choreHistory = [{
    choreId: 1000,
    completedOn: new Date(2019, 1, 27, 15, 30),
}, {
    choreId: 1001,
    completedOn: new Date(2019, 1, 27, 15, 30),
}, {
    choreId: 1002,
    completedOn: new Date(2019, 1, 27, 15, 30),
}, {
    choreId: 1003,
    completedOn: new Date(2019, 1, 27, 15, 30),
}, {
    choreId: 1004,
    completedOn: new Date(2019, 1, 27, 15, 30),
}, {
    choreId: 1005,
    completedOn: new Date(2019, 1, 27, 15, 30),
}, {
    choreId: 1006,
    completedOn: new Date(2019, 1, 27, 15, 31),
}, {
    choreId: 1007,
    completedOn: new Date(2019, 1, 27, 15, 31),
}, {
    choreId: 1008,
    completedOn: new Date(2019, 1, 27, 15, 31),
}, {
    choreId: 1009,
    completedOn: new Date(2019, 1, 27, 15, 31),
}, {
    choreId: 2000,
    completedOn: new Date(2019, 1, 28, 15, 30),
}, {
    choreId: 2001,
    completedOn: new Date(2019, 1, 28, 15, 30),
}, {
    choreId: 2002,
    completedOn: new Date(2019, 1, 28, 15, 30),
}, {
    choreId: 2003,
    completedOn: new Date(2019, 1, 28, 15, 30),
}, {
    choreId: 2004,
    completedOn: new Date(2019, 1, 28, 15, 30),
}, {
    choreId: 2005,
    completedOn: new Date(2019, 1, 28, 15, 30),
}, {
    choreId: 2006,
    completedOn: new Date(2019, 1, 28, 15, 31),
}, {
    choreId: 2007,
    completedOn: new Date(2019, 1, 28, 15, 31),
}, {
    choreId: 2008,
    completedOn: new Date(2019, 1, 28, 15, 31),
}, {
    choreId: 2009,
    completedOn: new Date(2019, 1, 28, 15, 31),
}, {
    choreId: 4001,
    completedOn: new Date(2019, 2, 4, 15, 30),
}, {
    choreId: 4002,
    completedOn: new Date(2019, 2, 4, 15, 30),
}, {
    choreId: 4003,
    completedOn: new Date(2019, 2, 4, 15, 30),
}, {
    choreId: 4004,
    completedOn: new Date(2019, 2, 4, 15, 30),
}, {
    choreId: 4005,
    completedOn: new Date(2019, 2, 4, 15, 30),
}, {
    choreId: 4006,
    completedOn: new Date(2019, 2, 4, 15, 31),
}, {
    choreId: 4007,
    completedOn: new Date(2019, 2, 4, 15, 31),
}, {
    choreId: 4008,
    completedOn: new Date(2019, 2, 4, 15, 31),
}, {
    choreId: 4009,
    completedOn: new Date(2019, 2, 4, 15, 31),
}];

store.dispatch('choreManager/setHistory', choreHistory, {root: true});