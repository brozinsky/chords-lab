import ListingChords from "./ListingChords";
import ListingScales from "./ListingScales";

interface Props {
  variant: "chords" | "scales";
  tabs: "all" | "roman" | "notes";
}

const Library = ({ variant = "chords", tabs = "all" }: Props) => {
  return (
    <div className="container">
      {/* <div className="library-panel library-panel--chord"> */}
      {/* <Filter /> */}
      <div className="flex flex-col gap-4">
        {/* <Tags /> */}
        {variant === "chords" ? <ListingChords /> : <ListingScales />}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Library;
