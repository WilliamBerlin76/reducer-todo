import React, { useState, useReducer } from 'react';

import { initialState, reducer } from '../reducers/reducer'

const ItemList = () => {
    const [{item, completed}, dispatch] = useReducer(reducer, initialState);
    const [newItem, setNewItem] = useState({});

    return (
      <div>
          <p>{item}</p>
      </div>  
    )
}

export default ItemList;