import React from 'react';
import FullScreenFallback from "./FullScreenFallback/FullScreenFallback";

export const AppSuspense = props => (
  <React.Suspense fallback={<FullScreenFallback />} {...props} />
);
