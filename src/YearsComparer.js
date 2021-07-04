import React, { useEffect } from 'react';
import { api } from './api';
import { Error } from './Error';
import { Loading } from './Loading';
import { PlaceGraph } from './PlaceGraph';
import { FormControl, Select, MenuItem } from '@material-ui/core';

export const YearsComparer = () => {

    const [data, setData] = React.useState(undefined);
    const [error, setError] = React.useState(false);
    const [placeIndex, setPlaceIndex] = React.useState(0);

    useEffect(() => {
        api.getSnowDepth().then(
            setData,
            () => setError(true)
        );
    }, []);

    const { data: placeData, place, isSouthernHemisphere } = (data && data[placeIndex]) || {};

    return <>
        {error && <Error />}
        {data ?
            <>
                <h2>Snow Depth</h2>
                <PlaceSelector placeIndex={placeIndex} setPlaceIndex={setPlaceIndex} data={data} />
                <PlaceGraph data={placeData} placeName={place} isSouthernHemisphere={isSouthernHemisphere} key={place} />
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