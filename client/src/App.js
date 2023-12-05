// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Card.css';
import './styles/LoginCadastro.css';
import './styles/Add.css';
import './styles/Edit.css';
import './styles/Delete.css';
import './styles/Show.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './autenticação/authContext';
import PrivateRoute from './autenticação/PrivateRoute';
import LoginCadastro from './autenticação/LoginCadastro';
import AddProduct from './pages/AddProduct';
import DeleteProduct from './pages/DeleteProduct';
import EditProduct from './pages/EditProduct';
import ShowProducts from './pages/ShowProducts';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginCadastro />} />
          <Route
            path="/add"
            element={<PrivateRoute element={<AddProduct />} />}
          />
          <Route
            path="/delete"
            element={<PrivateRoute element={<DeleteProduct />} />}
          />
          <Route
            path="/edit"
            element={<PrivateRoute element={<EditProduct />} />}
          />
          <Route
            path="/show"
            element={<PrivateRoute element={<ShowProducts />} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
