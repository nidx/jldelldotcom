import camelCase from 'lodash/camelCase';

const reduxEvents = () => ({
  events: [],
  addEvent(namespace, eventName, reducer) {
    const newEvent = {
      type: `${namespace}/${eventName}`,
      namespace,
      eventName,
      reducer,
    };
    this.events.push(newEvent);
    return this;
  },
  getReducer(defaultState) {
    return (state = defaultState, action) => {
      let newState = state;
      this.events.filter(event => event.type === action.type).forEach(
          ({reducer}) => {
            newState = reducer(state, action.data);
          }
      );
      return newState;
    };
  },
  getActionCreators() {
    const actions = {};
    this.events.forEach(
        ({type, eventName}) => {
          actions[camelCase(eventName)] = data => ({type, data});
        }
    );
    return actions;
  },
});

export default reduxEvents;
