import styled from 'styled-components';
import { colors } from '@styles/colors';

export const TileWrapper = styled.div`
   display: flex;
   flex-shrink: 0;
   flex-direction: column;
   padding: 14px;
   border: 2px solid transparent;
   width: 240px;
   background-color: ${colors.background};
   transition: 0.5s;
   border-radius: 4px;
   cursor: pointer;

   &:hover {
      border: 2px solid ${colors.blue};
      transition: 0.5s;
   }

   &:not(:last-child) {
      margin-right: 16px;
   }
`;

export const TileTopLine = styled.div`
   margin-bottom: 4px;
`;

export const TileBottomLine = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const TileTitle = styled.span`
   display: flex;
   font-size: 18px;
   line-height: 24px;
   text-transform: capitalize;
   color: ${colors.blue};
   font-weight: 600;
`;

export const TileLabel = styled.span`
   font-size: 14px;
   font-weight: 600;
   text-transform: uppercase;
   display: flex;
`;

export const TileStar = styled.div`
   display: inline-flex;

   svg {
      height: 24px;
      width: 24px;
      fill: ${colors.gold};
   }
`;
