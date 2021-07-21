import { createStore, combineReducers } from 'redux';
import { Dishes } from './DishesReducer';
import { Comments } from './CommentsReducer';
import { Promotions } from './PromotionsReducer';
import { Leaders } from './LeadersReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}