import store from '../store/Game.js'
const AnswerFeedback = () => import('./AnswerFeedback.js');
const Currency = () => import('./header/Currency.js');
const PlayerProgress = () => import('./footer/PlayerProgress.js');
const MainMap = () => import('./map/Main.js');
const AssembleUnits = () => import('./workshop/AssembleUnits.js');
const Chores = () => import('./chores/Chores.js');
const TimeDisplay = () => import('./Time.js');

export default {
    name: 'CurrentQuestion',
    props: {
        realValue: null
    },
    components: {
        AnswerFeedback,
        AssembleUnits,
        Chores,
        Currency,
        MainMap,
        PlayerProgress,
        TimeDisplay
    },
    template: `
        <div id="main">
            <div id="header">
                <div id="main-button" @click="setActiveScreen(0)"></div>
                <div id="chores-button" @click="setActiveScreen(1)"></div>
                <div id="build-button" @click="setActiveScreen(2)"></div>
                <time-display></time-display>
                <currency></currency>
            </div>
            <div id="main-content">
                <main-map></main-map>
                <assemble-units></assemble-units>
                <chores></chores>
            </div>
            <div id="footer">
                <player-progress></player-progress>
            </div>
        </div>`,
    computed: {
        chosenAnswer: {
            get() {
                return store.state.questionManager.chosenAnswerId;
            },
            set(value) {
                store.dispatch('questionManager/setAnswer', value, {root: true});
            }
        },
        currentQuestion() {
            return store.state.questionManager.currentQuestion;
        }
    },
    methods: {
        setActiveScreen(activeScreen) {
            store.dispatch('setActiveScreen', activeScreen, {root: true});
        }
    }
};
