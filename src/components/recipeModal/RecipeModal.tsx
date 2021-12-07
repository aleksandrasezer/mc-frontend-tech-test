import React from 'react';
import classesModal from '../../App.module.css'

export const RecipeModal = ({title, description, image, onClose, addToCart}: RecipeModalPropsType) => {
    return (
        <div className={classesModal.modal} onClick={onClose}>
            <div className={classesModal.modalCont} onClick={e => e.stopPropagation()}>
                <div>
                    <img src={image} alt={title}/>
                    <span className={classesModal.close} onClick={onClose}></span>
                </div>
                <div className={classesModal.modalDescriptionCont}>
                    <div className={classesModal.modalTitle}><h2>{title}</h2></div>
                    <div className={classesModal.modalDescription}>{description}</div>
                    <button onClick={() => addToCart(title)}>ADD RECIPE</button>
                </div>
            </div>
        </div>
    )
}

//types
type RecipeModalPropsType = {
    title: string
    description: string
    image: string
    onClose: () => void
    addToCart: (itemTitle: string) => void
}
