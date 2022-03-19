import React from 'react';
import {
   MobileMenuOverlay,
   MobileMenuWrapper,
   MobileMenuList,
   MobileMenuItem,
} from './MobileMenu.styles';
import {
   MobileMenuHomeIcon,
   MobileMenuPortfolioIcon,
   MobileMenuSeeAllIcon,
} from '@assets/icons/index';
import { runComponent } from '@utils/index';

interface MobileMenuProps {
   toggleOpen: () => void;
}

const MobileMenu = ({ toggleOpen }: MobileMenuProps) => {
   const navItems = [
      {
         to: '/',
         icon: MobileMenuHomeIcon,
         title: 'Home',
      },
      {
         to: '/portfolio',
         icon: MobileMenuPortfolioIcon,
         title: 'Portfolio',
      },
      {
         to: '/all',
         icon: MobileMenuSeeAllIcon,
         title: 'All coins',
      },
   ];

   return (
      <MobileMenuOverlay onClick={toggleOpen}>
         <MobileMenuWrapper>
            <MobileMenuList>
               {navItems.map((item) => (
                  <MobileMenuItem key={item.title}>
                     {runComponent(item.icon)}
                     {item.title}
                  </MobileMenuItem>
               ))}
            </MobileMenuList>
         </MobileMenuWrapper>
      </MobileMenuOverlay>
   );
};

export default MobileMenu;
