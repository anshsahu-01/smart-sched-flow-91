import { useState, createContext, useContext } from "react";
import HomePage from "@/components/HomePage";
import LoginPage from "@/components/LoginPage";
import Dashboard from "@/components/Dashboard";

// Navigation context
type NavigationContextType = {
  currentPage: string;
  navigateTo: (page: string) => void;
};

const NavigationContext = createContext<NavigationContextType>({
  currentPage: "home",
  navigateTo: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

const Index = () => {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const navigateTo = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <LoginPage />;
      case "dashboard":
        return <Dashboard />;
      default:
        return <HomePage />;
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      <div>
        {renderPage()}
      </div>
    </NavigationContext.Provider>
  );
};

export default Index;
