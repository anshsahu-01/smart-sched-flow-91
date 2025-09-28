import { useState, createContext, useContext } from "react";
import HomePage from "@/components/HomePage";
import LoginPage from "@/components/LoginPage";
import Dashboard from "@/components/Dashboard";
import TimetableGenerator from "@/components/TimetableGenerator";
import AddDataPage from "@/components/AddDataPage";
import ReviewPage from "@/components/ReviewPage";
import ApprovalsPage from "@/components/ApprovalsPage";
import AnalyticsPage from "@/components/AnalyticsPage";
import SettingsPage from "@/components/SettingsPage";

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
      case "timetable-generator":
        return <TimetableGenerator />;
      case "add-data":
        return <AddDataPage />;
      case "review":
        return <ReviewPage />;
      case "approvals":
        return <ApprovalsPage />;
      case "analytics":
        return <AnalyticsPage />;
      case "settings":
        return <SettingsPage />;
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
