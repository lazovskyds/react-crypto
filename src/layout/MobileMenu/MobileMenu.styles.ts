import styled from 'styled-components';
import { colors } from '@styles/index';

export const MobileMenuOverlay = styled.div`
   position: fixed;
   top: 60px;
   left: 0;
   right: 0;
   bottom: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.2);
`;

export const MobileMenuWrapper = styled.nav`
   position: fixed;
   width: 250px;
   height: calc(100vh - 60px);
   top: 60px;
   right: 0;
   background-color: ${colors.background};
`;

export const MobileMenuList = styled.ul`
   margin: 0;
`;

export const MobileMenuItem = styled.li`
   display: flex;
   align-items: center;
   font-weight: 600;
   font-size: 16px;
   padding: 20px 20px 20px 30px;
   border-bottom: 1px solid ${colors.lightGray};

   & > svg {
      height: 18px;
      width: auto;
      margin: 0 10px 0 0;
      transition: 0.4s;
      fill: ${colors.blue};
   }
`;
