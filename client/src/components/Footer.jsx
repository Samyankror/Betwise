const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} BetWise. All rights reserved.</p>
            <div className="space-x-4 mt-2 md:mt-0">
                <a href="/privacy" className="hover:underline text-gray-400">Privacy</a>
                <a href="/terms" className="hover:underline text-gray-400">Terms</a>
                <a href="/support" className="hover:underline text-gray-400">Support</a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
