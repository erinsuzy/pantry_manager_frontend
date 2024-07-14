import { useState, useEffect } from 'react';
import axios from 'axios';

function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/items');
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items', error);
        }
    };

    const deleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/items/${id}`);
            fetchItems();
        } catch (error) {
            console.error('Error deleting item', error);
        }
    };

    return (
        <div>
            <h2>Item List</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.category}
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
