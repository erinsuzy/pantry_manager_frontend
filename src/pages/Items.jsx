import React from 'react';
import ItemList from '../components/ItemList';
import ItemForm from '../components/ItemForm';

function Items() {
    return (
        <div>
            <h1>Items</h1>
            <ItemForm />
            <ItemList />
        </div>
    );
}

export default Items;
