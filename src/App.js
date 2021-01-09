import React, { useEffect } from 'react';
import InteractiveLegend from './victory';
import moment from 'moment';

const defaults = [
    { x: 0, y: 0 },
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
    useEffect(() => {
        getResponse().then((response) => {

            const data = response
                .map(({ year, data }) => {
                    return {
                        name: year,
                        color: getRandomColour(),
                        datapoints: defaults.concat(data.map(({ date, snow }) => ({ x: dateTransformer(date), y: snow })))
                    }
                });
            console.error(data.map((thing) => thing.datapoints))
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

async function getResponse() {
    const response = await fetch('http://localhost:5000/api/spencersCreek/a')
    const jsonResponse = await response.json();
    return jsonResponse;
}

export default App;
