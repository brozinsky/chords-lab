import { intervalDegrees } from "@/utils/notes";
import { chordFormulas } from "@/utils/data/chordFormulas";

function FormulaTable({ title, className = "", tbody }: any) {
  return (
    <>
      <h3 className="text-2xl font-medium mx-auto mb-4 text-center">{title}</h3>
      <table className={`max-w-[540px] mx-auto ${className}`}>
        <thead>
          <tr>
            <th>Chord Type</th>
            <th>Symbol</th>
            <th>Formula</th>
          </tr>
        </thead>
        <tbody>{tbody}</tbody>
      </table>
    </>
  );
}

export default function ChordFormulaModal() {
  const intervalRows = intervalDegrees.map(({ id, symbol, name }) => (
    <tr key={id}>
      <td>{symbol}</td>
      <td>{name}</td>
    </tr>
  ));
  const minorChordsRows = chordFormulas.minor.map(
    ({ type, symbol, formula }) => (
      <tr key={type}>
        <td>{type}</td>
        <td>{symbol}</td>
        <td>{formula}</td>
      </tr>
    )
  );
  const majorChordsRows = chordFormulas.major.map(
    ({ type, symbol, formula }) => (
      <tr key={type}>
        <td>{type}</td>
        <td>{symbol}</td>
        <td>{formula}</td>
      </tr>
    )
  );
  const dominantChordsRows = chordFormulas.dominant.map(
    ({ type, symbol, formula }) => (
      <tr key={type}>
        <td>{type}</td>
        <td>{symbol}</td>
        <td>{formula}</td>
      </tr>
    )
  );
  const miscChordsRows = chordFormulas.misc.map(({ type, symbol, formula }) => (
    <tr key={type}>
      <td>{type}</td>
      <td>{symbol}</td>
      <td>{formula}</td>
    </tr>
  ));

  const isLoading = minorChordsRows.length === 0 || intervalRows.length === 0;

  return (
    <>
      <h2 className="text-3xl font-medium mb-4 mx-auto text-center">
        Chord formulas
      </h2>
      <p className="text-center mb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor magni
        aliquid molestiae quo, consectetur nisi veritatis exercitationem
        suscipit, iste inventore, hic eligendi asperiores odio?
      </p>
      {isLoading ? null : (
        <>
          <FormulaTable
            title="Major"
            className="mb-8"
            tbody={majorChordsRows}
          />
          <FormulaTable
            title="Minor"
            className="mb-8"
            tbody={minorChordsRows}
          />
          <FormulaTable
            title="Dominant"
            className="mb-8"
            tbody={dominantChordsRows}
          />

          <FormulaTable title="Misc" className="mb-8" tbody={miscChordsRows} />
          <h3 className="text-2xl font-medium mx-auto mb-4 text-center">
            Notes symbols
          </h3>
          <table className="max-w-[540px] mx-auto">
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>{intervalRows}</tbody>
          </table>
        </>
      )}
    </>
  );
}
