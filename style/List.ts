import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledList = styled.ul`

list-style: none;
display: flex;
gap: 8px;
flex-wrap: wrap;
justify-content: space-evenly;
padding: 0;
`;

export const StyledListItem = styled.li<{ $title?: boolean }>`
    font-weight: ${(props) => (props.$title ? 'bold' : 300)};
    width: 250px;
    margin-bottom: 16px;
    margin-right: 12px;
    border-radius: 10px;
    box-shadow: 5px 7px 12px 1px rgba(0, 0, 0, .5);
`;

export const LinkSListStyled: any = styled(Link)`

color: black;
font-weight: bold;
text-decoration: none;
list-style-type: none;

`;

export const PListStyled: any = styled('p')`

color: black;
font-weight: 300;

`;

export const ImageListStyled: any = styled(Image)`

    width:'320';
    height:'180';
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

`;
