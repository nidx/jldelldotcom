import reduxEvents from './redux-events';

const countUp = state => state + 1;
const counterEvents = reduxEvents()
    .addEvent('COUNTER', 'COUNT_UP', countUp);

const counter = counterEvents.getReducer(0);
const counterActionCreator = counterEvents.getActionCreators();

export {counter, counterActionCreator};
