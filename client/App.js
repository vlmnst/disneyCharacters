import React from 'react';
import Main from './src/components/Main';
import Nav from './src/components/Nav';
import {Provider} from "react-redux"
import store from './Store';

export default function App() {
  return (
    <Provider store={store}>
      <Nav/>
      <Main/>
    </Provider>
      );
}


