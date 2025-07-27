import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  const authButton = isLoggedIn ? (
    <Button className="ml-4 bg-orange-500 hover:bg-red-600 text-white" onClick={handleLogout}>
      Déconnexion
    </Button>
  ) : (
    <Button className="ml-4 bg-medical-600 hover:bg-medical-700 text-white" asChild>
      <Link to="/login">Se Connecter</Link>
    </Button>
  );

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" onClick={scrollToTop} className="flex-shrink-0">
              <span className="text-2xl font-semibold text-medical-700">
                Retina<span className="text-teal-600">ML</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" onClick={scrollToTop} className="text-gray-700 hover:text-medical-600 px-3 py-2 rounded-md text-sm font-medium">Accueil</Link>
              <a href="/#educational" className="text-gray-700 hover:text-medical-600 px-3 py-2 rounded-md text-sm font-medium">Informations</a>
              <a href="/#upload" className="text-gray-700 hover:text-medical-600 px-3 py-2 rounded-md text-sm font-medium">Upload</a>
              <a href="/#webinars" className="text-gray-700 hover:text-medical-600 px-3 py-2 rounded-md text-sm font-medium">Webinaires</a>
              <a href="/#contact" className="text-gray-700 hover:text-medical-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <Link to="/about" className="text-gray-700 hover:text-medical-600 px-3 py-2 rounded-md text-sm font-medium">À propos</Link>
              {authButton}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-medical-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-medical-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <Menu className="block h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/" onClick={scrollToTop} className="block text-gray-700 hover:text-medical-600 px-3 py-2 rounded-md text-base font-medium">Accueil</Link>
            <a href="/#educational" className="block text-gray-700 hover:text-medical-600 px-3 py-2 rounded-md text-base font-medium">Informations</a>
            <a href="/#upload" className="block text-gray-700 hover:text-medical-600 px-3 py-2 rounded-md text-base font-medium">Upload</a>
            <a href="/#webinars" className="block text-gray-700 hover:text-medical-600 px-3 py-2 rounded-md text-base font-medium">Webinaires</a>
            <a href="/#contact" className="block text-gray-700 hover:text-medical-600 px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <Link to="/about" className="block text-gray-700 hover:text-medical-600 px-3 py-2 rounded-md text-base font-medium">À propos</Link>
            <div className="pt-4">
              {isLoggedIn ? (
                <Button className="w-full bg-orange-500 hover:bg-red-600 text-white" onClick={handleLogout}>
                  Déconnexion
                </Button>
              ) : (
                <Button className="w-full bg-medical-600 hover:bg-medical-700 text-white" asChild>
                  <Link to="/login">Se Connecter</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
