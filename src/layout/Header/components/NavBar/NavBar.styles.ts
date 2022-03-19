import styled from 'styled-components';
import colors from '@styles/colors';

const { blue, white } = colors;

// const onActiveDot = keyframes`
//    0% {
//        transform: scale(0);
//    }
//    100% {
//        transform: scale(1);
//    }
// `;

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

export const NavBarLink = styled.div`
   color: ${white};
   padding: 5px 15px;
   border-radius: 5px;
   border: 1px solid ${white};
   font-size: 14px;
   font-weight: 600;
   text-decoration: none;
   transition: 0.4s;

   &:hover {
      color: ${blue};
      background-color: ${white};
      transition: 0.4s;

      & > svg {
         fill: ${blue};
      }
   }

   & > svg {
      height: 12px;
      width: auto;
      fill: ${white};
      color: ${white};
      margin-right: 6px;
   }
`;

// &.${props => props.activeClassName} {
//    position: relative;
//    color: ${blue};
//    background-color: ${white};
//    transition: .4s;

//    & > svg {
//       fill: ${blue}
//    }

//    &:after {
//       position: absolute;
//       content: '';
//       left: calc(50% - 3px);
//       bottom: -15px;
//       height: 6px;
//       width: 6px;
//       background-color: ${white};
//       border-radius: 50%;
//       animation: ${onActiveDot} .4s ease-in-out;
//    }
// }
