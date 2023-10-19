import styled from 'styled-components';

export const StyledNavList = styled.ul`

list-style: none;
display: flex;
gap: 8px;
margin-bottom: 16px;
padding-bottom: 10px;
padding-left: 0px;
`;

export const StyledNavListItem = styled.li<{ $title?: boolean; $add?: boolean }>`
font-weight: ${(props) => (props.$title ? 'bold' : 500)};
    font-family: cursive;

`;

export const subtitlePb = styled.p`

    font-weight: 600px;
    padding-bottom: 10px;
`;
