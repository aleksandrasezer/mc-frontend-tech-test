import React from "react";
import s from './Recipe.module.css'

export const Recipe = ({title, description, image, onRecipeClick, addToCart}: RecipePropsType) => {

    return (
        <div className={s.recipe} onClick={onRecipeClick}>
            <div><img src={image} alt='ready dish'/></div>
            <div className={s.title}>{title}</div>
            <div className={s.description}>{description}</div>
            <button onClick={e => {e.stopPropagation(); addToCart()}}>ADD RECIPE</button>
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
    addToCart: () => void
}