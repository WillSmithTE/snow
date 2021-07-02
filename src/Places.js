import React, { useEffect } from 'react';
import { api } from './api';
import { Error } from './Error';
import { Loading } from './Loading';
import { SpencersCreek } from './SpencersCreek';

export const Places = () => {

    const [data, setData] = React.useState(undefined);
    const [error, setError] = React.useState(false);

    useEffect(() => {
        api.getSnowDepth().then(
            setData,
            () => setError(true)
        );
    }, []);

    return <>
        {error && <Error />}
        {data ?
            data.map(({ data, place, isSouthernHemisphere }) =>
                <SpencersCreek data={data} placeName={place} isSouthernHemisphere={isSouthernHemisphere} key={place} />
            ) :
            <Loading />
        }
    </>;

};