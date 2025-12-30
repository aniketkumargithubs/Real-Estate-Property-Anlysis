import React, { useState, useEffect } from 'react';
import PropertyForm from './components/PropertyForm';
import PropertyList from './components/PropertyList';
import PropertyDetails from './components/PropertyDetails';
import AnalysisChart from './components/AnalysisChart';
import './App.css';

function App() {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch('/api/properties');
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handlePropertyAdded = (newProperty) => {
    setProperties([newProperty, ...properties]);
    setSelectedProperty(newProperty);
  };

  const handleAnalyze = async (propertyId) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/analysis/${propertyId}`, {
        method: 'POST'
      });
      const data = await response.json();
      
      // Update the property in the list
      setProperties(properties.map(p => 
        p._id === propertyId ? data.property : p
      ));
      
      if (selectedProperty && selectedProperty._id === propertyId) {
        setSelectedProperty(data.property);
      }
    } catch (error) {
      console.error('Error analyzing property:', error);
      alert('Failed to analyze property. Please check your OpenAI API key.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (propertyId) => {
    if (!window.confirm('Are you sure you want to delete this property?')) {
      return;
    }

    try {
      await fetch(`/api/properties/${propertyId}`, {
        method: 'DELETE'
      });
      setProperties(properties.filter(p => p._id !== propertyId));
      if (selectedProperty && selectedProperty._id === propertyId) {
        setSelectedProperty(null);
      }
    } catch (error) {
      console.error('Error deleting property:', error);
      alert('Failed to delete property');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🏠 Real Estate Property Analysis</h1>
        <p>AI-Powered Market Insights & Comparative Analysis</p>
      </header>

      <main className="App-main">
        <div className="container">
          <div className="form-section">
            <PropertyForm onPropertyAdded={handlePropertyAdded} />
          </div>

          <div className="content-section">
            <div className="list-section">
              <PropertyList
                properties={properties}
                selectedProperty={selectedProperty}
                onSelectProperty={setSelectedProperty}
                onAnalyze={handleAnalyze}
                onDelete={handleDelete}
                loading={loading}
              />
            </div>

            <div className="details-section">
              <PropertyDetails property={selectedProperty} />
            </div>
          </div>

          <div className="chart-full-section">
            <AnalysisChart properties={properties} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

