const MainSection = () => {
    return (
        <main className="flex-1">
            <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y border-gray-700">
                <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
                    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                        <div>
                            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-neon">
                                Stream Your Favorite Music
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                                Discover and listen to your favorite songs, albums, and playlists from all around the world.
                            </p>
                        </div>
                        <div className="flex flex-col items-start space-y-4">
                            <img
                                alt="Music"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                height="310"
                                src="/placeholder.svg"
                                width="550"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainSection;
