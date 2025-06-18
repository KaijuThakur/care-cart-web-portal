
import { User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-blue-600">MediCare+</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Medicines</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Health Care</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Personal Care</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Baby Care</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <input
                type="text"
                placeholder="Search for medicines..."
                className="px-4 py-2 border border-gray-300 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
