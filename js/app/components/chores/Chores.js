import store from '../../store/Game.js'

export default {
    name: 'Chores',
    template: `
        <div v-if="isVisible" id="chores">
            <div id="chore-item-list">
                <div class="chore-item">
                    <div class="chore-item-text">Load/unload dishwasher</div>
                    <div class="chore-item-value">$2</div>
                </div>
                <div class="chore-item">
                    <div class="chore-item-text">Fold one load of laundry</div>
                    <div class="chore-item-value">$2</div>
                </div>
                <div class="chore-item">
                    <div class="chore-item-text">Sweep kitchen</div>
                    <div class="chore-item-value">$2</div>
                </div>
            </div>
        </div>`,
    computed: {
        isVisible() {
            return store.state.activeScreen === 1;
        }
    }
};
