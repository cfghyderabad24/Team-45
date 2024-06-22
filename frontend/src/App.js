import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import Login from './components/login/Login';
import Register from './components/register/Register'


function App() {
  let router = createBrowserRouter([
    {
      path:'',
      element:<Layout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        },

        
      ]
    }
  ])

  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
