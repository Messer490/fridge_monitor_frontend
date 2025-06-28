'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
});

export default function MapPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Store Map</h1>
      <Map />
    </div>
  );
}
