import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";

import Navigation from "./components/Navigation";

export default function routes() {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
