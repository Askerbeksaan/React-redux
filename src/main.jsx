import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Forms from './pages/Forms.jsx';
import LastPage from './pages/LastPage.jsx';
import Details from './pages/Details.jsx';
import { store } from './store/index.js'
import { Provider } from 'react-redux';
import Categories from './pages/Categories.jsx';
import CategoryFood from './pages/CategoryFood.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Произошла ошибка</p>,
  },
  {
    path: "/categories",
    element: <Categories />
  },
  {
    path: "/categories/:id",
    element: <CategoryFood />
  },
  {
    path: "/restaurants/:id",
    element: <Details />
  },
  {
    path: "/Forms",
    element: < Forms/>
  },
  {
    path: "/lastPage",
    element: < LastPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
