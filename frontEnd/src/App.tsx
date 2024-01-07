import "./index.css";
import { RoutesMain } from "./routes/routes";
import { ContactProvider } from "./providers/ContactContext/ContactContext";


function App() {
  return (
    <div className="w-full overflow-hidden mx-auto relative bg-background">
        <ContactProvider>
          <main className="">
            <RoutesMain />
          </main>
        </ContactProvider>
    </div>
  );
};

export default App;
