import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import generateStore from './redux/store'
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
      <div className="App">
        <Hero></Hero>
        <Navigation></Navigation>
        <About></About>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
