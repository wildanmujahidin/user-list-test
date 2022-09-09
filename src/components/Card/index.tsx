import { FC } from 'react';
import { Col, Row, Button, Image } from 'antd';
import {
  HeartOutlined,
  HeartFilled,
} from '@ant-design/icons';

import { ICard } from '../../../types';
import styles from '../Card/styles.module.scss';

export const Card: FC<ICard> = ({ name, pic, company, handleToggle, favorite, id, username, onClick }) => {
  return (
    <div className={styles.card}>
      <div onClick={onClick}>
        <Row gutter={[16, 16]}>
          <Col lg={5} xs={12}>
            <div className={styles.card__wrapimg}>
              <Image src={pic} className={styles.card__img} alt={name} preview={false} />
              <div className={styles.card__imgbg} />
            </div>
          </Col>
          <Col lg={15} xs={12} className={styles.card__detail}>
            <div>
              <div className={styles.card__username}>
                {username}
              </div>
              <div className={styles.card__name}>
                {name}
              </div>
              <div className={styles.card__company}>
                {company}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {
        favorite.includes(id) ?
          <Button className={styles.card__favoriteicon} size="large" onClick={() => handleToggle('remove', id)} icon={<HeartFilled />} /> :
          <Button className={styles.card__favoriteicon} size="large" onClick={() => handleToggle('add', id)} icon={<HeartOutlined />} />
      }
    </div>

  );
};

export default Card;
