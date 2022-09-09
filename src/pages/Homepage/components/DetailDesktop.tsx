import { FC } from 'react';
import { Col, Row, Button, Image } from 'antd';
import { isEmpty } from 'lodash';
import {
  MailOutlined, PhoneOutlined, PushpinOutlined, LaptopOutlined,
} from '@ant-design/icons';

import styles from '../styles.module.scss';

export interface IDetailDesktop {
  handleFavorite: (param: any, e: any) => void,
  favorite: number[],
  detailData: {
    avatar: string,
    name: string,
    id: number,
    website: string,
    phone: string,
    email: string,
    address: {
      street: string
    }
  }
}

export const DetailDesktop: FC<IDetailDesktop> = ({ detailData, handleFavorite, favorite }) => {
  return (
    <div className={styles.homepage__detaildesktop}>
      <div className={styles.homepage__detailitem}>
        <div className={styles.homepage__avatarbg} />
        <Row align="middle" className={styles.homepage__detailwrap}>
          <Col lg={12} md={24}>
            <Image src={detailData.avatar} alt={detailData.name} className={styles.homepage__detailavatar} />
          </Col>
          <Col lg={12} md={24}>
            <div className={styles.homepage__detailtextwrap}>
              <div className={styles.homepage__detailname}>
                {detailData.name}
              </div>
              <div>
                <LaptopOutlined className={styles.homepage__detailicon} />  {detailData.website}
              </div>
              <div>
                <PhoneOutlined className={styles.homepage__detailicon} />  {detailData.phone}
              </div>
              <div>
                <MailOutlined className={styles.homepage__detailicon} /> {detailData.email}
              </div>
              <div>
                <PushpinOutlined className={styles.homepage__detailicon} />  {detailData.address.street}
              </div>
              {
                !isEmpty(favorite) && favorite.includes(detailData.id) ?
                  <Button onClick={() => handleFavorite('remove', detailData.id)} className={`${styles.homepage__detailbtnfavorite} ${styles.homepage__detailbtnremove}`}>Remove from Favorite</Button> :
                  <Button onClick={() => handleFavorite('add', detailData.id)} className={`${styles.homepage__detailbtnfavorite} ${styles.homepage__detailbtnadd}`}>Add to Favorite</Button>
              }
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DetailDesktop;
