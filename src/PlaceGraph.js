import React from 'react';
import InteractiveLegend from './victory';
import { FlexBox } from './App.styled';
import { Checkbox, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import { distinctColours, getRandomColour } from './colours';
import { convertDateToDayOfYear } from './dateTransformer';

export const PlaceGraph = ({ data, isSouthernHemisphere }) => {

    const lastTwoYears = {
        [data[data.length - 1].year]: true,
        [data[data.length - 2].year]: true,
    };

    const [selected, setSelected] = React.useState(lastTwoYears);

    const show = (year) => {
        return selected[year];
    };

    const handleCheckboxChange = ({ target: { name, checked } }) => {
        const selectedCopy = { ...selected };
        selectedCopy[name] = checked;
        setSelected(selectedCopy);
    };

    const graphData = data
        .map(({ year, yearData }, index) => {
            return {
                name: year,
                color: distinctColours[index] || getRandomColour(),
                datapoints: yearData.map(({ date, snow }) => ({ x: convertDateToDayOfYear(date, isSouthernHemisphere), y: snow }))
            }
        });

    const filteredData = () => {
        return graphData.filter(({ name }) => show(name));
    };


    return <FlexBox>
        <div style={{ flexGrow: 1 }}>
            <InteractiveLegend series={filteredData()} monthDisplay={isSouthernHemisphere ? 'south' : 'north'} />
        </div>
        {graphData && <div style={{ minWidth: '300px' }}>
            <FormLabel >Years</FormLabel>
            <FormGroup label='Years' style={{ display: 'flex', flexFlow: 'column wrap', maxHeight: '680px', overflow: 'auto', alignContent: 'flex-start', width: '300px' }}>
                {[...graphData].reverse().map(({ name }) => <YearCheckbox year={name} selectedYears={selected} handleCheckboxChange={handleCheckboxChange} key={name}/>)}
            </FormGroup>
        </div>}
    </FlexBox>;
}

const YearCheckbox = ({ selectedYears, handleCheckboxChange, year }) => {
    return <FormControlLabel
        control={<Checkbox
            checked={selectedYears[year]}
            onChange={handleCheckboxChange}
            name={year}
            style={{ color: 'black' }}
        />}
        label={year}
    />
}
