import React from 'react';
import {
   MobileTogglerWrapper,
   MobileTogglerController,
} from './MobileToggler.styles';
import { HeaderTogglerIcon } from '@assets/icons/index';

interface MobileTogglerProps {
   isOpen: boolean;
   toggleOpen: () => void;
}

const MobileToggler = ({ isOpen, toggleOpen }: MobileTogglerProps) => {
   return (
      <MobileTogglerWrapper isOpen={isOpen} onClick={toggleOpen}>
         <MobileTogglerController isOpen={isOpen}>
            <HeaderTogglerIcon data-testid="toggler-icon" />
         </MobileTogglerController>
      </MobileTogglerWrapper>
   );
};

export default MobileToggler;
