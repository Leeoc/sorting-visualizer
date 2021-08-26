import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="dark:bg-gray-700">
      <Navbar />
      <div className="flex items-center justify-center h-auto p-5">
        <SortingVisualizer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
