import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Tags from "./Tags";
import Listing from "./Listing";
import ListingScale from "./ListingScale";

const LibraryScale = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-4">
        <ListingScale />
      </div>
    </div>
  );
};

export default LibraryScale;
