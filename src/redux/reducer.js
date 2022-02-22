import * as types from './actionType'
const initialState = {
    coctails:[],
    coctail:[],
    loading:false,
    error:null
};
const cocTailReducer = (state=initialState, action) => {
    switch (action.type){
        case types.FETCH_COCTAIL_START:
            return{
                ...state,
                loading:true,
            };
        case types.FETCH_COCTAIL_SUCCESS:
            return{
                ...state,
                loading:false,
                coctails:action.payload
            };
            case types.FETCH_COCTAIL_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            };
            case types.GET_SINGLE_COCTAIL_START:
                return{
                    ...state,
                    loading:true,
                };
            case types.GET_SINGLE_COCTAIL_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    coctail:action.payload
                };
            case types.GET_SINGLE_COCTAIL_FAIL:
                return{
                    ...state,
                    loading:false,
                    error:action.payload,
                };
                case types.SEARCH_COCTAIL_START:
                    return{
                        ...state,
                        loading:true,
                    };
                case types.SEARCH_COCTAIL_SUCCESS:
                    return{
                        ...state,
                        loading:false,
                        coctails:action.payload
                    };
                    case types.SEARCH_COCTAIL_FAIL:
                    return{
                        ...state,
                        loading:false,
                        error:action.payload,
                    };
        default:
            return state;
    }
};
export default cocTailReducer