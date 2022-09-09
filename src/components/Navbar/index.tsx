import { FC, useState } from 'react';
import { Button, Drawer, Image } from 'antd';
import { MenuOutlined, PieChartOutlined } from '@ant-design/icons';

import styles from '../Navbar/styles.module.scss';


const NavBar: FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__wrapbtnopen}>
        <Button type='primary' onClick={showDrawer} className={styles.navbar__btnopen} icon={<MenuOutlined />} />
      </div>

      <Drawer width={230} closable={false} placement='right' onClose={onClose} open={open}>
        <div className={styles.navbar__avatarwrap}>
          <div className={styles.navbar__avatarbg} />
          <Image
            width={80}
            src='https://avatars.dicebear.com/v2/avataaars/Glenna%20Reichert.svg?options[mood][]=happy'
            className={styles.navbar__avatar}
          />
        </div>

        <div className={styles.navbar__avatarname}>Nabil</div>
        <div className={styles.navbar__avatartitle}>Administrator</div>

        <Button onClick={onClose} className={styles.navbar__btnmenu} icon={<PieChartOutlined />}> All Data</Button>

      </Drawer>
    </nav>
  );

};

export default NavBar;
