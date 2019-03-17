import store from '../../store/index.js'

export default {
    name: 'MainMap',
    template: `
        <div v-if="isVisible" id="map">
            &nbsp;
        </div>`,
    computed: {
        isVisible() {
            return store.state.activeScreen === 0;
        }
    }
};
