export const initialState = {
    todos: [
        {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
        }
    ]    
}

export const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_ITEM':
            const newItem = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
            return{ 
                ...state,
                todos: [...state.todos, newItem]
            }
        case 'TOGGLE_COMPLETED':
            return(state.todos.map(i => {
                console.log(state)
                if (i.id === action.payload){
                    console.log('item found')
                    console.log(i.completed)
                    return {
                        ...i,
                        completed: !i.completed
                    }
                } else {
                    return i;
                }
            }))
            // return{
            //     ...state,
            //     todos: {completed: !completed}
            // }
        default:
            return state;
    }
}