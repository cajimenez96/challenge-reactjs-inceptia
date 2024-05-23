import React from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {  
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </BrowserRouter>
  )
}

export default App;