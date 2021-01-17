import React, { useEffect } from 'react';
import InteractiveLegend from './victory';
import moment from 'moment';
import { api } from './api';

const defaults = [
    { x: 1, y: 0 },
    { x: 365, y: 0 },
];
const dummyResponse = [
    {
        year: 1976,
        data: [
            { date: '1976-11-28', snow: 56 },
            { date: '1976-12-15', snow: 100 },
            { date: '1976-12-30', snow: 10 },
        ]
    },
    {
        year: 1977,
        data: [
            { date: '1977-11-28', snow: 80 },
            { date: '1977-12-15', snow: 200 },
            { date: '1977-12-30', snow: 15 },
        ]
    },
    {
        year: 1978,
        data: [
            { date: '1978-11-28', snow: 15 },
            { date: '1978-12-01', snow: 250 },
            { date: '1978-12-30', snow: 8 },
        ]
    },
];

function App() {

    const [data, setData] = React.useState(undefined);

    const takeYear = (year) => {
        return ['2015', '2016', '2017', '2018', '2019', '2020'].includes(year)
    };

    useEffect(() => {
        api.getSpencersCreek().then((response) => {

            const data = response
                .filter(({ year }) => takeYear(year))
                .map(({ year, data }) => {
                    return {
                        name: year,
                        color: getRandomColour(),
                        datapoints: defaults.concat(data.map(({ date, snow }) => ({ x: dateTransformer(date), y: snow })))
                    }
                });
            setData(data)
        });
    }, []);
    return data ? <InteractiveLegend series={data} /> : <h1>Loading...</h1>;
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

export default App;
