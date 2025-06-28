'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Store Map</h1>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '600px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>Example Store</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
