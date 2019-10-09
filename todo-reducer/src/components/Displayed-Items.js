import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';

import ItemForm from './form'

const ItemList = () => {
    const [{item, completed, todos}, dispatch] = useReducer(reducer, initialState);
    const [newItem, setNewItem] = useState('');
    const handleChanges = e => {
        setNewItem(e.target.value)
    }
    
    return (
      <div>
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
          
          {todos.map(i => {
              console.log(todos)
              return(
                  <p className='item-list' key={i.id} 
                  onClick={() => {
                      dispatch({type: 'TOGGLE_COMPLETED', payload: i.id})
                      
                    }}>{i.item}</p>
              )
          })}
      </div>  
    )
}

export default ItemList;