import React, { useState } from 'react';
import {
   HeaderWrapper,
   HeaderInner,
   HeaderLogoLink,
   HeaderLogoTitle,
} from './Header.styles';
import NavBar from './components/NavBar/NavBar.component';
import MobileToggler from './components/MobileToggler/MobileToggler.component';
import { MobileMenu } from '@layout/index';
import { useWindowSize } from '@hooks/index';
import { dimensions } from '@styles/index';

const Header = () => {
   const [isMobileOpen, setMobileOpen] =
      useState<boolean>(false);

   const toggleModalOpen = () =>
      setMobileOpen((prev) => !prev);

   const { width } = useWindowSize();

   return (
      <HeaderWrapper>
         <HeaderInner>
            <HeaderLogoLink>
               <HeaderLogoTitle>Tracker</HeaderLogoTitle>
            </HeaderLogoLink>

            {width && width > dimensions.lg && <NavBar />}

            {width && width <= dimensions.lg && (
               <MobileToggler
                  isOpen={isMobileOpen}
                  toggleOpen={toggleModalOpen}
               />
            )}
         </HeaderInner>

         {width &&
            width <= dimensions.lg &&
            isMobileOpen && (
               <MobileMenu toggleOpen={toggleModalOpen} />
            )}
      </HeaderWrapper>
   );
};

export default Header;
