import ListingChords from "./ListingChords";
import ListingScales from "./ListingScales";

type TProps = {
  variant: "chords" | "scales";
}

const Library = ({ variant = "chords" }: TProps) => {
  return (
    <div id="Library" className="container relative">
      {/* <div className="library-panel library-panel--chord"> */}
      {/* <Filter /> */}
      <div className="flex flex-col gap-4">
        {/* <Tags /> */}
        {variant === "chords" && <ListingChords />}
        {variant === "scales" && <ListingScales />}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Library;
