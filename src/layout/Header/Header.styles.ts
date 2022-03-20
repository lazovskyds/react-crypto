import styled from 'styled-components';
import { colors } from '@styles/index';

export const HeaderWrapper = styled.header`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   background-color: ${colors.blue};
   padding: 0 15px;
   z-index: 99;
`;

export const HeaderInner = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 60px;
`;

export const HeaderLogoLink = styled.span`
   display: flex;
   align-items: center;
`;

export const HeaderLogoTitle = styled.div`
   font-size: 22px;
   font-weight: 600;
   text-transform: uppercase;
   letter-spacing: 0.5px;
   color: ${colors.white};
`;
