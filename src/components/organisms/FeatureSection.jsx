import PropTypes from 'prop-types';

const FeatureSection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm text-neon">
                            Featured Playlists
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-neon">
                            Discover Weekly
                        </h2>
                        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Your weekly mixtape of fresh music. Enjoy new discoveries and deep cuts chosen just for you. Updated every Monday.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                    <FeatureItem
                        title="New Releases"
                        description="Stay updated with the latest hits."
                    />
                    <FeatureItem
                        title="Recommended Artists"
                        description="Explore artists based on your music taste."
                    />
                    {/* Agrega más FeatureItem aquí según sea necesario */}
                </div>
            </div>
        </section>
    );
};

const FeatureItem = ({ title, description }) => {
    return (
        <div className="grid gap-1">
            <h3 className="text-lg font-bold text-neon">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
        </div>
    );
};

FeatureItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default FeatureSection;
