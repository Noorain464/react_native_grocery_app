// seed.js
const mongoose = require('mongoose');
const Product = require('./models/product.model');

require('dotenv').config(); 
const MONGO_URI = process.env.MONGODB_URI;

const seedProducts = [
  // --- FRUITS ---
  { 
    name: 'Red Apple', 
    price: 40, 
    imageUrl: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=800&q=80', 
    category: 'Fruits', 
    stock: 50, 
    description: 'Fresh red apples from Kashmir' 
  },
  { 
    name: 'Banana Bunch', 
    price: 30, 
    imageUrl: 'https://images.unsplash.com/photo-1574226516831-e1dff420e9a1?w=800&q=80',
    category: 'Fruits', 
    stock: 100,
    description: 'Organic sweet bananas'
  },
  { 
    name: 'Fresh Oranges', 
    price: 60, 
    imageUrl: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=800&q=80', 
    category: 'Fruits', 
    stock: 45, 
    description: 'Juicy citrus oranges' 
  },
  { 
    name: 'Green Grapes', 
    price: 80, 
    imageUrl: 'https://images.unsplash.com/photo-1537640538965-17562995e59a?w=800&q=80', 
    category: 'Fruits', 
    stock: 30, 
    description: 'Seedless green grapes' 
  },

  // --- VEGETABLES ---
  { 
    name: 'Spinach Pack', 
    price: 20, 
    imageUrl: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800&q=80', 
    category: 'Vegetables', 
    stock: 70,
    description: 'Fresh leafy spinach'
  },
  { 
    name: 'Carrot kg', 
    price: 35, 
    imageUrl: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&q=80', 
    category: 'Vegetables', 
    stock: 80,
    description: 'Crunchy orange carrots'
  },
  { 
    name: 'Red Tomatoes', 
    price: 25, 
    imageUrl: 'https://images.unsplash.com/photo-1546470297-b89280d5b303?w=800&q=80', 
    category: 'Vegetables', 
    stock: 60, 
    description: 'Ripe red tomatoes' 
  },
  { 
    name: 'Potatoes 1kg', 
    price: 30, 
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82a6b696?w=800&q=80', 
    category: 'Vegetables', 
    stock: 120, 
    description: 'Farm fresh potatoes' 
  },

  // --- DAIRY ---
  { 
    name: 'Milk 1L', 
    price: 50, 
    imageUrl: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&q=80', 
    category: 'Dairy', 
    stock: 200,
    description: 'Full cream fresh milk'
  },
  { 
    name: 'Paneer 200g', 
    price: 120, 
    imageUrl: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80', 
    category: 'Dairy', 
    stock: 40,
    description: 'Soft cottage cheese'
  },
  { 
    name: 'Salted Butter', 
    price: 250, 
    imageUrl: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800&q=80', 
    category: 'Dairy', 
    stock: 35, 
    description: 'Creamy salted butter' 
  },

  // --- SNACKS (New Category) ---
  { 
    name: 'Potato Chips', 
    price: 20, 
    imageUrl: 'https://images.unsplash.com/photo-1566478919030-26d9caddcf64?w=800&q=80', 
    category: 'Snacks', 
    stock: 150, 
    description: 'Classic salted chips' 
  },
  { 
    name: 'Choco Cookies', 
    price: 45, 
    imageUrl: 'https://images.unsplash.com/photo-1499636138143-bd630f5cf386?w=800&q=80', 
    category: 'Snacks', 
    stock: 80, 
    description: 'Chocolate chip cookies' 
  },
  { 
    name: 'Dark Chocolate', 
    price: 90, 
    imageUrl: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=800&q=80', 
    category: 'Snacks', 
    stock: 60, 
    description: '70% Dark Chocolate Bar' 
  },

  // --- ELECTRONICS (New Category) ---
  { 
    name: 'Wireless Headphones', 
    price: 2500, 
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80', 
    category: 'Electronics', 
    stock: 15, 
    description: 'Noise cancelling headphones' 
  },
  { 
    name: 'Smart Watch', 
    price: 3500, 
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80', 
    category: 'Electronics', 
    stock: 10, 
    description: 'Fitness tracking smart watch' 
  },

  // --- CLOTHES (New Category) ---
  { 
    name: 'Cotton T-Shirt', 
    price: 499, 
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80', 
    category: 'Clothes', 
    stock: 50, 
    description: 'Basic white cotton tee' 
  },
  { 
    name: 'Denim Jacket', 
    price: 1200, 
    imageUrl: 'https://images.unsplash.com/photo-1551534769-b0de87533df5?w=800&q=80', 
    category: 'Clothes', 
    stock: 20, 
    description: 'Classic blue denim jacket' 
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