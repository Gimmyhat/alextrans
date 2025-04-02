import React from 'react';

const Map = () => {
  return (
    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A36c79ea0acfd14f6cd5c3c484fdd42bfbea1d331bcf75f62ee6b5e7b9432f4ff&amp;source=constructor"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        frameBorder="0"
        className="rounded-lg shadow-lg"
        title="География перевозок Алекс Транс"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;