import React from 'react';
import './PropertyDetails.css';

const PropertyDetails = ({ property }) => {
  if (!property) {
    return (
      <div className="property-details">
        <h2>Property Details</h2>
        <div className="empty-state">
          <p>Select a property to view detailed analysis</p>
        </div>
      </div>
    );
  }

  const hasAnalysis = property.aiAnalysis && property.aiAnalysis.marketValue;

  return (
    <div className="property-details">
      <h2>Property Details & AI Analysis</h2>
      
      <div className="details-section">
        <h3>Basic Information</h3>
        <div className="details-grid">
          <div className="detail-row">
            <span className="detail-label">Location:</span>
            <span className="detail-value">{property.location}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Property Type:</span>
            <span className="detail-value">{property.propertyType}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Size:</span>
            <span className="detail-value">{property.size.toLocaleString()} sq ft</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Listed Price:</span>
            <span className="detail-value highlight">${property.price.toLocaleString()}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Price per Sqft:</span>
            <span className="detail-value">${(property.price / property.size).toFixed(2)}</span>
          </div>
          {property.bedrooms && (
            <div className="detail-row">
              <span className="detail-label">Bedrooms:</span>
              <span className="detail-value">{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="detail-row">
              <span className="detail-label">Bathrooms:</span>
              <span className="detail-value">{property.bathrooms}</span>
            </div>
          )}
          {property.yearBuilt && (
            <div className="detail-row">
              <span className="detail-label">Year Built:</span>
              <span className="detail-value">{property.yearBuilt}</span>
            </div>
          )}
        </div>
      </div>

      {hasAnalysis && (
        <div className="analysis-section">
          <h3>AI Market Analysis</h3>
          
          <div className="analysis-metrics">
            <div className="metric-card">
              <div className="metric-label">Market Value</div>
              <div className="metric-value">
                ${property.aiAnalysis.marketValue.toLocaleString()}
              </div>
              <div className="metric-change">
                {property.aiAnalysis.marketValue >= property.price ? '↑' : '↓'} 
                ${Math.abs(property.aiAnalysis.marketValue - property.price).toLocaleString()}
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-label">Recommended Price</div>
              <div className="metric-value">
                ${property.aiAnalysis.recommendedPrice.toLocaleString()}
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-label">Price Adjustment</div>
              <div className={`metric-value ${property.aiAnalysis.priceAdjustment >= 0 ? 'positive' : 'negative'}`}>
                {property.aiAnalysis.priceAdjustment > 0 ? '+' : ''}
                {property.aiAnalysis.priceAdjustment.toFixed(1)}%
              </div>
              <div className="metric-note">
                {property.aiAnalysis.priceAdjustment >= 0 
                  ? 'Price may be set too low' 
                  : 'Price may be set too high'}
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-label">Confidence Level</div>
              <div className={`metric-value confidence-${property.aiAnalysis.confidence?.toLowerCase()}`}>
                {property.aiAnalysis.confidence}
              </div>
            </div>
          </div>

          <div className="insights-section">
            <h4>Key Insights</h4>
            <div className="insights-content">
              {property.aiAnalysis.insights?.split('\n').map((insight, index) => (
                insight.trim() && (
                  <p key={index}>{insight.trim()}</p>
                )
              )) || (
                <p>{property.aiAnalysis.insights}</p>
              )}
            </div>
          </div>

          {property.aiAnalysis.comparativeNotes && (
            <div className="comparative-section">
              <h4>Comparative Market Notes</h4>
              <div className="comparative-content">
                <p>{property.aiAnalysis.comparativeNotes}</p>
              </div>
            </div>
          )}

          <div className="analysis-timestamp">
            Analyzed on: {new Date(property.aiAnalysis.analyzedAt).toLocaleString()}
          </div>
        </div>
      )}

      {!hasAnalysis && (
        <div className="no-analysis">
          <p>No AI analysis available yet. Click "Analyze with AI" to get market insights.</p>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;

