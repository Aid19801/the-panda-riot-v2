import React from 'react';
import dynamic from 'next/dynamic';
import './styles.css';

const DynamicMapWithNoSSR = dynamic((props) => import('./map'), {
  ssr: false
});

const MapBoxContainer = () => (
  <div className="map__dynamic-no-ssr">
    <DynamicMapWithNoSSR />
  </div>
);

export default MapBoxContainer;

