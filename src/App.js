import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./routes/HomePage";
import AboutPage from "./routes/AboutPage";
import TrainersPage from "./routes/TrainersPage";
import TrainingsPage from "./routes/TrainingsPage";
import ForumsPage from "./routes/ForumsPage";
import NewsPage from "./routes/NewsPage";
import ContactPage from "./routes/ContactPage";
import "./scss/app.scss";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/trainings" element={<TrainingsPage />} />
      <Route path="/trainers" element={<TrainersPage />} />
      <Route path="/forums" element={<ForumsPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
