const SearchParams = () => {
    const location = "Mandsaur, MP";
    return (
      <div className="search-params">
        <form>
          <label htmlFor="location">
            Location            
          </label>
          <input id="location" value={location} placeholder="Location" />
          <button>Submit</button>
        </form>
      </div>
    );
  };
  
  export default SearchParams;