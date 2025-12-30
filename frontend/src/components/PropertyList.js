import React from 'react';
import PropertyCard from './PropertyCard';
import './PropertyList.css';

const PropertyList = ({ 
  properties, 
  selectedProperty, 
  onSelectProperty, 
  onAnalyze, 
  onDelete,
  loading 
}) => {
  if (properties.length === 0) {
    return (
      <div className="property-list">
        <h2>Property Listings</h2>
        <div className="empty-state">
          <p>No properties added yet. Add your first property above!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="property-list">
      <h2>Property Listings ({properties.length})</h2>
      <div className="properties-grid">
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            property={property}
            isSelected={selectedProperty && selectedProperty._id === property._id}
            onSelect={() => onSelectProperty(property)}
            onAnalyze={() => onAnalyze(property._id)}
            onDelete={() => onDelete(property._id)}
            loading={loading}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;

