import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { PublicLayout } from './layouts'
import { HomeContainer } from './containers'
import LoginContainer from './containers/LoginContainer'
import RegisterContainer from './containers/RegisterContainer'

function App() {
  const token = window.sessionStorage.getItem('token')
  console.log(token)
  const isLoggedIn = !!token

  const routes = createBrowserRouter([{
    element: <PublicLayout/>,
    children: [{
      path: '/',
      element: <LoginContainer/>
    },
    {
      path: '/home',
      element: isLoggedIn ? <HomeContainer/> : <Navigate to="/login"/>,
    },
    {
      path: '/login',
      element: <LoginContainer/>
    },
    {
      path: '/register',
      element: <RegisterContainer/>
    },
    {
      path: '*',
      element: <h1>This Page is Not Found</h1>
    }
  ]
  }])

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
