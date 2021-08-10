import React from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';

export const FormatSelector = ({ handleChange, format }) => {
    return <FormControl component="fieldset" style={{ alignItems: 'center', paddingTop: '20px' }} >
        <RadioGroup value={format} onChange={handleChange}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <FormControlLabel value="years" control={<Radio color='primary' />} label="Compare years" style={{ paddingRight: '20px' }} />
                <FormControlLabel value="resorts" control={<Radio color='primary' />} label="Compare resorts" />
            </div>
        </RadioGroup>
    </FormControl>
};