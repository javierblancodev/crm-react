import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import NewCustomer from './pages/NewCustomer';
import EditCustomer from './pages/EditCustomer';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/customers' element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path='new' element={<NewCustomer/>}/>
          <Route path='edit' element={<EditCustomer/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

// Notes:
// BrowserRouter is to declare that we want to use routing
// Routes encapsulate all the routes we will be using
// Route is the component that will display content depending on the endpoint specified by the user in the browser
// Route can contain other Route inside it. This is know as nested routes.
// Container Route will have a closing tag with content, single Route will not
// Route may take attributes: path is to name the endpoint, element is to set the component to display
// Nested routes with different path attributes, one inside the other will result in multiple segment endpoint: /customer/edit
// We may want to use the colon sign : to indicate a placeholder: /customer/edit/:20
// When we use a single Route that does not have a path attribute, we need to make use of the outlet feature in the parent component. This child Route wild be display where the outlet component is declate inside the parent componet. We would need also to add the attribute index in the child Route to let React Router Dom know that this will be our index page/component
// This will work like a template such as Django Template Language or Shopipy liquid