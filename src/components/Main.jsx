import React from 'react';
import styled from 'styled-components';
import { Home } from './Pages/Home';
import { TopBar } from './TopBar';

const Wrapper = styled.div``;

export const Main = () => {
    return (
        <Wrapper>
            {/* <TopBar /> */}
            <Home />
        </Wrapper>
    )
}