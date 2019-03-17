import player from './modules/Player.js'
import componentManager from './modules/ComponentManager.js'
import choreManager from './modules/ChoreManager.js'
import unitManager from './modules/UnitManager.js'

function preload() {
    this.load.audio('bg_music', 'assets/sounds/bg8.mp3');
    this.load.audio('correct', 'assets/sounds/correct2.wav');
}

function create() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    this.add.image(centerX + 250, centerY, 'bg');

    // const correctAudio = this.sound.add('correct');
    // correctAudio.setVolume(.05);
    // correctAudio.setLoop(true);
    // correctAudio.play();

    const bgMusic = this.sound.add('bg_music');
    bgMusic.setLoop(true);
    bgMusic.setVolume(.25);
    bgMusic.play();
}

export default new Vuex.Store({
    state: {
        // game: new Phaser.Game({
        //     type: Phaser.CANVAS,
        //     width: 1,
        //     height: 1,
        //     scene: {
        //         preload: preload,
        //         create: create
        //     }
        // }),
        activeScreen: 0,
        now: new Date()
    },
    modules: {
        player: player,
        componentManager: componentManager,
        choreManager: choreManager,
        unitManager: unitManager
    },
    actions: {
        setActiveScreen({commit}, activeScreen) {
            commit('setActiveScreen', activeScreen);
        },
        start({commit}) {
            setInterval(() => {
                commit('updateTime')
            }, 60000);
        }
    },
    mutations: {
        setActiveScreen(state, activeScreen) {
            state.activeScreen = activeScreen;
        },
        updateTime(state) {
            state.now = new Date();
        }
    }
});
