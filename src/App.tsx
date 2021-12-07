import React, {useState} from 'react';
import classesApp from './App.module.css'
import recipes from './data/recipes.json'
import {Recipe, RecipeType} from "./components/recipe/Recipe";
import {RecipeModal} from "./components/recipeModal/RecipeModal";
import {SelectProtein} from "./select/SelectProtein";
import {Cart} from "./components/cart/Cart";
import {CartModal} from "./components/cartModal/CartModal";

function App() {

    const [proteinType, setProteinType] = useState<ProteinType>('all')
    const [showRecipeModal, setShowRecipeModal] = useState<boolean>(false)
    const [modalProps, setModalProps] = useState<RecipeType>({title: '', description: '', image: '', protein: ['']})
    const [cartCount, setCartCount] = useState<number>(0)
    const [showCartModal, setShowCartModal] = useState<boolean>(false)
    const [cartItems, setCartItems] = useState<string[]>([])


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
    const addToCart = (itemTitle: string) => {
        setCartCount(count => count + 1)
        setCartItems(prevState => [...prevState,itemTitle])
    }
    const emptyCart = () => {
        setCartCount(0)
        setCartItems([])
    }

    return (
        <div className={classesApp.app}>

            {showRecipeModal && <RecipeModal title={modalProps.title}
                                       description={modalProps.description}
                                       image={modalProps.image}
                                       onClose={() => setShowRecipeModal(false)}
                                       addToCart={addToCart}/>}
            {showCartModal && <CartModal cartCount={cartCount}
                                         emptyCart={emptyCart}
                                         cartItems={cartItems}
                                         onClose={() => setShowCartModal(false)}/>}

            <div className={classesApp.header}><h1>Explore our healthy recipes</h1></div>
            <SelectProtein proteinType={proteinType} handleChane={setProtein}/>
            <div className={classesApp.recipesList}>
                {recipesToDisplay && recipesToDisplay.map((r, i) => <Recipe key={i}
                                                                            title={r.title}
                                                                            description={r.description}
                                                                            image={r.image}
                                                                            protein={r.protein}
                                                                            onRecipeClick={() => {setModalProps(r);setShowRecipeModal(true)}}
                                                                            addToCart={addToCart}/>)}
            </div>
            <div onClick={() => setShowCartModal(true)} style={{cursor:'pointer'}}><Cart cartCount={cartCount} /></div>
        </div>
    );
}

export default App

//types
export type ProteinType = 'all' | 'meatAndFish' | 'pesc' | 'vegan'
