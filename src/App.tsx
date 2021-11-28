import React, {useState} from 'react';
import s from './App.module.css'
import recipes from './data/recipes.json'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {Box} from "@mui/material";
import {Recipe, RecipeType} from "./recipe/Recipe";
import {Modal} from "./modal/Modal";

function App() {

    const [proteinType, setProteinType] = useState<ProteinType>('all')
    const [showModal, setShowModal] = useState<boolean>(false)
    const [modalProps, setModalProps] = useState<RecipeType>({title: '', description: '', image: '', protein: ['']})

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

    const handleChange = (event: SelectChangeEvent) => {
        setProteinType(event.target.value as ProteinType)
    }

    return (
        <div className={s.app}>

            {showModal && <Modal title={modalProps.title}
                                 description={modalProps.description}
                                 image={modalProps.image}
                                 onClose={() => setShowModal(false)}/>}

            <div className={s.header}><h1>Explore our healthy recipes</h1></div>
            <div>
                <Box sx={{maxWidth: 300, margin: '0 auto'}}>
                    <FormControl fullWidth>
                        <Select
                            value={proteinType}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{'aria-label': 'Without label'}}
                        >
                            <MenuItem value={'all'}>All healthy recipes</MenuItem>
                            <MenuItem value={'meatAndFish'}>Meat and fish only</MenuItem>
                            <MenuItem value={'pesc'}>Pescatarian only</MenuItem>
                            <MenuItem value={'vegan'}>Vegan only</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>

            <div className={s.recipesList}>
                {recipesToDisplay && recipesToDisplay.map((r, i) => <Recipe key={i} title={r.title}
                                                                            description={r.description}
                                                                            image={r.image}
                                                                            protein={r.protein}
                                                                            onRecipeClick={() => {setModalProps(r);setShowModal(true)}}/>)}
            </div>
        </div>
    );
}

export default App

//types
type ProteinType = 'all' | 'meatAndFish' | 'pesc' | 'vegan'
