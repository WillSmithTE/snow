import React from 'react';
import InteractiveLegend from './victory';
import { FlexBox } from './App.styled';
import { Checkbox, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import { distinctColours, getRandomColour } from './colours';
import { convertDateToDayOfYear } from './dateTransformer';

export const YearGraph = ({ data }) => {

    const allSelected = data.reduce((persisted, { place }) => ({
        [place]: true,
        ...persisted
    }), {});

    const [selected, setSelected] = React.useState(allSelected);

    const show = (year) => {
        return selected[year];
    };

    const handleCheckboxChange = ({ target: { name, checked } }) => {
        const selectedYearsCopy = { ...selected };
        selectedYearsCopy[name] = checked;
        setSelected(selectedYearsCopy);
    };

    const graphData = data
        .map(({ place, isSouthernHemisphere, data: { yearData } }, index) => {
            return {
                name: place,
                color: distinctColours[index] || getRandomColour(),
                datapoints: yearData.map(({ date, snow }) => ({ x: convertDateToDayOfYear(date, isSouthernHemisphere), y: snow }))
            }
        });

    const filteredData = () => {
        return graphData.filter(({ name }) => show(name));
    };


    return <FlexBox>
        <div style={{ flexGrow: 1 }}>
            <InteractiveLegend series={filteredData()} />
        </div>
        {graphData && <div style={{ minWidth: '300px' }}>
            <FormLabel >Places</FormLabel>
            <FormGroup label='Places' style={{ display: 'flex', flexFlow: 'column wrap', maxHeight: '680px', overflow: 'auto', alignContent: 'flex-start', width: '300px' }}>
                {[...graphData].reverse().map(({ name }) => <ItemCheckbox value={name} selected={selected} handleCheckboxChange={handleCheckboxChange} key={name} />)}
            </FormGroup>
        </div>}
    </FlexBox>;
}

const ItemCheckbox = ({ selected, handleCheckboxChange, value }) => {
    return <FormControlLabel
        control={<Checkbox
            checked={selected[value]}
            onChange={handleCheckboxChange}
            name={value}
            style={{ color: 'black' }}
        />}
        label={value}
    />
}
