import {
  setTitleFilter,
  setAuthorFilter,
  toggleOnlyFavorites,
  selectFilterTitle,
  selectFilterAuthor,
  selectFilterOnlyFavorites,
  resetFilter,
} from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Filter.css";

function Filter() {
  const dispatch = useDispatch();
  const titleValue = useSelector(selectFilterTitle);
  const authorValue = useSelector(selectFilterAuthor)
  const onlyFavorites = useSelector(selectFilterOnlyFavorites)

  function handleTitleFilterChange(e) {
    dispatch(setTitleFilter(e.target.value));
  }

  function handleAuthorFilterChange(e) {
    dispatch(setAuthorFilter(e.target.value))
  }

  function handleToggleOnlyFavorites() {
    dispatch(toggleOnlyFavorites())
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
        <div className="filter-group">
          <input type="text" placeholder="Filter by author..." value={authorValue} onChange={e => handleAuthorFilterChange(e)}/>  
        </div>
        <div className="filter-group">
          <label>
            <input type="checkbox" checked={onlyFavorites} onChange={handleToggleOnlyFavorites}/>
            Only favorites
          </label>
        </div>
        <button type="button" onClick={handleResetFilter}>Reset filters</button>
      </div>
    </div>
  );
}

export default Filter;
