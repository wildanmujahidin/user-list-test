import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu, Layout, Image } from 'antd';
import { bindActionCreators } from 'redux';

import styles from '../Sidebar/styles.module.scss';
import { actionCreators } from 'state';
import { IRootReducer } from 'state/reducers';


const { Sider } = Layout;

const getItem = (label: JSX.Element, key: string, icon: JSX.Element, children: string, type: string) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

const items = [
  getItem(<Link to={'/'}>All Data</Link>, 'all', <PieChartOutlined />, '', ''),
];

export const Sidebar: FC = () => {
  const dispatch = useDispatch();
  const isSideBarCloseData = useSelector((state: IRootReducer) => state.isSidebarClose);

  const { toggleSidebar } = bindActionCreators(actionCreators, dispatch);

  const toggleCollapsed = () => {
    toggleSidebar(!isSideBarCloseData);
  };

  return (
    <Sider
      breakpoint='lg'
      theme={'light'}
      className={styles.sidebar}
      collapsed={isSideBarCloseData}
    >
      <div >
        <Button
          type='primary'
          className={`${styles.sidebar__btn} ${isSideBarCloseData ? styles.sidebar__btnclose : styles.sidebar__btnopen}`}
          onClick={toggleCollapsed}
        >
          {isSideBarCloseData ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <div className={styles.sidebar__avatarwrap}>
          <Image
            width={isSideBarCloseData ? 50 : 120}
            src='https://avatars.dicebear.com/v2/avataaars/Glenna%20Reichert.svg?options[mood][]=happy'
            className={styles.sidebar__avatar}
          />
          <div className={`${styles.sidebar__avatarbg} ${isSideBarCloseData ? styles.sidebar__avatarbgclose : styles.sidebar__avatarbgopen}`} />
        </div>
        {!isSideBarCloseData && (
          <div className={styles.sidebar__avatardetail}>
            <div className={styles.sidebar__avatarname}>Nabil</div>
            <div className={styles.sidebar__avatartitle}>Administrator</div>
          </div>
        )}

        <Menu
          theme={'light'}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode='vertical'
          items={items}
        />
      </div>
    </Sider >
  );
};

export default Sidebar;
