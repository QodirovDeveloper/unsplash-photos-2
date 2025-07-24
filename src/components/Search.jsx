// src/components/Search.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../features/searchSlice";

function Search() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(setQuery(input.trim()));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2">
      <input
        type="text"
        className="input input-bordered w-full"
        placeholder="Search images..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
}

export default Search;
