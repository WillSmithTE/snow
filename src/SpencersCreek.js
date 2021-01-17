import React, { useEffect } from 'react';
import InteractiveLegend from './victory';
import moment from 'moment';
import { api } from './api';

const defaults = [
    { x: 1, y: 0 },
    { x: 365, y: 0 },
];

export const SpencersCreek = () => {

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
