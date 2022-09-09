import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import 'styles/global.module.scss';

import Home from 'pages/Homepage';
import Layout from 'components/Layout';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;