import React, { useState } from 'react';
import { AppWrapper } from './App.styled';
import { FormatSelector } from './FormatSelector';
import { YearsComparer } from './YearsComparer';
import { PlacesComparer } from './PlacesComparer';

function App() {

    const [format, setFormat] = useState('resorts');

    const handleChangeFormat = (event) => {
        setFormat(event.target.value);
    };

    return <AppWrapper>
        <h1 style={{marginTop: 0}}>The Snow Tracker</h1>
        <FormatSelector format={format} handleChange={handleChangeFormat} />
        {format === 'years' ? <YearsComparer /> : <PlacesComparer />}
    </AppWrapper>;
}

export default App;
