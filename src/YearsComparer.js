import React, { useEffect } from 'react';
import { api } from './api';
import { Error } from './Error';
import { Loading } from './Loading';
import { PlaceGraph } from './PlaceGraph';
import { FormControl, Select, MenuItem } from '@material-ui/core';

export const YearsComparer = () => {

    const [data, setData] = React.useState(undefined);
    const [error, setError] = React.useState(false);
    const [placeIndex, setPlaceIndex] = React.useState(undefined);

    useEffect(() => {
        api.getSnowDepth().then(
            setData,
            () => setError(true)
        );
    }, []);

    useEffect(() => {
        if (data) {
            const spencersCreekIndex = data.findIndex(({ place }) => place === 'Spencers Creek')
            const newIndex = spencersCreekIndex === - 1 ? 0 : spencersCreekIndex
            setPlaceIndex(newIndex)
        }
    }, [data]);

    const { data: placeData, isSouthernHemisphere } = (data && data[placeIndex]) || {};

    return <>
        {error && <Error />}
        {data && placeIndex !== undefined ?
            <>
                <h2>Snow Depth</h2>
                <PlaceSelector placeIndex={placeIndex} setPlaceIndex={setPlaceIndex} data={data} />
                <PlaceGraph data={placeData} isSouthernHemisphere={isSouthernHemisphere} />
            </>
            :
            <Loading />
        }
    </>;

};

const PlaceSelector = ({ placeIndex, setPlaceIndex, data }) => {
    return <FormControl style={{ width: '300px', paddingTop: '15px 0px 20px' }}>
        <Select value={placeIndex} onChange={(e) => setPlaceIndex(e.target.value)}>
            {data.map(({ place }, index) => <MenuItem value={index} key={index}>{place}</MenuItem>)}
        </Select>
    </FormControl>
};