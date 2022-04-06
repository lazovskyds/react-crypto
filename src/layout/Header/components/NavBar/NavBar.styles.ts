import styled from 'styled-components';
import { colors } from '@styles/index';
import { NavLink } from 'react-router-dom';

export const NavBarWrapper = styled.nav`
   margin: 0;
`;

export const NavBarList = styled.ul`
   display: flex;
   padding: 0;
`;

export const NavBarItem = styled.li`
   displey: flex;
   align-items: center;
   list-style-type: none;
   margin: 0 20px 0 0;

   &:last-child {
      margin: 0;
   }
`;

export const NavBarLink = styled(NavLink)`
   color: ${colors.white};
   padding: 4px 16px;
   border-radius: 4px;
   border: 1px solid ${colors.white};
   font-size: 14px;
   font-weight: 600;
   text-decoration: none;
   transition: 0.4s;

   &:hover {
      color: ${colors.blue};
      background-color: ${colors.white};
      transition: 0.4s;

      & > svg {
         fill: ${colors.blue};
         transition: 0.4s;
      }
   }

   & > svg {
      height: 12px;
      width: auto;
      fill: ${colors.white};
      color: ${colors.white};
      margin-right: 6px;
      transition: 0.4s;
   }
`;
