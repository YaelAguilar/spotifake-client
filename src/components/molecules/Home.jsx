import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
    const [releases, setReleases] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasFetched, setHasFetched] = useState(false);

    useEffect(() => {
        const fetchReleases = async () => {
            if (hasFetched) return;

            try {
                const response = await fetch('http://localhost:3000/api/upcoming-releases');
                const data = await response.json();
                if (data.length > 0) {
                    const nextIndex = currentIndex % data.length;
                    const nextRelease = {
                        ...data[nextIndex],
                        imageUrl: `http://localhost:3000/${data[nextIndex].imageUrl}`
                    };
                    setReleases([nextRelease]);
                    setHasFetched(true);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchReleases();
    },);

    useEffect(() => {
        if (!hasFetched) return;

        const intervalId = setInterval(async () => {
            try {
                const response = await fetch('http://localhost:3000/api/upcoming-releases');
                const data = await response.json();
                if (data.length > 0) {
                    const nextIndex = (currentIndex + 1) % data.length;
                    const nextRelease = {
                        ...data[nextIndex],
                        imageUrl: `http://localhost:3000/${data[nextIndex].imageUrl}`
                    };
                    setReleases(prev => prev.length < 3 ? [...prev, nextRelease] : [nextRelease, ...prev.slice(0, 2)]);
                    setCurrentIndex(nextIndex);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentIndex, hasFetched]);

    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white flex justify-center items-center">
                <div className="text-center">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Music Rooms Access</h2>
                        <p className="text-gray-400 md:text-xl lg:text-base xl:text-xl">
                            Tune in to the perfect soundtrack. Choose from a variety of music rooms curated by our experts to match your mood or preferences.
                        </p>
                    </div>
                    <NavLink to="/musicroom">
                        <button className="text-white bg-blue-600 hover:bg-blue-800 font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            Listen Now
                        </button>
                    </NavLink>
                </div>
            </section>

            <section className="w-full border-t bg-gray-900 text-white pt-12 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-40">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16 lg:mb-20">
                        <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-white">
                            Upcoming Releases
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Preview the Hits</h2>
                        <p className="max-w-[600px] text-gray-400 md:text-xl lg:text-base xl:text-xl mb-8 md:mb-12">
                            Be the first to discover new music. Check out the upcoming releases from your favorite artists.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {releases.map((release, index) => (
                            <div key={index} className="flex flex-col rounded-lg overflow-hidden border border-gray-700 bg-gray-800 shadow-lg transition-colors hover:shadow-2xl">
                                <div className="aspect-post overflow-hidden">
                                    <img src={release.imageUrl} alt={`${release.artist} - ${release.single}`} className="object-cover w-full" style={{ height: '225px' }} />
                                </div>
                                <div className="p-4 flex-1">
                                    <h3 className="font-semibold text-lg">{release.artist}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{release.single}</p>
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
