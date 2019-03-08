import store from '../store/Game.js'

export default {
    name: 'PlayerProgress',
    template: `
        <div id="player-progress">
            <div id="active-unit-name">
                 {{ activeUnit.name }}
            </div>
            <div id="progress-correct-outer">
                <div id="progress-correct-inner-label">
                    Correct
                </div>
                <div id="progress-correct-inner"
                     :style="{ width: percentageCorrect + '%' }">
                    {{ percentageCorrect }}%
                </div>
            </div>
            <div id="progress-complete-outer">
                <div id="progress-complete-inner-label">
                    Complete
                </div>
                <div id="progress-complete-inner"
                     :style="{ width: percentageComplete + '%' }">
                    {{ percentageComplete }}%
                </div>
            </div>
        </div>`,
    computed: {
        activeUnit() {
            return store.state.questionManager.activeUnit;
        },
        numQuestionsInUnit() {
            return this.activeUnit.questions.length;
        },
        numAnsweredCorrectly() {
            return store.getters['player/questionLog/numAnsweredCorrectly']
        },
        percentageComplete() {
            return store.getters['questionManager/activeUnitPercentageComplete'];
        },
        percentageCorrect() {
            return store.getters['player/questionLog/percentageCorrect'];
        }
    }
};
