import styled from 'styled-components';
import colors from '@styles/colors';

const { white, blue } = colors;

export interface GeneralStyledProps {
   isOpen: boolean;
}

export const MobileTogglerWrapper = styled.button<GeneralStyledProps>`
   display: flex;
   padding: 6px;
   background-color: ${white};
   border: 0;
   border-radius: 5px;
   cursor: pointer;
   transition: 0.4s;
   border: 1px solid transparent;

   ${(props) =>
      props.isOpen &&
      `
      background-color: transparent;
      border: 1px solid ${white};
   `}
`;

export const MobileTogglerController = styled.div<GeneralStyledProps>`
   display: flex;

   svg {
      height: 14px;
      width: 14px;
      fill: ${blue};
   }

   ${(props) =>
      props.isOpen &&
      `
      svg {
         fill: ${white};
      }
   `}
`;
