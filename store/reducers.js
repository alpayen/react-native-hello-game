import {combineReducers} from "redux";
import types from "./types";

const defaultGamesState = {
    games: [],
    current_game: {},
    loading: true,
};


const gamesReducer = (state = defaultGamesState, action) => {
    switch (action.type) {
        case types.FETCH_BEGINS:
            return {
                ...state,
                loading:true,
            };
        case types.FETCH_ALL:
            return {
                ...state,
                loading:false,
                games: action.payload.games
            };
        case types.FETCH_BY_ID:
            return {
                ...state,
                loading:false,
                current_game: action.payload.game,
                last_selected_game : action.payload.game.name
            };
        case types.FETCH_INITIAL_GAME_STATE :
            return {...state, ...action.payload}
        default:
            return {...state};
    }
};


const reducer = combineReducers({
    gamesState: gamesReducer,
});

export default reducer;