import { Routes, Route } from "react-router-dom";

import TopRated from "./pages/TopRated";
import Popular from "./pages/Popular";
import NowPlaying from "./pages/NowPlaying";
import Upcoming from "./pages/Upcoming";
import MovieDetails from "./pages/MovieDetails";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TopRated />} />
        <Route path="popular" element={<Popular />}/>
        <Route path="now-playing" element={<NowPlaying />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="movie/:movieId" element={<MovieDetails />} / >
        <Route path="/:page/movie/:movieId" element={<MovieDetails />} / >
      </Routes>
    </Layout>
  );
}

export default App;
