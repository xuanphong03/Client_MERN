import React from "react";
import { publicRoutes } from "./routes";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.element;

            return (
              <Route
                key={index}
                path={route.to}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
