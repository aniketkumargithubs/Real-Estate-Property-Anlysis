import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  Cell
} from 'recharts';
import './AnalysisChart.css';

const AnalysisChart = ({ properties }) => {
  const [comparativeData, setComparativeData] = useState([]);
  const [chartType, setChartType] = useState('comparative');

  useEffect(() => {
    fetchComparativeData();
  }, [properties]);

  const fetchComparativeData = async () => {
    try {
      const response = await fetch('/api/analysis/comparative');
      const data = await response.json();
      setComparativeData(data);
    } catch (error) {
      console.error('Error fetching comparative data:', error);
    }
  };

  const priceComparisonData = comparativeData.map(prop => ({
    location: prop.location.length > 15 ? prop.location.substring(0, 15) + '...' : prop.location,
    'Listed Price': prop.listedPrice,
    'Market Value': prop.marketValue,
    'Recommended': prop.recommendedPrice
  }));

  const pricePerSqFtData = comparativeData.map(prop => ({
    location: prop.location.length > 15 ? prop.location.substring(0, 15) + '...' : prop.location,
    'Listed $/sqft': prop.pricePerSqFt,
    'Market $/sqft': prop.marketPricePerSqFt
  }));

  const adjustmentData = comparativeData.map(prop => ({
    location: prop.location.length > 15 ? prop.location.substring(0, 15) + '...' : prop.location,
    'Price Adjustment (%)': prop.priceAdjustment
  }));

  if (comparativeData.length === 0) {
    return (
      <div className="analysis-chart">
        <h2>Comparative Market Analysis</h2>
        <div className="empty-chart">
          <p>No analyzed properties yet.</p>
          <p className="hint">Add properties and click "Analyze with AI" to see comparative charts.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="analysis-chart">
      <h2>Comparative Market Analysis</h2>
      
      <div className="chart-controls">
        <button
          className={chartType === 'comparative' ? 'active' : ''}
          onClick={() => setChartType('comparative')}
        >
          Price Comparison
        </button>
        <button
          className={chartType === 'sqft' ? 'active' : ''}
          onClick={() => setChartType('sqft')}
        >
          Price per Sqft
        </button>
        <button
          className={chartType === 'adjustment' ? 'active' : ''}
          onClick={() => setChartType('adjustment')}
        >
          Price Adjustment
        </button>
      </div>

      <div className="chart-container">
        {chartType === 'comparative' && (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={priceComparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="location" 
                angle={-45} 
                textAnchor="end" 
                height={100}
                interval={0}
              />
              <YAxis 
                label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                formatter={(value) => `$${value.toLocaleString()}`}
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="Listed Price" fill="#8884d8" />
              <Bar dataKey="Market Value" fill="#82ca9d" />
              <Bar dataKey="Recommended" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        )}

        {chartType === 'sqft' && (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={pricePerSqFtData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="location" 
                angle={-45} 
                textAnchor="end" 
                height={100}
                interval={0}
              />
              <YAxis 
                label={{ value: 'Price per Sqft ($)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                formatter={(value) => `$${value.toFixed(2)}`}
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px' }}
              />
              <Legend />
              <Line type="monotone" dataKey="Listed $/sqft" stroke="#8884d8" strokeWidth={3} />
              <Line type="monotone" dataKey="Market $/sqft" stroke="#82ca9d" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        )}

        {chartType === 'adjustment' && (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={adjustmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="location" 
                angle={-45} 
                textAnchor="end" 
                height={100}
                interval={0}
              />
              <YAxis 
                label={{ value: 'Adjustment (%)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                formatter={(value) => `${value > 0 ? '+' : ''}${value.toFixed(1)}%`}
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px' }}
              />
              <Legend />
              <Bar dataKey="Price Adjustment (%)">
                {adjustmentData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={entry['Price Adjustment (%)'] >= 0 ? '#82ca9d' : '#ef4444'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="chart-summary">
        <div className="summary-item">
          <span className="summary-label">Total Properties:</span>
          <span className="summary-value">{comparativeData.length}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Avg Market Value:</span>
          <span className="summary-value">
            ${(comparativeData.reduce((sum, p) => sum + p.marketValue, 0) / comparativeData.length).toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Avg Adjustment:</span>
          <span className="summary-value">
            {(comparativeData.reduce((sum, p) => sum + p.priceAdjustment, 0) / comparativeData.length).toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default AnalysisChart;

