import React from 'react';
import { ImportantList } from '@components/index';
import { mock } from '@components/ImportantList/ImportantList.mock';

const Home = () => {
   return (
      <>
         <ImportantList items={mock} title="Title" />
      </>
   );
};

export default Home;
