import { useRoutes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Stays from "./pages/Stays";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import StayDetails from "./pages/stayDetails/StayDetails";
import Contact from "./pages/Contact"


// Parent/forældre komponent - Den 'hoved'-komponent der styrer visninger af andre komponenter
function App() {
  /* Vha react-router definerer vi hvilke komponenter der hører til hvilke paths */
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/stays", element: <Stays /> },
    { path: "/stays/:id", element: <StayDetails />},
    { path: "/contact", element: <Contact />}
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
