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
import { devices } from '@styles/index';

const Header = () => {
   const [isMobileOpen, setModalOpen] =
      useState<boolean>(false);

   const toggleModalOpen = () =>
      setModalOpen((prev) => !prev);

   const { width } = useWindowSize();

   return (
      <HeaderWrapper>
         <HeaderInner>
            <HeaderLogoLink>
               <HeaderLogoTitle>Tracker</HeaderLogoTitle>
            </HeaderLogoLink>

            {width && width > devices.lg && <NavBar />}

            {width && width <= devices.lg && (
               <MobileToggler
                  isOpen={isMobileOpen}
                  toggleOpen={toggleModalOpen}
               />
            )}
         </HeaderInner>

         {width && width <= devices.lg && isMobileOpen && (
            <MobileMenu toggleOpen={toggleModalOpen} />
         )}
      </HeaderWrapper>
   );
};

export default Header;
