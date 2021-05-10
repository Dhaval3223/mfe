import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { 
  StylesProvider, 
  createGenerateClassName 
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
  return (
    <BrowserRouter>
      <stylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </stylesProvider>
    </BrowserRouter>
  )
};
