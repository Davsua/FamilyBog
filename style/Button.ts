'use client';
import styled from 'styled-components';

export const Button = styled.button<{ $secondary?: boolean }>`
    background: ${(props) => (props.$secondary ? 'black' : '#198754')};
    color: ${(props) => (props.$secondary ? '#198754' : 'white')};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
    cursor: pointer;
`;

export const ShareButton = styled(Button)`
    background: gray
`;
