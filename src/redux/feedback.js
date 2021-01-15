import * as ActionTypes from './ActionTypes';

export const Feedback = (state = {
    errMess: null,
    feedback: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            var initialFeedback = action.payload;
            return { ...state, feedback: state.feedback.concat(initialFeedback), errMess: null };

        default:
            return state;
    }
}