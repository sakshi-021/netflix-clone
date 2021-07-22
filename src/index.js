import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import {GlobalStyles} from "./Global-Styles";
import {firebase} from "./lib/firebase.prod";
import {FirebaseContext} from "./context/firebase"
import App from './App';


ReactDOM.render(<>
<FirebaseContext.Provider value={{ firebase }}>
  <GlobalStyles />
  
    <App /> 
    </FirebaseContext.Provider>
    </>,
  document.getElementById('root')
);


