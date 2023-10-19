import Link from 'next/link';
import styled from 'styled-components';

export const LinkStyled: any = styled(Link)<{ $using?: boolean; $add?: boolean; $title?: boolean }>`

color: gray;
text-decoration: ${(props) => (props.$using ? 'underline' : 'none')};
font-weight: ${(props) => (props.$using ? 'bold' : 300)};
list-style-type: none;

`;
