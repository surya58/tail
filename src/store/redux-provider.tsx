'use client';

import * as React from 'react';
import { store } from '.';
import { Provider } from 'react-redux';

export default function ReduxProvider({children}: {children: React.ReactNode}): React.JSX.Element {
  return <Provider store={store}>{children}</Provider>
}