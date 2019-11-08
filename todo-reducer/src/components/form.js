import React, {useState, useReducer} from 'react';

import {initialState, reducer} from '../reducers/reducer'

const ItemForm = () => {
    const [{item, completed, itemsList}, dispatch] = useReducer(reducer, initialState);
    const [newItem, setNewItem] = useState('')
    const handleChanges = e => {
        setNewItem(e.tartet.value)
    }
    return(
        <>
            <form>
                <input
                  type="text"
                  name="newItem"
                  value={newItem}
                  onChange={handleChanges}
                />
            </form>
            <button type='submit' onClick={() => 
            dispatch({ type: 'ADD_ITEM', payload: newItem })}>Add Item</button>
        </>
    )
}

export default ItemForm
