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
         '@constants': resolvePath('./src/constants/'),
         '@hocs': resolvePath('./src/hocs/'),
         '@hooks': resolvePath('./src/hooks/'),
         '@layout': resolvePath('./src/layout/'),
         '@pages': resolvePath('./src/pages/'),
         '@styles': resolvePath('./src/styles/'),
         '@utils': resolvePath('./src/utils/'),
      },
   },
};
