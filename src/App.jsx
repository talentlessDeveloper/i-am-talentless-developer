import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import EntranceLoader from "./components/EntranceLoader";
import Home from "./components/Home";

function App() {
  const [loadEntrance, setLoadEntrance] = useState(true);
  return (
    <AnimatePresence mode='wait'>
      <div className='App bg-zinc-900 text-zinc-600 min-h-screen'>
        {loadEntrance ? (
          <EntranceLoader setLoadEntrance={setLoadEntrance} />
        ) : (
          <Home />
        )}
      </div>
    </AnimatePresence>
  );
}

export default App;
