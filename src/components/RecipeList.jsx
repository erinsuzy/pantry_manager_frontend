import { useState, useEffect } from 'react';
import axios from 'axios';

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/recipes');
            setRecipes(response.data);
        } catch (error) {
            console.error('Error fetching recipes', error);
        }
    };

    const deleteRecipe = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/recipes/${id}`);
            fetchRecipes();
        } catch (error) {
            console.error('Error deleting recipe', error);
        }
    };

    return (
        <div>
            <h2>Recipe List</h2>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        {recipe.name}
                        <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;
