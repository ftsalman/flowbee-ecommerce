import React from 'react'
import {RouterProvider} from 'react-router-dom';
import { router } from './router/Router';
import './App.css';


export const App = () => {
 return <RouterProvider router={router}/>
}
