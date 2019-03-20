import store from '../store/index.js'
const Currency = () => import('./header/Currency.js');
const PlayerProgress = () => import('./footer/PlayerProgress.js');
const MainMap = () => import('./map/Main.js');
const AssembleUnits = () => import('./workshop/AssembleUnits.js');
const Chores = () => import('./chores/Chores.js');
const TimeDisplay = () => import('./Time.js');

export default {
    components: {
        AssembleUnits,
        Chores,
        Currency,
        MainMap,
        PlayerProgress,
        TimeDisplay
    },
    template: `
        <div id="main-wrapper"
             :class="{ 'bg-main': activeModule === 0, 'bg-workshop': activeModule === 2 }">
            <div id="header">
                <div id="main-button" class="fa fa-home fa-3x header-item container" @click="setActiveScreen(0)"></div>
                <div id="chores-button" class="fa fa-tasks fa-3x header-item container" @click="setActiveScreen(1)"></div>
                <div id="build-button" class="fa fa-tools fa-3x header-item container" @click="setActiveScreen(2)"></div>
                <!--<time-display></time-display>-->
                <currency></currency>
            </div>
            <div id="main-content">
                <main-map></main-map>
                <assemble-units></assemble-units>
                <chores></chores>
            </div>
            <!--<div id="footer">-->
                <!--<player-progress></player-progress>-->
            <!--</div>-->
        </div>`,
    computed: {
        activeModule() {
            return store.state.activeScreen;
        }
    },
    methods: {
        setActiveScreen(activeScreen) {
            store.dispatch('setActiveScreen', activeScreen, {root: true});
        }
    }
};
