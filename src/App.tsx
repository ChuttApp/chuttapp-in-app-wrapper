import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom'

import { MainApp } from './navigations/MainApp';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
     <Router basename='/'>
       <MainApp />
     </Router>
     </QueryClientProvider>
  );
}

export default App;
