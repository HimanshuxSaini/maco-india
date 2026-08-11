import Product from '../models/Product.js';

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  try {
    // If DB is connected, fetch from DB. For now we will return mock data if DB fails or is empty.
    let products = [];
    if (mongoose.connection.readyState === 1) {
       products = await Product.find({});
    }
    
    if (products.length === 0) {
      // Mock Data based on actual Maco India Products
      products = [
        {
          _id: '1',
          title: 'Connecting Rod',
          slug: 'connecting-rod',
          description: 'Connecting rod is a vital component of any internal combustion engine. This is the component which carries the power from the piston to the crank-shaft and thus giving movement to the engine.',
          features: ['High Tensile Strength', 'Precision Engineered', 'Durability'],
          image: '/images/products/connecting-rod.jpg'
        },
        {
          _id: '2',
          title: 'Crank Pin',
          slug: 'crank-pin',
          description: 'Crank Pin is a high precision item, having round cylindrical shape. It can be of hole or solid type, but must have a high surface finish, to serve as running surface for needle bearings.',
          features: ['High Surface Finish', 'Wear Resistant', 'Accurate Dimensions'],
          image: '/images/products/crank-pin.jpg'
        },
        {
          _id: '3',
          title: 'Gudgeon Pins',
          slug: 'gudgeon-pins',
          description: 'Gudgeon Pins, mostly in American nomenclature known as wrist pins, are an integral part of all types of internal combustion engines, Otto or diesel types, 2 strokes and 4 types.',
          features: ['Robust Design', 'High Tolerance', 'Heat Treated'],
          image: '/images/products/gudgeon-pin.jpg'
        },
        {
          _id: '4',
          title: 'Brake Pads',
          slug: 'brake-pads',
          description: 'A brake pad refers to a piece of friction-generating material that pushes itself on to the rotor or disc of your car, thereby enabling it to slow down and stop.',
          features: ['High Friction Coefficient', 'Low Wear', 'Noise Reduction'],
          image: '/images/products/brake-pads.jpg'
        },
        {
          _id: '5',
          title: 'Brake Shoe',
          slug: 'brake-shoe',
          description: 'Brake shoes are part of a drum brake system. Brake shoes are crescent-shaped components with a rough friction material on one side. They sit inside of a brake drum.',
          features: ['Excellent Stopping Power', 'Long Lasting', 'Asbestos Free'],
          image: '/images/products/brake-shoe.jpg'
        },
        {
          _id: '6',
          title: 'Clutch Plates',
          slug: 'clutch-plates',
          description: 'The clutch plate is a disc that serves to create friction between itself, the flywheel on one side, and the pressure plate on the other.',
          features: ['Smooth Engagement', 'High Torque Capacity', 'Heat Resistant'],
          image: '/images/products/clutch-plates.jpg'
        }
      ];
    }

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Fetch single product
// @route   GET /api/products/:slug
// @access  Public
export const getProductById = async (req, res) => {
  try {
    let product;
    if (mongoose.connection.readyState === 1) {
      product = await Product.findOne({ slug: req.params.slug });
    }
    
    if (product) {
      res.json(product);
    } else {
      // Find from mock data
      const products = await getMockProducts();
      product = products.find(p => p.slug === req.params.slug);
      
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

import mongoose from 'mongoose';
async function getMockProducts() {
  return [
    {
      _id: '1',
      title: 'Connecting Rod',
      slug: 'connecting-rod',
      description: 'Connecting rod is a vital component of any internal combustion engine. This is the component which carries the power from the piston to the crank-shaft and thus giving movement to the engine.',
      features: ['High Tensile Strength', 'Precision Engineered', 'Durability'],
      image: '/images/products/connecting-rod.jpg'
    },
    {
      _id: '2',
      title: 'Crank Pin',
      slug: 'crank-pin',
      description: 'Crank Pin is a high precision item, having round cylindrical shape. It can be of hole or solid type, but must have a high surface finish, to serve as running surface for needle bearings.',
      features: ['High Surface Finish', 'Wear Resistant', 'Accurate Dimensions'],
      image: '/images/products/crank-pin.jpg'
    },
    {
      _id: '3',
      title: 'Gudgeon Pins',
      slug: 'gudgeon-pins',
      description: 'Gudgeon Pins, mostly in American nomenclature known as wrist pins, are an integral part of all types of internal combustion engines, Otto or diesel types, 2 strokes and 4 types.',
      features: ['Robust Design', 'High Tolerance', 'Heat Treated'],
      image: '/images/products/gudgeon-pin.jpg'
    },
    {
      _id: '4',
      title: 'Brake Pads',
      slug: 'brake-pads',
      description: 'A brake pad refers to a piece of friction-generating material that pushes itself on to the rotor or disc of your car, thereby enabling it to slow down and stop.',
      features: ['High Friction Coefficient', 'Low Wear', 'Noise Reduction'],
      image: '/images/products/brake-pads.jpg'
    },
    {
      _id: '5',
      title: 'Brake Shoe',
      slug: 'brake-shoe',
      description: 'Brake shoes are part of a drum brake system. Brake shoes are crescent-shaped components with a rough friction material on one side. They sit inside of a brake drum.',
      features: ['Excellent Stopping Power', 'Long Lasting', 'Asbestos Free'],
      image: '/images/products/brake-shoe.jpg'
    },
    {
      _id: '6',
      title: 'Clutch Plates',
      slug: 'clutch-plates',
      description: 'The clutch plate is a disc that serves to create friction between itself, the flywheel on one side, and the pressure plate on the other.',
      features: ['Smooth Engagement', 'High Torque Capacity', 'Heat Resistant'],
      image: '/images/products/clutch-plates.jpg'
    }
  ];
}
