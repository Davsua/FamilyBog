import Link from 'next/link';
import styled from 'styled-components';

export const LinkStyled: any = styled(Link)<{ $using?: boolean; $add?: boolean; $title?: boolean }>`

color: #ffa317;
text-decoration: ${(props) => (props.$using ? 'underline' : 'none')};
font-weight: ${(props) => (props.$using ? 'bold' : '16px')};
list-style-type: none;

&:hover {
    font-size: 17px; 
  }

`;

export const LinkMainStyled = styled(LinkStyled)`
color: #ffa317;
`;
