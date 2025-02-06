import { useState } from "react";

//import { Link } from "react-router-dom";
const Navbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <>
      <div className="bg-gray-800 w-auto h-15 flex justify-center ">
        <nav className=" ml-4 w-auto ">
          <ul className="m-4">
            <form onSubmit={handleSearch}>
              <input
                className="bg-gray-500 rounded-3xl p-1 "
                type="text"
                placeholder="Find your movie"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
          </ul>
        </nav>
        <a className=" align-middle mt-5 h-1 hover:text-gray-400" href="/">
          Home
        </a>
      </div>
    </>
  );
};

export default Navbar;
