import store from '../../store/Game.js'

export default {
    name: 'AssembleUnits',
    template: `
        <div v-if="isVisible" id="assemble-units">
            <div id="assemble-units-left">
                            <div id="inventory"></div>
                <div id="part-stats"></div>
</div>
            <div id="assemble-units-right">

            </div>
        </div>`,
    computed: {
        isVisible() {
            return store.state.activeScreen === 2;
        }
    }
};
