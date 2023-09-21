import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Tags from "./Tags";
import Listing from "./Listing";
import ListingScale from "./ListingScale";
import ListingChords from "./ListingChords";

const Library = () => {
  return (
    <div className="container">
      <div className="library-panel library-panel--chord">
        <Filter />
        <div className="flex flex-col gap-4">
          <Tags />
          <ListingChords />
          {/* <Listing /> */}
        </div>
      </div>
    </div>
  );
};

export default Library;
