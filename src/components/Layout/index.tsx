import { FC } from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';

import { IRootReducer } from 'state/reducers';
import Sidebar from 'components/Sidebar';
import NavBar from 'components/Navbar';
import styles from './styles.module.scss';

import { ILayout } from '../../../types';

export const LayoutCustom: FC<ILayout> = ({ children }) => {
  const isSideBarCloseData = useSelector((state: IRootReducer) => state.isSidebarClose);

  return (
    <>
      <NavBar />
      <Layout hasSider className={`${isSideBarCloseData ? styles.layout__sidebarclose : styles.layout__sidebaropen} ${styles.layout}`}>
        <Sidebar />
        <main>{children}</main>
      </Layout>
    </>
  );
};

export default LayoutCustom;