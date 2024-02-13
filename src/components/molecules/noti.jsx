import { useEffect, useState } from 'react';

function Noti() {
  const [release, setRelease] = useState(null);

  useEffect(() => {
    const fetchLatestRelease = () => {
      fetch('http://localhost:3000/api/releases/next')
        .then(response => {
          if (!response.ok && response.status !== 204) {
            throw new Error(`Network response was not ok, status: ${response.status}`);
          }
          return response.status === 204 ? null : response.json();
        })
        .then(data => {
          if (data) {
            console.log('Received data from server:', data);
            setRelease(data);
          }
          setTimeout(fetchLatestRelease, 5000); // Siempre reinicia el long polling.
        })
        .catch(error => {
          console.error('Error fetching next release:', error);
          setTimeout(fetchLatestRelease, 10000);
        });
    };

    fetchLatestRelease();
  }, []);

  if (!release) return null;

  return (
    <div className="fixed bottom-5 right-5 max-w-sm w-full bg-gray-800 bg-opacity-75 text-white p-4 rounded-lg shadow-lg z-50">
      <h2 className="text-lg font-bold">¡Alerta de Nuevo Lanzamiento!</h2>
      <div className="mt-2">
        <p>Artista: {release.artist}</p>
        <p>Canción: {release.single}</p>
      </div>
      <button onClick={() => setRelease(null)} className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Cerrar Alerta
      </button>
    </div>
  );
}

export default Noti;
