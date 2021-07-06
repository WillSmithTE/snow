import React, { useState } from 'react';
import { AppWrapper, Body, Header } from './App.styled';
import { FormatSelector } from './FormatSelector';
import { YearsComparer } from './YearsComparer';
import { PlacesComparer } from './PlacesComparer';
import './App.css';

function App() {

    const [format, setFormat] = useState('resorts');

    const handleChangeFormat = (event) => {
        setFormat(event.target.value);
    };

    return <>
        <AppWrapper>
            <Header>
                <h1 style={{ margin: '40px auto 0' }}>The Snow Tracker</h1>
            </Header>
            <Body>
                <FormatSelector format={format} handleChange={handleChangeFormat} />
                {format === 'years' ? <YearsComparer /> : <PlacesComparer />}
            </Body>
        </AppWrapper>
    </>;
}

export default App;
