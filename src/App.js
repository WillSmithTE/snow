import React, { useState } from 'react';
import { AppWrapper, Body, Header, Logo } from './App.styled';
import { FormatSelector } from './FormatSelector';
import { YearsComparer } from './YearsComparer';
import { PlacesComparer } from './PlacesComparer';
import './App.css';

function App() {

    const [format, setFormat] = useState('years');

    const handleChangeFormat = (event) => {
        setFormat(event.target.value);
    };

    return <>
        <AppWrapper>
            <Header>
                <Logo src={`${process.env.PUBLIC_URL}/logo.png`} alt='logo'style={{ }}/>
            </Header>
            <Body>
                <FormatSelector format={format} handleChange={handleChangeFormat} />
                {format === 'years' ? <YearsComparer /> : <PlacesComparer />}
            </Body>
        </AppWrapper>
    </>;
}

export default App;
