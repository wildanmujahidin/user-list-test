import { FC } from 'react';
import { isEmpty } from 'lodash';
import {
  MailOutlined, PhoneOutlined, PushpinOutlined, LaptopOutlined,
} from '@ant-design/icons';

import styles from '../styles.module.scss';

export interface IDetailMobile {
  detailData: {
    website: string,
    phone: string,
    email: string,
    address: {
      street: string
    }
  }
}

export const DetailMobile: FC<IDetailMobile> = ({ detailData }) => {
  return (
    <div className={styles.homepage__detailmobile}>
      {!isEmpty(detailData) &&
        <div className={styles.homepage__detail}>
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
        </div>
      }
    </div>
  );
};

export default DetailMobile;
