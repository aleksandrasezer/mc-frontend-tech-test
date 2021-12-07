import React from "react";
import classesRecipe from './Recipe.module.css'

export const Recipe = ({title, description, image, onRecipeClick, addToCart}: RecipePropsType) => {

    return (
        <div className={classesRecipe.recipe} onClick={onRecipeClick}>
            <div><img src={image} alt='ready dish'/></div>
            <div className={classesRecipe.title}><h2>{title}</h2></div>
            <div className={classesRecipe.description}>{description}</div>
            <button onClick={e => {e.stopPropagation(); addToCart(title)}}>ADD RECIPE</button>
        </div>
    )
}

//types
export type RecipeType = {
    title: string
    description: string
    image: string
    protein: string[]
}
export type RecipePropsType = RecipeType & {
    onRecipeClick: () => void
    addToCart: (itemTitle: string) => void
}