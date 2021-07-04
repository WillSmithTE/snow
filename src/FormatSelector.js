import React from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';

export const FormatSelector = ({ handleChange, format }) => {
    return <FormControl component="fieldset">
        <RadioGroup value={format} onChange={handleChange}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <FormControlLabel value="years" control={<Radio />} label="Compare years" />
                <FormControlLabel value="resorts" control={<Radio />} label="Compare resorts" />
            </div>
        </RadioGroup>
    </FormControl>
};