import React from "react";
import {Box, Select, SelectChangeEvent} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import {ProteinType} from "../App";

export const SelectProtein = (props: SelectProteinPropsType) => {

    const handleChange = (event: SelectChangeEvent) => {
        props.handleChane(event.target.value as ProteinType)
    }

    return (
        <div>
            <Box sx={{maxWidth: 300, margin: '0 auto'}}>
                <FormControl fullWidth>
                    <Select
                        value={props.proteinType}
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
    )
}

//types
type SelectProteinPropsType = {
    proteinType: ProteinType
    handleChane: (proteinType: ProteinType) => void
}