import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon in Leaflet with Vite/Webpack
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Coordinates for Pratapgarh, UP (approximate center for the venue area)
const POSITION: [number, number] = [25.772722, 81.604191]; 

function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export const MapComponent = () => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden shadow-inner border border-stone-200 relative z-0">
      <MapContainer 
        center={POSITION} 
        zoom={13} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <ChangeView center={POSITION} zoom={13} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={POSITION}>
          <Popup>
            <div className="text-center">
              <span className="font-bold text-red-800">Wedding Venue</span><br />
              Devisharan Dwivedi<br />
              Balipur, Jagapur
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
