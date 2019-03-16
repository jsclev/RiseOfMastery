import store from '../../store/Game.js'

export default {
    name: 'PlayerProgress',
    template: `
        <div id="player-progress">
            <div id="active-unit-name">
                 ALL SYSTEMS ONLINE
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
