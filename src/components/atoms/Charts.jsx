import { useEffect, useState } from 'react';

function MusicGenresChart() {
  const [genresData, setGenresData] = useState([]);

  useEffect(() => {
    let ws;
    const connectWebSocket = () => {
      ws = new WebSocket('ws://localhost:3005');

      ws.onopen = () => {
        console.log('WebSocket connected');
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setGenresData(data);
      };

      ws.onclose = () => {
        console.log('WebSocket connection closed. Reconnecting...');
        setTimeout(connectWebSocket, 3000);
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
        ws.close();
      };
    };

    connectWebSocket();

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const containerStyle = {
    maxWidth: '640px',
    margin: '0 auto',
    width: '100%'
  };

  return (
    <section className="w-full py-6 md:py-12 lg:py-16 bg-black dark:bg-gray-900">
      <div style={containerStyle}>
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Real-time Data
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Géneros Musicales Mas Escuchados
            </h1>
          </div>
          <div className="grid gap-4 min-h-[200px] grid-cols-2">
            {genresData.map((genre, index) => (
              <div key={index} className="flex flex-col gap-2">
                <p className="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400">
                  {genre.name}
                </p>
                <div
                  className="h-4 rounded-lg"
                  style={{ width: `${genre.popularity}%`, backgroundColor: genre.color, transition: 'width 2s ease-in-out' }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MusicGenresChart;
