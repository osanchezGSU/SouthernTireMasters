import { useEffect, useRef } from 'react';

function TireConnectWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Only load the script once
    const script = document.createElement('script');
    script.src = 'https://app.tireconnect.ca/js/widget.js';
    script.async = true;

    script.onload = () => {
      if (window.TCWidget && containerRef.current) {
        window.TCWidget.init({
          apikey: '632e72da8e51589fc7816a223e6cf565',
          container: 'tireconnect',
        });
      }
    };

    document.body.appendChild(script);

    // Optional: cleanup if component is removed
    return () => {
      const existing = document.getElementById('tireconnect');
      if (existing) existing.innerHTML = '';
    };
  }, []);

  return <div id="tireconnect" ref={containerRef} className='tireconnect'></div>;
}

export default TireConnectWidget;
