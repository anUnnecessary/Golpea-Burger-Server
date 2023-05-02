const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


const categories = require('./data/categories.json');

const foods = require('./data/foods.json');


app.use(cors());

app.get('/', (req, res) => {
    res.send('Golpea is running')
});

app.get('/categories', (req, res) => {
    console.log(categories);
    res.send(categories)
});

app.get('/foods', (req, res) => {
    res.send(foods);
})

app.get('/foods/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const selectedFoods = foods.find(f => f._id === id);
    res.send(selectedFoods);
})

app.get('/categories/:id'), (req, res) => {
    const id = req.params.id;
    console.log(id);
    if (id == 0) {
        res.send(foods)
    }
    else {
        const categoryFood = foods.filter(f => parseInt(f.category_id) === id);
        res.send(categoryFood)
    }

}


app.listen(port, () => {
    console.log(`Golpea API is running on port: ${port}`);
})