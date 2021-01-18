import React, { useEffect } from 'react';
import InteractiveLegend from './victory';
import moment from 'moment';
import { api } from './api';
import { FlexBox } from './App.styled';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import {Loading } from './Loading';
import {Error } from './Error';

const defaults = [
    { x: 1, y: 0 },
    { x: 365, y: 0 },
];

export const SpencersCreek = () => {

    const [data, setData] = React.useState(undefined);
    const [error, setError] = React.useState(false);
    const [selectedYears, setSelectedYears] = React.useState({
        '2015': true,
        '2016': true,
        '2017': true,
        '2018': true,
        '2019': true,
        '2020': true
    });

    const showYear = (year) => {
        console.error({ year, show: selectedYears[year] })
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
                .map(({ year, data }) => {
                    return {
                        name: year,
                        color: getRandomColour(),
                        datapoints: defaults.concat(data.map(({ date, snow }) => ({ x: dateTransformer(date), y: snow })))
                    }
                });
            setData(data)
        },
        () => setError(true)
        );
    }, []);
    return <FlexBox>
        <div style={{flexGrow: 1}}>
            <h1>Spencers Creek Snowfall</h1>
            {error && <Error/>}
            {data ? <InteractiveLegend series={filteredData()} /> : <Loading/>}
        </div>
        {data && <div style={{ minWidth: '300px' }}>
            <FormGroup style={{display: 'flex', flexFlow: 'column wrap', maxHeight: '680px', overflow: 'auto', alignContent: 'flex-start', width: '300px'}}>
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
        />}
        label={year}
    />
}

function getRandomColour() {
    return "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
}

export function dateTransformer(date) {
    const momentDate = moment(date, 'YYYY-MM-DD');
    const year = momentDate.year();
    const firstDayOfYear = moment(year + '-01-01', 'YYYY-MM-DD');
    return momentDate.diff(firstDayOfYear, 'days');
}
