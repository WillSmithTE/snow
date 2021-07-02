import React from 'react';
import InteractiveLegend from './victory';
import { FlexBox } from './App.styled';
import { Checkbox, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import { Loading } from './Loading';
import { distinctColours } from './colours';
import { dateTransformer } from './dateTransformer';

const defaultYears = {
    '2020': true,
    '2021': true,
};

export const SpencersCreek = ({ data, placeName }) => {

    const [selectedYears, setSelectedYears] = React.useState(defaultYears);

    const showYear = (year) => {
        return selectedYears[year];
    };

    const handleCheckboxChange = ({ target: { name, checked } }) => {
        const selectedYearsCopy = { ...selectedYears };
        selectedYearsCopy[name] = checked;
        setSelectedYears(selectedYearsCopy);
    };

    const graphData = data
        .map(({ year, yearData }, index) => {
            return {
                name: year,
                color: distinctColours[index],
                datapoints: yearData.map(({ date, snow }) => ({ x: dateTransformer(date), y: snow }))
            }
        });

    const filteredData = () => {
        return graphData.filter(({ name }) => showYear(name));
    };


    return <FlexBox>
        <div style={{ flexGrow: 1 }}>
            <h1>{placeName} Snow Depth</h1>
            <InteractiveLegend series={filteredData()} />
        </div>
        {graphData && <div style={{ minWidth: '300px' }}>
            <FormLabel >Years</FormLabel>
            <FormGroup label='Years' style={{ display: 'flex', flexFlow: 'column wrap', maxHeight: '680px', overflow: 'auto', alignContent: 'flex-start', width: '300px' }}>
                {[...graphData].reverse().map(({ name }) => <YearCheckbox year={name} selectedYears={selectedYears} handleCheckboxChange={handleCheckboxChange} key={name}/>)}
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
