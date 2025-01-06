// store/reducers/counterReducer.js
import counterActionsType from "../actions/counterActions";

const initialState = {
    count: 0
};
function counterReducer(state = initialState, action) {
    switch (action.type) {
        case counterActionsType.INCREMENT:
            return {
                count: state.count + 1
            };
        case counterActionsType.DECREMENT:
            return {
                count: state.count - 1
            }
        case counterActionsType.RESET:
            return {
                count: initialState.count
            }
        default:
            return state;
    }
}
export default counterReducer;