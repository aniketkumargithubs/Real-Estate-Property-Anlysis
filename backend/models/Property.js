const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    trim: true
  },
  size: {
    type: Number,
    required: true,
    min: 0
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  propertyType: {
    type: String,
    default: 'Residential'
  },
  bedrooms: {
    type: Number,
    default: 0
  },
  bathrooms: {
    type: Number,
    default: 0
  },
  yearBuilt: {
    type: Number
  },
  aiAnalysis: {
    marketValue: Number,
    recommendedPrice: Number,
    priceAdjustment: Number,
    insights: String,
    confidence: String,
    analyzedAt: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

propertySchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Property', propertySchema);

