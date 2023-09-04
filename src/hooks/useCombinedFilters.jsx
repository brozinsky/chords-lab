import { useState, useEffect } from "react";

function useCombinedFilters(filteredLists) {
  const [combinedResults, setCombinedResults] = useState([]);

  useEffect(() => {
    const filterKeys = Object.keys(filteredLists);

    // Check if there are no filters, return an empty array
    if (filterKeys.length === 0) {
      setCombinedResults([]);
      return;
    }

    // Start with the first filtered list as the initial combined result
    const initialCombinedResult = filteredLists[filterKeys[0]];

    // Use reduce to find the intersection of all filtered lists
    const calculatedCombinedResult = filterKeys
      .slice(1)
      .reduce((result, key) => {
        return result.filter((item) => filteredLists[key].includes(item));
      }, initialCombinedResult);

    setCombinedResults(calculatedCombinedResult);
  }, [filteredLists]);

  return combinedResults;
}

export default useCombinedFilters;
