import React from 'react';
import Main from './src/components/Main';
import Nav from './src/components/Nav';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from "react-redux"
import store from './Store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/nav' element={<Nav/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
      );
}


