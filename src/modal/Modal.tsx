import React from 'react';
import s from '../App.module.css'

export const Modal = ({title, description, image, onClose}: ModalPropsType) => {

    return (
        <div className={s.modal} onClick={onClose}>
            <div className={s.modalCont} onClick={e => e.stopPropagation()}>
                <div>
                    <img src={image} alt={title}/>
                    <div className={s.close} onClick={onClose}></div>
                </div>
                <div className={s.modalDescriptionCont}>
                    <div className={s.modalTitle}>{title}</div>
                    <div className={s.modalDescription}>{description}</div>
                </div>
            </div>
        </div>
    )
}

//types
type ModalPropsType = {
    title: string
    description: string
    image: string
    onClose: () => void
}
