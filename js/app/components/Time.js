import store from '../store/index.js'

export default {
    name: 'TimeDisplay',
    template: `
        <div id="time-container">
            <div id="time-value">{{ timeValue }}</div>
        </div>`,
    computed: {
        timeValue() {
            return 'Day 01 ' + moment(store.now).format('HH:mm');
        }
    }
};
