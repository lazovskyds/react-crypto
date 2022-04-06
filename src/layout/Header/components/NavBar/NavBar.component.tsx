import React from 'react';
import {
   NavBarWrapper,
   NavBarList,
   NavBarItem,
   NavBarLink,
} from './NavBar.styles';

interface NavBarProps {
   navItems: {
      icon: React.FunctionComponent;
      title: string;
      to: string;
   }[];
}

const NavBar = ({ navItems }: NavBarProps) => {
   return (
      <NavBarWrapper>
         <NavBarList>
            {navItems.map((item) => {
               const Icon = item.icon;
               return (
                  <NavBarItem key={item.title}>
                     <NavBarLink to={item.to}>
                        <Icon />
                        {item.title}
                     </NavBarLink>
                  </NavBarItem>
               );
            })}
         </NavBarList>
      </NavBarWrapper>
   );
};

export default NavBar;
