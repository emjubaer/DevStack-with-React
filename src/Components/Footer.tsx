import logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="w-full bg-white text-gray-600 text-sm py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
            <div className="max-w-[1300px] mx-auto">

                {/* Main section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 text-center md:text-left">

                    {/* Brand info & socials */}
                    <div className="md:col-span-6 flex flex-col items-center md:items-start space-y-4">
                        <a href="#">
                            <img
                                src={logo}
                                alt="DevStack Logo"
                                className="h-9 md:h-10 w-auto object-contain"
                            />
                        </a>

                        <p className="text-gray-500 max-w-sm leading-relaxed">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>

                        <div className="flex items-center space-x-3 text-gray-700 font-medium pt-2">
                            <a href="#github" className="hover:text-gray-900 transition-colors">
                                GitHub
                            </a>
                            <span className="inline-block md:hidden text-gray-400">•</span>
                            <a href="#twitter" className="hover:text-gray-900 transition-colors">
                                Twitter
                            </a>
                            <span className="inline-block md:hidden text-gray-400">•</span>
                            <a href="#linkedin" className="hover:text-gray-900 transition-colors">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Links for desktop */}
                    <div className="hidden md:grid md:col-span-6 grid-cols-3 gap-6">
                        <div>
                            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-900 mb-4">
                                Product
                            </h3>
                            <ul className="space-y-2.5 text-gray-500">
                                <li><a href="#home" className="hover:text-gray-800">Home</a></li>
                                <li><a href="#technologies" className="hover:text-gray-800">Technologies</a></li>
                                <li><a href="#projects" className="hover:text-gray-800">Projects</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-900 mb-4">
                                Company
                            </h3>
                            <ul className="space-y-2.5 text-gray-500">
                                <li><a href="#about" className="hover:text-gray-800">About</a></li>
                                <li><a href="#contact" className="hover:text-gray-800">Contact</a></li>
                                <li><a href="#careers" className="hover:text-gray-800">Careers</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-xs uppercase tracking-wider text-gray-900 mb-4">
                                Legal
                            </h3>
                            <ul className="space-y-2.5 text-gray-500">
                                <li><a href="#privacy" className="hover:text-gray-800">Privacy Policy</a></li>
                                <li><a href="#terms" className="hover:text-gray-800">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Bottom copyright bar */}
                <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#privacy" className="hover:text-gray-600">Privacy</a>
                        <a href="#terms" className="hover:text-gray-600">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};
export default Footer;