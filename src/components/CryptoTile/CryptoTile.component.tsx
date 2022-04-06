import React from 'react';
import {
   TileWrapper,
   TileTopLine,
   TileBottomLine,
   TileTitle,
   TileLabel,
   TileStar,
} from './CryptoTile.styles';
import { StarIcon } from '@assets/icons';

export interface CryptoTileProps {
   label: string;
   title: string;
   withStar?: boolean;
}

const CryptoTile = ({ label, title, withStar }: CryptoTileProps) => {
   return (
      <TileWrapper>
         <TileTopLine>
            <TileLabel>{label}</TileLabel>
         </TileTopLine>
         <TileBottomLine>
            <TileTitle>{title}</TileTitle>
            {withStar && (
               <TileStar data-testid="crypto-tile-svg">
                  <StarIcon />
               </TileStar>
            )}
         </TileBottomLine>
      </TileWrapper>
   );
};

export default CryptoTile;
