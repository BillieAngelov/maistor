import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const Header = styled.div`
    font-size: 4.8rem;
`;

const HeaderSection = styled.div`
    background-color: #26C6DA;
`;

export default function Home() {
    return (
        <Wrapper>
            <HeaderSection>
                <Header>Maistor</Header>
                {/* SearchBar */}
            </HeaderSection>
        </Wrapper>    
    )
}