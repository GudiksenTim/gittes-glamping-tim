import { useEffect, useState } from "react";
import { useRoutes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Stays from "./pages/Stays";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import StayDetails from "./pages/stayDetails/StayDetails";
import Contact from "./pages/Contact";
import Activities from "./pages/activities";
import Likes from "./pages/Likes";

function App() {
  const [activities, setActivities] = useState([]);

  // Hent aktiviteter fra API + load liked-status fra localStorage
  const fetchActivities = async () => {
    try {
      const response = await fetch(
        "https://glamping-rqu9j.ondigitalocean.app/activities"
      );
      const data = await response.json();

      const stored = JSON.parse(localStorage.getItem("likes")) || [];

      const formatted = (data.data || []).map((card) => {
        const likedStored = stored.find((a) => a._id === card._id);
        return {
          ...card,
          liked: likedStored ? likedStored.liked : false,
        };
      });

      setActivities(formatted);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  // Toggle liked status
  const toggleLike = (id) => {
    setActivities((prev) => {
      const updated = prev.map((activity) =>
        activity._id === id ? { ...activity, liked: !activity.liked } : activity
      );

      // Gem kun _id + liked i localStorage
      const likesToStore = updated.map((a) => ({ _id: a._id, liked: a.liked }));
      localStorage.setItem("likes", JSON.stringify(likesToStore));

      return updated;
    });
  };

  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/stays", element: <Stays /> },
    { path: "/stays/:id", element: <StayDetails /> },
    { path: "/contact", element: <Contact /> },
    {
      path: "/activities",
      element: <Activities activities={activities} toggleLike={toggleLike} />,
    },
    {
      path: "/likes",
      element: <Likes activities={activities} toggleLike={toggleLike} />,
    },
  ]);

  return (
    <div className="app">
      <Navigation />
      <main>{routes}</main>
      <Footer />
    </div>
  );
}

export default App;
