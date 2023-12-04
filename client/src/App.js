import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Card.css';
import './styles/Add.css';
import './styles/Edit.css';
import './styles/Delete.css';
import './styles/Show.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginCadastro from './pages/autenticação/LoginCadastro';
import AddProduct from './pages/AddProduct';
import DeleteProduct from './pages/DeleteProduct';
import EditProduct from './pages/EditProduct';
import ShowProducts from './pages/ShowProducts';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LoginCadastro />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/delete" element={<DeleteProduct />} />
        <Route path="/edit" element={<EditProduct />} />
        <Route path="/show" element={<ShowProducts />} />
      </Routes>
    </Router>
  );
}
//sdsdcs
export default App;
