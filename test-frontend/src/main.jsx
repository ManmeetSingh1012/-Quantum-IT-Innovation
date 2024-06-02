import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignIn from './pages/signin.jsx'
import SignUp from './pages/signup.jsx'
import Home from './pages/home.jsx'
import Intro from './pages/intro.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'


const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Intro />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element: <Home />,
    },

  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(


  <Provider store={store}>

    <PersistGate persistor={persistor}>
      <React.StrictMode>

        <RouterProvider router={router}>
          <App />
        </RouterProvider>

      </React.StrictMode>
    </PersistGate>

  </Provider>
  ,
)
