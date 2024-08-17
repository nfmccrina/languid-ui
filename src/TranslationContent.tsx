import { FunctionComponent, useEffect, useRef } from 'react';
import Paper from '@mui/material/Paper';
import useWebSocket from './hooks/useWebSocket';

const TranslationContent: FunctionComponent<{}> = (_: {}) => {
  const translations = useWebSocket();

  const endOfItemsRef = useRef<null | HTMLDivElement>(null);

  const translationItems = translations.map((t) => (
    <Paper key={t[0]} className="text-container" elevation={6}>
      {t[1]}
    </Paper>
  ));

  useEffect(() => {
    endOfItemsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [translations]);
  return (
    <>
      {translationItems}
      <div ref={endOfItemsRef} />
    </>
  );
};

export default TranslationContent;
