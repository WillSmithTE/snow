import styled from 'styled-components';

export const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TransparentBox = styled.div`
    opacity: 0.4;
    margin: 30px;
    background-color: white;
`;

export const Header = styled.div`
    background: url(${process.env.PUBLIC_URL + '/mountains.png'}) center 0px; 
    background-size: auto 200px;
    background-repeat: repeat no-repeat;
    min-height: 200px;
`;

export const Logo = styled.img`
    height: 100px;
    margin: auto;
    display: block;
    padding-top: 20px;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10%;
`;
