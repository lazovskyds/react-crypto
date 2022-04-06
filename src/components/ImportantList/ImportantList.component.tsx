import React from 'react';
import { withSection } from '@hocs/index';
import CryptoTile, {
   CryptoTileProps,
} from '@components/CryptoTile/CryptoTile.component';
import { ImportantListWrapper } from './ImportantList.styles';

interface ImportantListProps {
   items: CryptoTileProps[];
}

const ImportantList = ({ items }: ImportantListProps) => {
   return (
      <ImportantListWrapper>
         {items.map((item) => (
            <CryptoTile
               key={item.title}
               title={item.title}
               label={item.label}
               withStar
            />
         ))}
      </ImportantListWrapper>
   );
};

export default withSection(ImportantList);
