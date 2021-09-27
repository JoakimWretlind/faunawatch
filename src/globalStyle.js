import { createGlobalStyle } from 'styled-components';

import CabinSketchB from './components/assets/fonts/CabinSketch-Bold.ttf';
import SourceSansLight from './components/assets/fonts/SourceSansPro-Light.ttf';
import AvenirBlack from './components/assets/fonts/Avenir-Black.otf';
import ClashBold from './components/assets/fonts/ClashDisplay-Bold.ttf';
import EsperaBold from './components/assets/fonts/Espera-Bold.ttf';
import EsperaRegular from './components/assets/fonts/Espera-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'cabin-bold';
  src: url(${CabinSketchB});
}
@font-face {
  font-family: 'source-light';
  src: url(${SourceSansLight});
}
@font-face {
  font-family: 'avenir-black';
  src: url(${AvenirBlack});
}
@font-face {
  font-family: 'clashBold';
  src: url(${ClashBold});
}
@font-face {
  font-family: 'EsperaBold';
  src: url(${EsperaBold});
}
@font-face {
  font-family: 'EsperaRegular';
  src: url(${EsperaRegular});
}
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    html {
      font-size: 62.5%;
    }
    
    body {
      box-sizing: border-box;
      // font-family: 'poppins', sans-serif;
      font-family: 'EsperaRegular';
    }
    
    a {
      text-decoration: none;
    }
    
    ul, li {
      list-style: none;
    }
    h1{
      font-family: 'cabin-bold';
    }
    h2{
      font-family: 'EsperaBold';
    }
`;