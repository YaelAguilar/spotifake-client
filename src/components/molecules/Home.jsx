import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
    const [lanzamientos, setLanzamientos] = useState([]);
    const [indiceActual, setIndiceActual] = useState(0);
    const [haObtenidoDatos, setHaObtenidoDatos] = useState(false);

    useEffect(() => {
        const obtenerLanzamientos = async () => {
            if (haObtenidoDatos) return;

            try {
                const respuesta = await fetch('http://localhost:3000/api/upcoming-releases');
                const datos = await respuesta.json();
                if (datos.length > 0) {
                    const proximoIndice = indiceActual % datos.length;
                    const proximoLanzamiento = {
                        ...datos[proximoIndice],
                        imageUrl: `http://localhost:3000/${datos[proximoIndice].imageUrl}`
                    };
                    setLanzamientos([proximoLanzamiento]);
                    setHaObtenidoDatos(true);
                }
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        obtenerLanzamientos();
    },);

    useEffect(() => {
        if (!haObtenidoDatos) return;

        const idIntervalo = setInterval(async () => {
            try {
                const respuesta = await fetch('http://localhost:3000/api/upcoming-releases');
                const datos = await respuesta.json();
                if (datos.length > 0) {
                    const proximoIndice = (indiceActual + 1) % datos.length;
                    const proximoLanzamiento = {
                        ...datos[proximoIndice],
                        imageUrl: `http://localhost:3000/${datos[proximoIndice].imageUrl}`
                    };
                    setLanzamientos(prev => prev.length < 3 ? [...prev, proximoLanzamiento] : [proximoLanzamiento, ...prev.slice(0, 2)]);
                    setIndiceActual(proximoIndice);
                }
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        }, 5000);

        return () => clearInterval(idIntervalo);
    }, [indiceActual, haObtenidoDatos]);

    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white flex justify-center items-center">
                <div className="text-center">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Acceso a Salas de Música</h2>
                        <p className="text-gray-400 md:text-xl lg:text-base xl:text-xl">
                            Sintoniza la banda sonora perfecta. Elige entre una variedad de salas de música curadas por nuestros expertos para que coincidan con tu estado de ánimo o preferencias.
                        </p>
                    </div>
                    <NavLink to="/musicroom">
                        <button className="text-white bg-purple-600 hover:bg-purple-700 font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            Escuchar Ahora
                        </button>
                    </NavLink>
                </div>
            </section>

            <section className="w-full border-t bg-gray-900 text-white pt-12 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16 lg:mb-20">
                        <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-white">
                            Próximos Lanzamientos
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Previsualiza los Éxitos</h2>
                        <p className="max-w-[600px] text-gray-400 md:text-xl lg:text-base xl:text-xl mb-8 md:mb-12">
                            Sé el primero en descubrir nueva música. Echa un vistazo a los próximos lanzamientos de tus artistas favoritos.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {lanzamientos.map((lanzamiento, indice) => (
                            <div key={indice} className="flex flex-col rounded-lg overflow-hidden border border-gray-700 bg-gray-800 shadow-lg transition-colors hover:shadow-2xl">
                                <div className="aspect-post overflow-hidden">
                                    <img src={lanzamiento.imageUrl} alt={`${lanzamiento.artist} - ${lanzamiento.single}`} className="object-cover w-full" style={{ height: '225px' }} />
                                </div>
                                <div className="p-4 flex-1">
                                    <h3 className="font-semibold text-lg">{lanzamiento.artist}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{lanzamiento.single}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
