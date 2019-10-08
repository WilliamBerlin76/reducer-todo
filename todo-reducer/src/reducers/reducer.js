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
        case 'TOGGLE_COMPLETED':
            return( 
                state.map(item => {
                    if (item.id === action.payload){
                return{
                    ...item,
                    completed: !item.completed
                }
            } else {
                return item
            }
            })
          )
        default:
            return state;
    }
}