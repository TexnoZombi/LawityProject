import React from 'react';

const YandexMapsReviews = () => {
  return (
    <div className="w-screen h-[895px] md:h-[720px] overflow-hidden relative">
      <div className="flex justify-center w-full h-[400px] md:h-[600px] lg:h-[800px]">
      <iframe 
        style={{
          width: '100vh',
          height: '100vh',
          borderRadius: '8px',
          boxSizing: 'border-box'
        }} 
        src="https://yandex.ru/maps-reviews-widget/219698325861?comments"
        title="Yandex Maps Reviews"
      />
      </div>
      <a 
        href="https://yandex.ru/maps/org/laviti/219698325861/" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          boxSizing: 'border-box',
          textDecoration: 'none',
          color: '#b3b3b3',
          fontSize: '10px',
          fontFamily: 'YS Text, sans-serif',
          padding: '0 20px',
          position: 'absolute',
          bottom: '8px',
          width: '100%',
          textAlign: 'center',
          left: '0',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: 'block',
          maxHeight: '14px',
          whiteSpace: 'nowrap',
          padding: '0 16px',
          boxSizing: 'border-box'
        }}
      >
        Лавити на карте Жуковского — Яндекс Карты
      </a>
    </div>
  );
};

export default YandexMapsReviews;