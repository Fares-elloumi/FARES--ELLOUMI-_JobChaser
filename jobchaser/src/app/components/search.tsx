import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./../redux/store";
import { setSearchTerm } from "./../redux/slices/filterSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.filter.searchTerm);

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Sök jobb efter position..."
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
        <img src="/images/search.svg" alt="sök" className="search-icon" />
      </div>
    </div>
  );
}
