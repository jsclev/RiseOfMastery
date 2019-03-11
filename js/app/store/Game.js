import player from './modules/Player.js'
import questionManager from './modules/QuestionManager.js'

function preload() {
    this.load.image('bg', 'assets/images/bg.png');
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
