import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <SortingVisualizer />

      </div>
      <Footer />
    </div>
  );
}

export default App;
