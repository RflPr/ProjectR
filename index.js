const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Product } = require('./config/sequelize');
const app = express();

app.use(cors());
app.use(bodyParser.json());
// Rotas CRUD

// Adicionar produto
app.post('/add-product', async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const newProduct = await Product.create({ name, price, description });
    res.json(newProduct);
  } catch (error) {
    console.error('Erro ao adicionar produto:', error);
    res.status(500).send('Erro ao adicionar produto. Consulte o console para obter detalhes.');
  }
});

// Excluir produto
app.delete('/delete-product/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    await Product.destroy({ where: { id: productId } });
    res.send('Produto excluído com sucesso!');
  } catch (error) {
    console.error('Erro ao excluir produto:', error);
    res.status(500).send('Erro ao excluir produto. Consulte o console para obter detalhes.');
  }
});

// Editar produto
app.put('/edit-product/:id', async (req, res) => {
  try {
    console.log('Rota de edição alcançada');
    const productId = req.params.id;
    const { newProductName, newProductPrice, newProductDescription } = req.body;
    await Product.update(
      {
        name: newProductName,
        price: newProductPrice,
        description: newProductDescription,
      },
      { where: { id: productId } }
    );

    res.send('Produto editado com sucesso!');
  } catch (error) {
    console.error('Erro ao editar produto:', error);
    res.status(500).send('Erro ao editar produto. Consulte o console para obter detalhes.');
  }
});


// Mostrar todos os produtos
app.get('/show-products', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).send('Erro ao buscar produtos. Consulte o console para obter detalhes.');
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
