const express = require('express');
const router = express.Router();
const Property = require('../models/Property');
const { analyzeProperty } = require('../services/openaiService');

// POST analyze property by ID
router.post('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    const analysis = await analyzeProperty(property);
    property.aiAnalysis = analysis;
    await property.save();

    res.json({
      property,
      analysis
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET analysis for all properties (for comparative chart)
router.get('/comparative', async (req, res) => {
  try {
    const properties = await Property.find({
      'aiAnalysis.marketValue': { $exists: true }
    }).sort({ createdAt: -1 });

    const comparativeData = properties.map(prop => ({
      id: prop._id,
      location: prop.location,
      listedPrice: prop.price,
      marketValue: prop.aiAnalysis.marketValue,
      recommendedPrice: prop.aiAnalysis.recommendedPrice,
      priceAdjustment: prop.aiAnalysis.priceAdjustment,
      size: prop.size,
      pricePerSqFt: prop.price / prop.size,
      marketPricePerSqFt: prop.aiAnalysis.marketValue / prop.size
    }));

    res.json(comparativeData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

