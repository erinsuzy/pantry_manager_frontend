import React, { useState } from 'react';
import axios from 'axios';

function RecipeForm() {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/recipes', { name, ingredients: ingredients.split(',') });
            setName('');
            setIngredients('');
        } catch (error) {
            console.error('Error adding recipe', error);
        }
    };

    return (
        <div>
            <h2>Add Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Ingredients (comma separated)</label>
                    <input
                        type="text"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default RecipeForm;
