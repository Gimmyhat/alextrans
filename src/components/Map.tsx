import React from 'react';

const Map = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">География перевозок</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aexample&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
            className="rounded-lg shadow-lg"
            title="География перевозок"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;