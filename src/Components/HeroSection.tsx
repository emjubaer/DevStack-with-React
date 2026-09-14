import bannerImage from '../assets/banner-stack.png';

const HeroSection = () => {
    return (
        <div className="w-full bg-white mt-8">
            <section className="w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Left Side Text Content */}
                    <div className="flex flex-col text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            Build Your Ideal{' '}
                            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent block sm:inline">
                                Development Stack
                            </span>
                        </h1>

                        <p className="mt-4 text-sm sm:text-base md:text-md text-gray-600 max-w-xl mx-auto md:mx-0">
                            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-row items-center justify-center md:justify-start gap-4">
                            <a
                                href="#technologies"
                                className="btn btn-md border-none text-white bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 rounded-lg text-xs sm:text-sm font-medium px-5 capitalize"
                            >
                                Explore Technologies
                            </a>

                            <a
                                href="#learn-more"
                                className="btn btn-outline btn-md border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-lg text-xs sm:text-sm font-medium px-5 capitalize"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Right Side Image (Clean without shadows or background elements) */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={bannerImage}
                            alt="DevStack Illustration"
                            className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-full h-auto object-contain drop-shadow-none border-none outline-none"
                        />
                    </div>

                </div>
            </section>
        </div>
    );
};
export default HeroSection;