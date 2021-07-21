import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.data;
            comment.id = state.length;  // The new comment will be in 
            // position COMMENTS.length, whereas the last comment inserted 
            // before was added at location COMMENTS.length - 1
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
};