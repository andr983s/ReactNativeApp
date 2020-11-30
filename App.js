import React, { Component } from 'react';
import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import {Provider} from 'react-redux';
import {AppNavigation} from './app/components/app-navigation/app-navigation';
import {Reducer, Operation,initialState} from './app/reducers/reducer';

const store = createStore(Reducer ,initialState , applyMiddleware(thunk));

export default class App extends Component {

  componentDidMount(){
    store.dispatch(Operation.loadImages());
  }

    render(){
     
      return( 
      <Provider store={store}> 
          <AppNavigation/> 
      </Provider>
      )
    }
}

