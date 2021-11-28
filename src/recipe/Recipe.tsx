import React from "react";
import s from './Recipe.module.css'

export const Recipe = ({title, description, image}: RecipePropsType) => {
    return (
        <div className={s.recipe} >
            <div><img src={image} alt='ready dish'/></div>
            <div className={s.title}>{title}</div>
            <div className={s.description}>{description}</div>
        </div>
    )
}

//types
type RecipePropsType = {
    title: string
    description: string
    image: string
    protein: string[]
}