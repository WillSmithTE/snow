import React, { useEffect } from 'react';
import { api } from './api';
import { Error } from './Error';
import { Loading } from './Loading';
import { YearGraph } from './YearGraph';
import { FormControl, Select, MenuItem } from '@material-ui/core';

export const PlacesComparer = () => {

    const [data, setData] = React.useState(undefined);
    const [error, setError] = React.useState(false);
    const [selectedYear, setYear] = React.useState('2018');

    useEffect(() => {
        api.getSnowDepth().then(
            setData,
            () => setError(true)
        );
    }, []);

    const oneYearData = data && data.map(({ data, place, isSouthernHemisphere }) => {
        return {
            data: data.find(({ year }) => year === selectedYear),
            place,
            isSouthernHemisphere,
        }
    });

    return <>
        {error && <Error />}
        {oneYearData ?
            <>
                <h2>Snow Depth</h2>
                <YearSelector year={selectedYear} setYear={setYear} data={data} />
                <YearGraph data={oneYearData} />
            </>
            :
            <Loading />
        }
    </>;

};

const YearSelector = ({ year, setYear, data }) => {
    const possibleYears = getYearsWhereAtLeastTwoResortsHaveData(data);
    return <FormControl style={{ width: '100px', paddingTop: '15px 0px 20px' }}>
        <Select value={year} onChange={(e) => setYear(e.target.value)}>
            {possibleYears.map((year) => <MenuItem value={year} key={year}>{year}</MenuItem>)}
        </Select>
    </FormControl>
};

const getYearsWhereAtLeastTwoResortsHaveData = (data) => {
    const yearsWithAnyData = {};
    const yearsWithAtLeastTwoResorts = {};
    data.forEach(({ data: placeData }) =>
        placeData.forEach(({ year }) => {
            if (yearsWithAtLeastTwoResorts[year]) {
                return;
            } else if (yearsWithAnyData[year]) {
                yearsWithAtLeastTwoResorts[year] = true;
            } else {
                yearsWithAnyData[year] = true;
            }
        })
    );
    return Object.keys(yearsWithAtLeastTwoResorts);
};