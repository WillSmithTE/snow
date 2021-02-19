import React, { useEffect } from 'react';
import InteractiveLegend from './victory';
import moment from 'moment';
import { api } from './api';
import { FlexBox } from './App.styled';
import { Checkbox, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import {Loading } from './Loading';
import {Error } from './Error';
import {distinctColours} from './colours';

const defaultYears = {
    '1981': true,
    '1982': true,
    '2020': true
};

export const SpencersCreek = () => {

    const [data, setData] = React.useState(undefined);
    const [error, setError] = React.useState(false);
    const [selectedYears, setSelectedYears] = React.useState(defaultYears);

    const showYear = (year) => {
        return selectedYears[year];
    };

    const handleCheckboxChange = ({ target: { name, checked } }) => {
        const selectedYearsCopy = { ...selectedYears };
        selectedYearsCopy[name] = checked;
        setSelectedYears(selectedYearsCopy);
    };

    const filteredData = () => {
        return data.filter(({ name }) => showYear(name));
    };

    useEffect(() => {
        api.getSpencersCreek().then(
            (response) => {

            const data = response
                .map(({ year, data }, index) => {
                    return {
                        name: year,
                        color: distinctColours[index],
                        datapoints: data.map(({ date, snow }) => ({ x: dateTransformer(date), y: snow }))
                    }
                });
            setData(data)
        },
        () => setError(true)
        );
    }, []);
    return <FlexBox>
        <div style={{flexGrow: 1}}>
            <h1>Spencers Creek Snow Depth</h1>
            {error && <Error/>}
            {data ? <InteractiveLegend series={filteredData()} /> : <Loading/>}
        </div>
        {data && <div style={{ minWidth: '300px' }}>
            <FormLabel >Years</FormLabel>
            <FormGroup label='Years' style={{display: 'flex', flexFlow: 'column wrap', maxHeight: '680px', overflow: 'auto', alignContent: 'flex-start', width: '300px'}}>
                {[...data].reverse().map(({ name }) => <YearCheckbox year={name} selectedYears={selectedYears} handleCheckboxChange={handleCheckboxChange} />)}
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
            style={{color:'black'}}
        />}
        label={year}
    />
}

export function dateTransformer(date) {
    const momentDate = moment(date, 'YYYY-MM-DD');
    const year = momentDate.year();
    const firstDayOfYear = moment(year + '-01-01', 'YYYY-MM-DD');
    return momentDate.diff(firstDayOfYear, 'days');
}
