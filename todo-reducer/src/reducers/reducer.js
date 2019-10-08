export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
    itemsList: []
}

export const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_ITEM':
            const newItem = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return {
                ...state,
                itemsList: [...state.itemsList, newItem]
            };
        default:
            return state;
    }
}