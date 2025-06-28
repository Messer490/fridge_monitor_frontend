'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Map() {
  return (
    <div className="w-full h-[600px]">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
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
