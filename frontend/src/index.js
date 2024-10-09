import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";

import Main from './Routing.js'
import store from './chatapp/Features/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
        <Provider store={store}>
          <Main />
        </Provider>
    
  </React.StrictMode>
)
