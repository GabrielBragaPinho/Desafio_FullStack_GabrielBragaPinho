import "./index.css";
import { RoutesMain } from "./routes/routes.tsx";


function App() {
  return (
    <div className="w-full mx-auto relative bg-background">
        <main className="">
          <RoutesMain />
        </main>
    </div>
  );
};

export default App;
