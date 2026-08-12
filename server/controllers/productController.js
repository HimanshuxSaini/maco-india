import Product from '../models/Product.js';
import mongoose from 'mongoose';

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
      // Mock Data based on user screenshots
      products = [
        {
          _id: '1',
          title: 'Piston Pins (Gudgeon Pins / Wrist Pins)',
          slug: 'piston-pins',
          description: 'Connects the piston to the connecting rod.',
          features: ['High Strength', 'Precision Engineered'],
          image: '/images/products/piston-pins.jpeg'
        },
        {
          _id: '2',
          title: 'Piston Pins (Various Sizes)',
          slug: 'piston-pins-various',
          description: 'Engine piston connection component.',
          features: ['Multiple Sizes', 'High Durability'],
          image: '/images/products/piston-pins-various.jpeg'
        },
        {
          _id: '3',
          title: 'CONNECTING ROD KITS FOR TWO-WHEELERS',
          slug: 'connecting-rod-kits',
          description: 'Connects pistons to the crankshaft.',
          features: ['High Tensile Strength', 'Precision Engineered'],
          image: '/images/products/connecting-rod-kits.jpeg'
        },
        {
          _id: '4',
          title: 'Automatic Transmission Steel Clutch Plates',
          slug: 'auto-trans-steel-clutch-plates',
          description: 'Used inside automatic transmission clutch packs.',
          features: ['Heat Resistant', 'High Friction'],
          image: '/images/products/steel-clutch-plates.jpeg'
        },
        {
          _id: '5',
          title: 'Engine Valves (Intake & Exhaust Valves)',
          slug: 'engine-valves',
          description: 'Controls air/fuel intake and exhaust gases.',
          features: ['Heat Resistant', 'Durable'],
          image: '/images/products/engine-valves.jpeg'
        },
        {
          _id: '6',
          title: 'Clutch Assembly / Clutch Pressure Plate',
          slug: 'clutch-assembly',
          description: 'Transfers engine power to the transmission.',
          features: ['Smooth Engagement', 'High Torque Capacity'],
          image: '/images/products/clutch-assembly.jpeg'
        },
        {
          _id: '7',
          title: 'Motorcycle Clutch Friction Plates',
          slug: 'motorcycle-clutch-friction-plates',
          description: 'Provides friction for clutch engagement.',
          features: ['Low Wear', 'Consistent Performance'],
          image: '/images/products/clutch-friction-plates.jpeg'
        },
        {
          _id: '8',
          title: 'Motorcycle Crankshaft Assembly',
          slug: 'motorcycle-crankshaft-assembly',
          description: 'Converts piston motion into rotational motion.',
          features: ['Perfectly Balanced', 'High Strength'],
          image: '/images/products/crankshaft-assembly.jpeg'
        },
        {
          _id: '9',
          title: 'Disc Brake Pads',
          slug: 'disc-brake-pads',
          description: 'Provides braking friction against the disc rotor.',
          features: ['High Friction Coefficient', 'Low Noise'],
          image: '/images/products/disc-brake-pads.jpeg'
        },
        {
          _id: '10',
          title: 'Brake Shoes',
          slug: 'brake-shoes',
          description: 'Used in drum brake systems.',
          features: ['Excellent Stopping Power', 'Asbestos Free'],
          image: '/images/products/brake-shoes.jpeg'
        },
        {
          _id: '11',
          title: 'Brake Shoe Linings / Drum Brake Shoes',
          slug: 'brake-shoe-linings',
          description: 'Replacement brake shoes for drum brakes.',
          features: ['Long Lasting', 'High Performance'],
          image: '/images/products/brake-shoe-linings.jpeg'
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

// Helper function to get mock products
const getMockProducts = async () => {
  return [
    {
      _id: '1',
      title: 'Piston Pins (Gudgeon Pins / Wrist Pins)',
      slug: 'piston-pins',
      description: 'Connects the piston to the connecting rod.',
      features: ['High Strength', 'Precision Engineered'],
      image: '/images/products/piston-pins.jpeg'
    },
    {
      _id: '2',
      title: 'Piston Pins (Various Sizes)',
      slug: 'piston-pins-various',
      description: 'Engine piston connection component.',
      features: ['Multiple Sizes', 'High Durability'],
      image: '/images/products/piston-pins-various.jpeg'
    },
    {
      _id: '3',
      title: 'CONNECTING ROD KITS FOR TWO-WHEELERS',
      slug: 'connecting-rod-kits',
      description: 'Connects pistons to the crankshaft.',
      features: ['High Tensile Strength', 'Precision Engineered'],
      image: '/images/products/connecting-rod-kits.jpeg'
    },
    {
      _id: '4',
      title: 'Automatic Transmission Steel Clutch Plates',
      slug: 'auto-trans-steel-clutch-plates',
      description: 'Used inside automatic transmission clutch packs.',
      features: ['Heat Resistant', 'High Friction'],
      image: '/images/products/steel-clutch-plates.jpeg'
    },
    {
      _id: '5',
      title: 'Engine Valves (Intake & Exhaust Valves)',
      slug: 'engine-valves',
      description: 'Controls air/fuel intake and exhaust gases.',
      features: ['Heat Resistant', 'Durable'],
      image: '/images/products/engine-valves.jpeg'
    },
    {
      _id: '6',
      title: 'Clutch Assembly / Clutch Pressure Plate',
      slug: 'clutch-assembly',
      description: 'Transfers engine power to the transmission.',
      features: ['Smooth Engagement', 'High Torque Capacity'],
      image: '/images/products/clutch-assembly.jpeg'
    },
    {
      _id: '7',
      title: 'Motorcycle Clutch Friction Plates',
      slug: 'motorcycle-clutch-friction-plates',
      description: 'Provides friction for clutch engagement.',
      features: ['Low Wear', 'Consistent Performance'],
      image: '/images/products/clutch-friction-plates.jpeg'
    },
    {
      _id: '8',
      title: 'Motorcycle Crankshaft Assembly',
      slug: 'motorcycle-crankshaft-assembly',
      description: 'Converts piston motion into rotational motion.',
      features: ['Perfectly Balanced', 'High Strength'],
      image: '/images/products/crankshaft-assembly.jpeg'
    },
    {
      _id: '9',
      title: 'Disc Brake Pads',
      slug: 'disc-brake-pads',
      description: 'Provides braking friction against the disc rotor.',
      features: ['High Friction Coefficient', 'Low Noise'],
      image: '/images/products/disc-brake-pads.jpeg'
    },
    {
      _id: '10',
      title: 'Brake Shoes',
      slug: 'brake-shoes',
      description: 'Used in drum brake systems.',
      features: ['Excellent Stopping Power', 'Asbestos Free'],
      image: '/images/products/brake-shoes.jpeg'
    },
    {
      _id: '11',
      title: 'Brake Shoe Linings / Drum Brake Shoes',
      slug: 'brake-shoe-linings',
      description: 'Replacement brake shoes for drum brakes.',
      features: ['Long Lasting', 'High Performance'],
      image: '/images/products/brake-shoe-linings.jpeg'
    }
  ];
};
