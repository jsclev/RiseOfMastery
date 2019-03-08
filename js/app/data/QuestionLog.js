import store from '../store/Game.js'

const questionLog = [{
    questionId: 1000,
    answeredOn: new Date(2019, 1, 27, 15, 30),
    chosenAnswerId: 1001,
    correctAnswerId: 1003
}, {
    questionId: 1001,
    answeredOn: new Date(2019, 1, 27, 15, 30),
    chosenAnswerId: 1104,
    correctAnswerId: 1104
}, {
    questionId: 1002,
    answeredOn: new Date(2019, 1, 27, 15, 30),
    chosenAnswerId: 1202,
    correctAnswerId: 1202
}, {
    questionId: 1003,
    answeredOn: new Date(2019, 1, 27, 15, 30),
    chosenAnswerId: 1303,
    correctAnswerId: 1303
}, {
    questionId: 1004,
    answeredOn: new Date(2019, 1, 27, 15, 30),
    chosenAnswerId: 1403,
    correctAnswerId: 1404
}, {
    questionId: 1005,
    answeredOn: new Date(2019, 1, 27, 15, 30),
    chosenAnswerId: 1502,
    correctAnswerId: 1502
}, {
    questionId: 1006,
    answeredOn: new Date(2019, 1, 27, 15, 31),
    chosenAnswerId: 1602,
    correctAnswerId: 1601
}, {
    questionId: 1007,
    answeredOn: new Date(2019, 1, 27, 15, 31),
    chosenAnswerId: 1703,
    correctAnswerId: 1702
}, {
    questionId: 1008,
    answeredOn: new Date(2019, 1, 27, 15, 31),
    chosenAnswerId: 1801,
    correctAnswerId: 1801
}, {
    questionId: 1009,
    answeredOn: new Date(2019, 1, 27, 15, 31),
    chosenAnswerId: 1902,
    correctAnswerId: 1902
}, {
    questionId: 2000,
    answeredOn: new Date(2019, 1, 28, 15, 30),
    chosenAnswerId: 2003,
    correctAnswerId: 2003
}, {
    questionId: 2001,
    answeredOn: new Date(2019, 1, 28, 15, 30),
    chosenAnswerId: 2104,
    correctAnswerId: 2104
}, {
    questionId: 2002,
    answeredOn: new Date(2019, 1, 28, 15, 30),
    chosenAnswerId: 2201,
    correctAnswerId: 2201
}, {
    questionId: 2003,
    answeredOn: new Date(2019, 1, 28, 15, 30),
    chosenAnswerId: 2301,
    correctAnswerId: 2303
}, {
    questionId: 2004,
    answeredOn: new Date(2019, 1, 28, 15, 30),
    chosenAnswerId: 2402,
    correctAnswerId: 2402
}, {
    questionId: 2005,
    answeredOn: new Date(2019, 1, 28, 15, 30),
    chosenAnswerId: 2503,
    correctAnswerId: 2503
}, {
    questionId: 2006,
    answeredOn: new Date(2019, 1, 28, 15, 31),
    chosenAnswerId: 2602,
    correctAnswerId: 2602
}, {
    questionId: 2007,
    answeredOn: new Date(2019, 1, 28, 15, 31),
    chosenAnswerId: 2701,
    correctAnswerId: 2701
}, {
    questionId: 2008,
    answeredOn: new Date(2019, 1, 28, 15, 31),
    chosenAnswerId: 2803,
    correctAnswerId: 2801
}, {
    questionId: 2009,
    answeredOn: new Date(2019, 1, 28, 15, 31),
    chosenAnswerId: 2903,
    correctAnswerId: 2903
}, {
    questionId: 4001,
    answeredOn: new Date(2019, 2, 4, 15, 30),
    chosenAnswerId: 4101,
    correctAnswerId: 4101
}, {
    questionId: 4002,
    answeredOn: new Date(2019, 2, 4, 15, 30),
    chosenAnswerId: 4201,
    correctAnswerId: 4202
}, {
    questionId: 4003,
    answeredOn: new Date(2019, 2, 4, 15, 30),
    chosenAnswerId: 4301,
    correctAnswerId: 4301
}, {
    questionId: 4004,
    answeredOn: new Date(2019, 2, 4, 15, 30),
    chosenAnswerId: 4402,
    correctAnswerId: 4402
}, {
    questionId: 4005,
    answeredOn: new Date(2019, 2, 4, 15, 30),
    chosenAnswerId: 4503,
    correctAnswerId: 4503
}, {
    questionId: 4006,
    answeredOn: new Date(2019, 2, 4, 15, 31),
    chosenAnswerId: 4602,
    correctAnswerId: 4604
}, {
    questionId: 4007,
    answeredOn: new Date(2019, 2, 4, 15, 31),
    chosenAnswerId: 4703,
    correctAnswerId: 4703
}, {
    questionId: 4008,
    answeredOn: new Date(2019, 2, 4, 15, 31),
    chosenAnswerId: 4802,
    correctAnswerId: 4802
}, {
    questionId: 4009,
    answeredOn: new Date(2019, 2, 4, 15, 31),
    chosenAnswerId: 4901,
    correctAnswerId: 4901
}];

store.dispatch('player/questionLog/setQuestions', questionLog, {root: true});