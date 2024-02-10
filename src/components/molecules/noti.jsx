import { useEffect, useState, useCallback } from 'react';

function Noti() {
    const [release, setRelease] = useState(null);

    const fetchLatestRelease = useCallback(() => {
        fetch('http://localhost:3000/api/releases/next')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('New release:', data);
                setRelease(data);
            })
            .catch(error => {
                console.error('Error fetching next release:', error);
            });
    }, []);

    useEffect(() => {
        fetchLatestRelease();
    }, [fetchLatestRelease]);

    if (!release) return null;

    return (
        <div className="fixed top-5 right-5 max-w-sm w-full bg-gray-800 bg-opacity-75 text-white p-4 rounded-lg shadow-lg z-50">
            <h2 className="text-lg font-bold">¡Alerta de Nuevo Lanzamiento!</h2>
            <div className="mt-2">
                <p>Artista: {release.artist}</p>
                <p>Canción: {release.single}</p>
            </div>
            <button onClick={() => setRelease(null)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Cerrar Alerta
            </button>
        </div>
    );
}

export default Noti;
