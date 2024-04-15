import { useParams } from 'react-router-dom';

function useChordParams() {
  let { id } = useParams();
  const [rootPart, ...typeParts] = id?.split('-') || [];
  const type = typeParts.join(' ');

  const root = rootPart?.replace('s', '#').toUpperCase();

  return { root, type };
}

export default useChordParams;
