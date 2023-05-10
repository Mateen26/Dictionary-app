import './main.css';
import './App.css';
import './index.css';

import Dictionary from './dictionary';
import Header from './header';
import ThemeContextProvider from './context';

function App() {
  return (
    <>
      <ThemeContextProvider>
          <Header/>
        <Dictionary/>
      </ThemeContextProvider>
    </>
  );
}

export default App;
