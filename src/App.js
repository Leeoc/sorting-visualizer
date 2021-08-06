import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <SortingVisualizer />

      </div>
    </div>
  );
}

export default App;
