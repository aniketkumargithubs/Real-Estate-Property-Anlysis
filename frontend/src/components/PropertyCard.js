import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ 
  property, 
  isSelected, 
  onSelect, 
  onAnalyze, 
  onDelete,
  loading 
}) => {
  const hasAnalysis = property.aiAnalysis && property.aiAnalysis.marketValue;

  return (
    <div 
      className={`property-card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <div className="card-header">
        <h3>{property.location}</h3>
        <span className="property-type">{property.propertyType}</span>
      </div>

      <div className="card-body">
        <div className="property-details">
          <div className="detail-item">
            <span className="label">Price:</span>
            <span className="value">${property.price.toLocaleString()}</span>
          </div>
          <div className="detail-item">
            <span className="label">Size:</span>
            <span className="value">{property.size.toLocaleString()} sq ft</span>
          </div>
          <div className="detail-item">
            <span className="label">Price/sqft:</span>
            <span className="value">${(property.price / property.size).toFixed(2)}</span>
          </div>
          {(property.bedrooms || property.bathrooms) && (
            <div className="detail-item">
              <span className="label">Rooms:</span>
              <span className="value">
                {property.bedrooms ? `${property.bedrooms} bed` : ''}
                {property.bedrooms && property.bathrooms ? ' / ' : ''}
                {property.bathrooms ? `${property.bathrooms} bath` : ''}
              </span>
            </div>
          )}
        </div>

        {hasAnalysis && (
          <div className="analysis-preview">
            <div className="analysis-item">
              <span className="label">Market Value:</span>
              <span className="value highlight">
                ${property.aiAnalysis.marketValue.toLocaleString()}
              </span>
            </div>
            <div className="analysis-item">
              <span className="label">Adjustment:</span>
              <span className={`value ${property.aiAnalysis.priceAdjustment >= 0 ? 'positive' : 'negative'}`}>
                {property.aiAnalysis.priceAdjustment > 0 ? '+' : ''}
                {property.aiAnalysis.priceAdjustment.toFixed(1)}%
              </span>
            </div>
            <div className="analysis-item">
              <span className="label">Confidence:</span>
              <span className={`confidence-badge ${property.aiAnalysis.confidence?.toLowerCase()}`}>
                {property.aiAnalysis.confidence}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="card-actions" onClick={(e) => e.stopPropagation()}>
        {!hasAnalysis && (
          <button 
            className="analyze-btn"
            onClick={onAnalyze}
            disabled={loading}
          >
            {loading ? 'Analyzing...' : 'Analyze with AI'}
          </button>
        )}
        {hasAnalysis && (
          <button 
            className="re-analyze-btn"
            onClick={onAnalyze}
            disabled={loading}
          >
            {loading ? 'Re-analyzing...' : 'Re-analyze'}
          </button>
        )}
        <button 
          className="delete-btn"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;

