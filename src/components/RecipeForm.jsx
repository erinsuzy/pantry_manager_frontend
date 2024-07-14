import { useState } from 'react';
import axios from 'axios';

function RecipeForm() {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const ingredientsArray = ingredients.split(',').map(item => ({ ingredient: item.trim() }));
        try {
            const response = await axios.post('http://localhost:8080/api/recipes', {
                name,
                ingredients: ingredientsArray
            });
            console.log(response.data);
            setName('');
            setIngredients('');
            setError(null);  // Clear any previous errors
        } catch (error) {
            console.error('Error adding recipe', error);
            setError(error.response?.data?.message || 'An error occurred');
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
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default RecipeForm;





