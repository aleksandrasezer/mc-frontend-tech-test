import React, {useState} from 'react';
import s from './App.module.css'
import recipes from './data/recipes.json'
import {Recipe, RecipeType} from "./recipe/Recipe";
import {Modal} from "./modal/Modal";
import {SelectProtein} from "./select/SelectProtein";
import {Cart} from "./cart/Cart";

function App() {

    const [proteinType, setProteinType] = useState<ProteinType>('all')
    const [showModal, setShowModal] = useState<boolean>(false)
    const [modalProps, setModalProps] = useState<RecipeType>({title: '', description: '', image: '', protein: ['']})
    const [cartCount, setCartCount] = useState<number>(0)

    let recipesToDisplay
    switch (proteinType) {
        case ('vegan'):
            recipesToDisplay = recipes.filter(r => r.protein.some(p => p === 'vegan'));
            break
        case ('pesc'):
            recipesToDisplay = recipes.filter(r => r.protein.some(p => p === 'fish') && r.protein.length === 1);
            break
        case ('meatAndFish'):
            recipesToDisplay = recipes.filter(r => r.protein.some(p => p === 'meat' || p === 'fish'));
            break
        case ('all'):
            recipesToDisplay = recipes
    }

    const setProtein = (proteinType: ProteinType) => {
        setProteinType(proteinType)
    }
    const addToCart = () => {
        setCartCount(count => count + 1)
    }

    return (
        <div className={s.app}>

            {showModal && <Modal title={modalProps.title}
                                 description={modalProps.description}
                                 image={modalProps.image}
                                 onClose={() => setShowModal(false)}
                                 addToCart={addToCart}/>}

            <div className={s.header}><h1>Explore our healthy recipes</h1></div>
            <SelectProtein proteinType={proteinType} handleChane={setProtein}/>
            <div className={s.recipesList}>
                {recipesToDisplay && recipesToDisplay.map((r, i) => <Recipe key={i} title={r.title}
                                                                            description={r.description}
                                                                            image={r.image}
                                                                            protein={r.protein}
                                                                            onRecipeClick={() => {setModalProps(r);setShowModal(true)}}
                                                                            addToCart={addToCart}/>)}
            </div>
            <Cart cartCount={cartCount}/>
        </div>
    );
}

export default App

//types
export type ProteinType = 'all' | 'meatAndFish' | 'pesc' | 'vegan'
