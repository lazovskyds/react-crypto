/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

// eslint-disable-next-line no-undef
module.exports = {
   webpack: {
      alias: {
         '@assets': resolvePath('./src/assets/'),
         '@components': resolvePath('./src/components/'),
         '@hooks': resolvePath('./src/hooks/'),
         '@layout': resolvePath('./src/layout/'),
         '@styles': resolvePath('./src/styles/'),
         '@utils': resolvePath('./src/utils/'),
      },
   },
};
