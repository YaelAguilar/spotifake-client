import { useState, useEffect, useRef, useCallback } from 'react';
import billieEilishImage from '../../assets/billie_eilish_happier_than_ever.jpg';
import smithereensImage from '../../assets/smithereens.jpg';
import ameriImage from '../../assets/duki_antes_de_ameri.jpg';
import loverImage from '../../assets/taylor_swift_lover.jpg';

const MainSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const images = [billieEilishImage, smithereensImage, loverImage, ameriImage];
    const slideRef = useRef();

    const handleSlide = useCallback((newIndex) => {
        setFade(true);
        setTimeout(() => {
            if (newIndex < 0) {
                setCurrentIndex(images.length - 1);
            } else if (newIndex >= images.length) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(newIndex);
            }
            setFade(false);
        }, 200);
    }, [images.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleSlide(currentIndex + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [currentIndex, images.length, handleSlide]);

    return (
        <main className="flex-1">
            <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y border-gray-700">
                <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                        <div>
                            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-neon">
                                Escucha tu música favorita
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                                Descubre y escucha tus canciones, álbumes y listas de reproducción favoritos de todo el mundo.
                            </p>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            {/* Carrusel */}
                            <div className="relative overflow-hidden" style={{ width: '500px', height: '500px' }}>
                                <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
                                    <button onClick={() => handleSlide(currentIndex - 1)} className="text-white">&#10094;</button>
                                    <button onClick={() => handleSlide(currentIndex + 1)} className="text-white">&#10095;</button>
                                </div>
                                <div ref={slideRef}>
                                    <img
                                        src={images[currentIndex]}
                                        alt={`Imagen ${currentIndex + 1}`}
                                        className={`object-cover rounded-xl transition-opacity ${fade ? 'opacity-0' : 'opacity-100'}`}
                                        style={{ width: '500px', height: '500px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainSection;
