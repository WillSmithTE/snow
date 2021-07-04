import React from 'react';
import InteractiveLegend from './victory';
import { FlexBox } from './App.styled';
import { Checkbox, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import { distinctColours } from './colours';
import { convertDateToDayOfYear } from './dateTransformer';

export const PlaceGraph = ({ data, placeName, isSouthernHemisphere }) => {

    const defaultYears = {
        [data[data.length - 1].year]: true,
        [data[data.length - 2].year]: true,
    };

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
                datapoints: yearData.map(({ date, snow }) => ({ x: convertDateToDayOfYear(date, isSouthernHemisphere), y: snow }))
            }
        });

    const filteredData = () => {
        return graphData.filter(({ name }) => showYear(name));
    };


    return <FlexBox>
        <div style={{ flexGrow: 1 }}>
            <h2>{placeName} Snow Depth</h2>
            <InteractiveLegend series={filteredData()} isSouthernHemisphere={isSouthernHemisphere} />
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
