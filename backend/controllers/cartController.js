import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

// @desc    Get user cart
// @route   GET /api/cart
// @access  Private
export const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      // Create empty cart if it doesn't exist
      cart = await Cart.create({
        user: req.user._id,
        items: [],
        totalPrice: 0,
        totalItems: 0,
      });
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Private
export const addToCart = async (req, res) => {
  try {
    const { productId, qty } = req.body;

    // Validate product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check stock availability
    if (product.countInStock < qty) {
      return res.status(400).json({ 
        message: `Not enough stock. Available: ${product.countInStock}` 
      });
    }

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      // Create new cart if it doesn't exist
      cart = new Cart({
        user: req.user._id,
        items: [],
        totalPrice: 0,
        totalItems: 0,
      });
    }

    // Check if product is already in cart
    const existItem = cart.items.find(
      (item) => item.product.toString() === productId
    );

    if (existItem) {
      // Update quantity if product exists
      existItem.qty = qty;
    } else {
      // Add new item if product doesn't exist in cart
      cart.items.push({
        product: productId,
        name: product.name,
        image: product.images.length > 0 ? product.images[0].path : '',
        price: product.price - (product.price * product.discount / 100),
        qty,
      });
    }

    // Recalculate totals
    cart.totalItems = cart.items.reduce((acc, item) => acc + item.qty, 0);
    cart.totalPrice = cart.items.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );

    const updatedCart = await cart.save();

    res.status(201).json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update cart item quantity
// @route   PUT /api/cart/:id
// @access  Private
export const updateCartItem = async (req, res) => {
  try {
    const { qty } = req.body;
    const productId = req.params.id;

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Find the item to update
    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    // Check stock availability
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (product.countInStock < qty) {
      return res.status(400).json({ 
        message: `Not enough stock. Available: ${product.countInStock}` 
      });
    }

    // Update quantity
    cart.items[itemIndex].qty = qty;

    // Recalculate totals
    cart.totalItems = cart.items.reduce((acc, item) => acc + item.qty, 0);
    cart.totalPrice = cart.items.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );

    const updatedCart = await cart.save();

    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:id
// @access  Private
export const removeFromCart = async (req, res) => {
  try {
    const productId = req.params.id;

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Filter out the item to remove
    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId
    );

    // Recalculate totals
    cart.totalItems = cart.items.reduce((acc, item) => acc + item.qty, 0);
    cart.totalPrice = cart.items.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );

    const updatedCart = await cart.save();

    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Clear cart
// @route   DELETE /api/cart
// @access  Private
export const clearCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = [];
    cart.totalItems = 0;
    cart.totalPrice = 0;

    const updatedCart = await cart.save();

    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
