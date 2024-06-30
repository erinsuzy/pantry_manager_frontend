import React from 'react';
import RecipeList from '../components/RecipeList';
import RecipeForm from '../components/RecipeForm';

function Recipes() {
    return (
        <div>
            <h1>Recipes</h1>
            <RecipeForm />
            <RecipeList />
        </div>
    );
}

export default Recipes;
