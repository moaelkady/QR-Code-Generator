import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loading/loading.component";

const Home = React.lazy(() => import("./routes/home/home.component"));

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
