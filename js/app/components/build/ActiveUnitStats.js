import store from '../../store/index.js'

export default {
    name: 'ActiveUnitStats',
    template: `
        <div id="active-unit-stats-container" class="container">
            <div class="stats-container-title">{{ unitName }}</div>
            
            <div id="unit-loadout-stats">
                <div class="stat-container">
                    <div class="stat-left-container stat-category weight-indicator"></div>
                    <div class="stat-right-container">
                        <div class="stat-title">Weight ({{ weightValue }} tons)</div>
                        <div class="stat-indicator-outer">
                            <div class="stat-indicator-inner"
                                 :style="{ width: weightLevel + '%'}"></div>
                        </div>
                    </div>
                </div>
                <div class="stat-container">
                    <div class="stat-left-container stat-category damage-indicator"></div>
                    <div class="stat-right-container">
                        <div class="stat-title">Damage</div>
                        <div class="stat-indicator-outer">
                            <div class="stat-indicator-inner"
                                 :style="{ width: damage + '%'}"></div>
                        </div>
                    </div>
                </div>
                <div class="stat-container">
                    <div class="stat-left-container stat-category splash-damage-indicator"></div>
                    <div class="stat-right-container">
                        <div class="stat-title">Splash Damage</div>
                        <div class="stat-indicator-outer">
                            <div class="stat-indicator-inner"
                                 :style="{ width: damage + '%'}"></div>
                        </div>
                    </div>
                </div>
                <div class="stat-container">
                    <div class="stat-left-container stat-category range-indicator"></div>
                    <div class="stat-right-container">
                        <div class="stat-title">Range</div>
                        <div class="stat-indicator-outer">
                            <div class="stat-indicator-inner"
                                 :style="{ width: weightLevel + '%'}"></div>
                        </div>
                    </div>
                </div>
                <div class="stat-container">
                    <div class="stat-left-container stat-category defense-indicator"></div>
                    <div class="stat-right-container">
                        <div class="stat-title">Defense</div>
                        <div class="stat-indicator-outer">
                            <div class="stat-indicator-inner"
                                 :style="{ width: defense + '%'}"></div>
                        </div>
                    </div>
                </div>
                <div class="stat-container">
                    <div class="stat-left-container stat-category movement-indicator"></div>
                    <div class="stat-right-container">
                        <div class="stat-title">Movement</div>
                        <div class="stat-indicator-outer">
                            <div class="stat-indicator-inner"
                                 :style="{ width: defense + '%'}"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
    computed: {
        damage() {
            return 100 - store.getters['unitManager/damage'];
        },
        defense() {
            return 100 - store.getters['unitManager/defense'];
        },
        unitName() {
            return store.state.unitManager.name;
        },
        weightLevel() {
            return 100 - store.getters['unitManager/weight'];
        },
        weightValue() {
            return store.getters['unitManager/weight'];
        }
    },
    methods: {
        setActiveComponent(componentId) {
            store.dispatch('componentManager/setActiveComponent', componentId, {root: true});
        }
    }
};
