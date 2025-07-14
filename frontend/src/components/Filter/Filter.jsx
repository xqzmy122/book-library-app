import {
  setTitleFilter,
  selectFilterTitle,
  resetFilter,
} from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";

function Filter() {
  const dispatch = useDispatch();
  const titleValue = useSelector(selectFilterTitle);

  function handleTitleFilterChange(e) {
    dispatch(setTitleFilter(e.target.value));
  }

  function handleResetFilter() {
    dispatch(resetFilter());
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by title..."
            value={titleValue}
            onChange={(e) => handleTitleFilterChange(e)}
          />
        </div>
        <button type="button" onClick={handleResetFilter}>Reset filters</button>
      </div>
    </div>
  );
}

export default Filter;
