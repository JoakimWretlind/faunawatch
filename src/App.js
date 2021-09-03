import { GlobalStyle } from './globalStyle';
import { Hero, Navbar, About, Footer, GetInvolved, Projects, Signup } from './components/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <GetInvolved />
      <Projects />
      <About />
      <Signup />
      <Footer />
    </>
  );
}

export default App;
