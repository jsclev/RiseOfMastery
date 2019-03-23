import store from '../../store/index.js'

export default {
    name: 'Chores',
    template: `
        <div v-if="isVisible" id="chores-main-container">
            <div id="chores-left-panel">
                <div id="chore-item-available-list">
                    <div class="chore-item container">
                        <div class="chore-item-text">Load/unload dishwasher</div>
                        <div class="chore-item-value">$2</div>
                    </div>
                    <div class="chore-item container">
                        <div class="chore-item-text">Fold one load of laundry</div>
                        <div class="chore-item-value">$2</div>
                    </div>
                    <div class="chore-item container">
                        <div class="chore-item-text">Sweep kitchen</div>
                        <div class="chore-item-value">$2</div>
                    </div>
                </div>
            </div>
            <div id="chores-right-panel">
                <div id="chore-item-assigned-list">
                    <div class="chore-item container">
                        <div class="chore-item-text">Load/unload dishwasher</div>
                        <div class="chore-item-value">$2</div>
                    </div>
                    <div class="chore-item container">
                        <div class="chore-item-text">Fold one load of laundry</div>
                        <div class="chore-item-value">$2</div>
                    </div>
                    <div class="chore-item container">
                        <div class="chore-item-text">Sweep kitchen</div>
                        <div class="chore-item-value">$2</div>
                    </div>
                </div>
            </div>
        </div>`,
    computed: {
        isVisible() {
            return store.state.activeScreen === 1;
        }
    }
};
