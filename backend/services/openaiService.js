const OpenAI = require('openai');

// Lazy initialization of OpenAI client to ensure env vars are loaded
function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not set in environment variables');
  }
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

/**
 * Analyze property and provide market insights
 */
async function analyzeProperty(property) {
  try {
    const openai = getOpenAIClient();
    const prompt = `You are a real estate market analyst. Analyze the following property listing and provide insights:

Property Details:
- Location: ${property.location}
- Size: ${property.size} sq ft
- Current Price: $${property.price.toLocaleString()}
- Property Type: ${property.propertyType || 'Residential'}
- Bedrooms: ${property.bedrooms || 'Not specified'}
- Bathrooms: ${property.bathrooms || 'Not specified'}
- Year Built: ${property.yearBuilt || 'Not specified'}

Please provide:
1. Estimated market value based on comparable properties in the area
2. Recommended listing price (if different from current price)
3. Price adjustment needed (positive or negative percentage)
4. Key insights about the property's pricing position in the market
5. Confidence level (High, Medium, Low) in your analysis
6. Comparative market analysis insights

Format your response as JSON with the following structure:
{
  "marketValue": <number>,
  "recommendedPrice": <number>,
  "priceAdjustment": <number (percentage)>,
  "insights": "<detailed insights string>",
  "confidence": "<High|Medium|Low>",
  "comparativeNotes": "<brief notes on comparable properties>"
}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an expert real estate market analyst. Always respond with valid JSON only, no additional text."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const responseText = completion.choices[0].message.content.trim();
    
    // Try to extract JSON from response
    let analysis;
    try {
      // Remove markdown code blocks if present
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        analysis = JSON.parse(jsonMatch[0]);
      } else {
        analysis = JSON.parse(responseText);
      }
    } catch (parseError) {
      // Fallback if JSON parsing fails
      console.error('Error parsing OpenAI response:', parseError);
      analysis = {
        marketValue: property.price * 0.95,
        recommendedPrice: property.price * 0.95,
        priceAdjustment: -5,
        insights: responseText || "Analysis completed. Market value estimated at 95% of listed price.",
        confidence: "Medium",
        comparativeNotes: "Analysis based on general market trends."
      };
    }

    // Ensure all required fields exist
    return {
      marketValue: analysis.marketValue || property.price * 0.95,
      recommendedPrice: analysis.recommendedPrice || property.price * 0.95,
      priceAdjustment: analysis.priceAdjustment || 0,
      insights: analysis.insights || "Property analysis completed.",
      confidence: analysis.confidence || "Medium",
      comparativeNotes: analysis.comparativeNotes || "No specific comparable data available.",
      analyzedAt: new Date()
    };
  } catch (error) {
    console.error('OpenAI API Error:', error);
    
    // Fallback analysis if API fails
    const estimatedValue = property.price * 0.95;
    return {
      marketValue: estimatedValue,
      recommendedPrice: estimatedValue,
      priceAdjustment: -5,
      insights: `Note: AI analysis unavailable. Fallback analysis suggests market value of $${estimatedValue.toLocaleString()}. This is a placeholder - ensure OpenAI API key is configured for accurate analysis.`,
      confidence: "Low",
      comparativeNotes: "Analysis unavailable due to API error.",
      analyzedAt: new Date()
    };
  }
}

module.exports = {
  analyzeProperty
};

