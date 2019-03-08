import player from './modules/Player.js'
import questionManager from './modules/QuestionManager.js'

function preload() {
    this.load.on('progress', function (value) {
        // console.log(value);
    });

    this.load.on('fileprogress', function (file) {
        // console.log(file.src);
    });

    this.load.on('complete', function () {
        // console.log('complete');
        // console.log(Date.now());
    });

    this.load.image('bg', 'assets/images/bg.png');
    this.load.audio('bg_music', 'assets/sounds/bg3.wav');
    this.load.audio('correct', 'assets/sounds/correct.wav');
}

function create() {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    this.add.image(centerX + 250, centerY, 'bg');
    this.sound.play('bg_music');
}

export default new Vuex.Store({
    state: {
        game: new Phaser.Game({
            type: Phaser.CANVAS,
            width: window.innerWidth,
            height: window.innerHeight,
            scene: {
                preload: preload,
                create: create
            }
        }),
        activeUnit: null,
        questionIndex: 0,
        isCorrect: false,
        chosenAnswerId: null,
        currentQuestion: {}
    },
    modules: {
        player: player,
        questionManager: questionManager
    }
});
