import React from 'react';
import {
   NavBarWrapper,
   NavBarList,
   NavBarItem,
   NavBarLink,
} from './NavBar.styles';
import {
   NavbarHomeIcon,
   NavbarPortfolioIcon,
   NavbarSeeAllIcon,
} from '@assets/icons/index';
import { runComponent } from '@utils/index';

const NavBar = () => {
   const navItems = [
      {
         to: '/',
         icon: NavbarHomeIcon,
         title: 'Home',
      },
      {
         to: '/portfolio',
         icon: NavbarPortfolioIcon,
         title: 'Portfolio',
      },
      {
         to: '/all',
         icon: NavbarSeeAllIcon,
         title: 'All coins',
      },
   ];

   return (
      <NavBarWrapper>
         <NavBarList>
            {navItems.map((item) => (
               <NavBarItem key={item.title}>
                  <NavBarLink to={item.to}>
                     {runComponent(item.icon)}
                     {item.title}
                  </NavBarLink>
               </NavBarItem>
            ))}
         </NavBarList>
      </NavBarWrapper>
   );
};

export default NavBar;
