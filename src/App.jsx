import { useState } from "react";
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import PageNav from "./PageNav";

function App() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <h1 className="flex text-4xl text-gray-900 m-5 w-auto justify-center ">
        ReelQuest
      </h1>
      <div className="flex mt-4 ml-4 mr-4 w-auto h-auto flex-wrap justify-center ">
        <MovieList page={page} searchQuery={searchQuery} />
      </div>
      <PageNav page={page} setPage={setPage} />
    </>
  );
}

export default App;
