// seed.js
const mongoose = require('mongoose');
const Product = require('./models/product.model');

require('dotenv').config(); 
const MONGO_URI = process.env.MONGODB_URI;

const seedProducts = [
  { 
    name: 'Red Apple', 
    price: 40, 
    imageUrl: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&q=80&auto=format&fit=crop', 
    category: 'Fruits', 
    stock: 50, 
    description: 'Fresh red apples' 
  },
  { 
    name: 'Banana Bunch', 
    price: 30, 
    imageUrl: 'https://images.unsplash.com/photo-1574226516831-e1dff420e9a1?w=800&q=80&auto=format&fit=crop',
    category: 'Fruits', 
    stock: 100 
  },
  { 
    name: 'Spinach Pack', 
    price: 20, 
    imageUrl: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800&q=80&auto=format&fit=crop', 
    category: 'Vegetables', 
    stock: 70 
  },
  { 
    name: 'Milk 1L', 
    price: 50, 
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-1f1b5a6f0a4e?w=800&q=80&auto=format&fit=crop', 
    category: 'Dairy', 
    stock: 200 
  },
  { 
    name: 'Paneer 200g', 
    price: 120, 
    imageUrl: 'https://images.unsplash.com/photo-1604908812841-3f5b24d9c86f?w=800&q=80&auto=format&fit=crop', 
    category: 'Dairy', 
    stock: 40 
  },
  { 
    name: 'Carrot kg', 
    price: 35, 
    imageUrl: 'https://images.unsplash.com/photo-1506808547685-e2ba962ded36?w=800&q=80&auto=format&fit=crop', 
    category: 'Vegetables', 
    stock: 80 
  }
];


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Connected to mongo — seeding...');
    await Product.deleteMany({});
    await Product.insertMany(seedProducts);
    console.log('Seed complete');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });