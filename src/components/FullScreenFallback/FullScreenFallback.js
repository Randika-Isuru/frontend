import React, { useState, useEffect } from 'react';
import LoadingBox from "../LoadingBox";

function FullScreenFallback({ timeout = 1000 }) {
  const [displayLoader, setDisplayLoader] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setDisplayLoader(true), timeout);
    return () => clearTimeout(id);
  }, [timeout]);

  return displayLoader ? <LoadingBox />: null;
}

export default FullScreenFallback;
