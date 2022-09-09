import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty, isEqual } from 'lodash';
import { Col, Row, Tabs, Image } from 'antd';

import Card from 'components/Card';
import { actionCreators } from 'state';
import { IRootReducer } from 'state/reducers';
import styles from 'pages/Homepage/styles.module.scss';
import { usePrevious } from 'helpers';
import DetailMobile from './components/DetailMobile';
import DetailDesktop from './components/DetailDesktop';
import LoadingIcon from 'assets/images/loading.gif';

export interface IUserList {
  name: string,
  id: number,
  company: { name: string },
  username: string,
}

export interface IUserDetail {
  name: string,
  id: number,
  username: string,
  website: string,
  phone: string,
  email: string,
  address: {
    street: string,
    city: string,
    suite: string
  },
  company: {
    name: string
  },
  avatar: string,
}

export const Homepage: FC = () => {
  const initialUserDetail = {
    name: 'imnabey',
    username: 'nana',
    id: 1,
    website: 'www.imnabey.com',
    phone: '082324',
    email: 'imnabey@gmail.com',
    address: {
      street: 'roman street',
      city: 'jakarta',
      suite: '934 suite',
    },
    company: {
      name: 'jitera',
    },
    avatar: '',
  };

  const dispatch = useDispatch();
  const userListData: IUserList[] = useSelector((state: IRootReducer) => state.userList);
  const { getUserList } = bindActionCreators(actionCreators, dispatch);
  const [favorite, setFavorite] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [favoriteList, setFavoriteList] = useState<IUserList[]>([]);
  const [clicked, setClicked] = useState(false);
  const [tabActive, setTabActive] = useState(1);
  const prevFavorite = usePrevious(favorite);
  const [detailUserData, setDetailUserData] = useState<IUserDetail>(initialUserDetail);

  useEffect(() => {
    setIsLoading(true);
    getUserList();
    setIsLoading(false);
  }, []);

  const generateDetailData = (param: any) => {

    const detailUserFind: IUserDetail = userListData.find(obj => obj.id === param) as IUserDetail;

    const avatarDetail = `https://avatars.dicebear.com/v2/avataaars/${detailUserFind.name}.svg?options[mood][]=happy`;

    const newUserData = {
      ...detailUserFind,
      avatar: avatarDetail,
    };

    setDetailUserData(newUserData);
  };

  useEffect(() => {
    if (!isEmpty(userListData)) {
      generateDetailData(1);
    }
  }, [userListData]);

  useEffect(() => {
    const favoriteStorage = JSON.parse(localStorage.getItem('favorites') ?? '[]');
    const favoriteFilter = userListData.filter((value: any) => favoriteStorage.includes(value.id));

    setFavoriteList(favoriteFilter);
    setFavorite(favoriteStorage);
  }, [userListData]);

  useEffect(() => {
    if (!isEqual(prevFavorite, favorite) && clicked) {
      localStorage.setItem('favorites', JSON.stringify(favorite));
    }
  }, [favorite]);

  useEffect(() => {
    if (!isEqual(prevFavorite, favorite)) {
      const favoriteStorage = JSON.parse(localStorage.getItem('favorites') ?? '[]');
      const favoriteFilter = userListData.filter((value: any) => favoriteStorage.includes(value.id));

      setFavoriteList(favoriteFilter);
    }
  }, [favorite]);

  const onClickCard = (param: any) => {
    if (!isEmpty(userListData)) {
      generateDetailData(param);
    }

    setTabActive(param);
  };

  const handleFavorite = (param: string, id: any) => {
    setClicked(true);

    if (param === 'add') {
      if (!favorite.includes(id)) {
        setFavorite(prevState => [...prevState, id]);
      }
    } else {
      const filtering = favorite.filter(favoItem => favoItem !== id);
      setFavorite(filtering);
    }
  };

  if (isLoading) {
    return (<div className={styles.homepage__loading}><Image width={100} src={LoadingIcon} /></div>);
  }

  return (
    <div className={styles.homepage}>
      <h1 className={styles.homepage__title}>List of <i>Users</i></h1>
      <Row gutter={[50, 0]} className={styles.homepage__item}>
        <Col md={12} xs={24}>
          <Tabs defaultActiveKey='1'>
            <Tabs.TabPane tab='All' key='1' className={styles.homepage__tab} >
              {!isEmpty(userListData) && userListData.map((item) => (
                <div key={item.id} className={tabActive === item.id ? styles.homepage__tabactive : styles.homepage__tabainctive}>
                  <Card
                    pic={`https://avatars.dicebear.com/v2/avataaars/${item.name}.svg?options[mood][]=happy`}
                    name={item.name}
                    company={item.company.name}
                    handleToggle={handleFavorite}
                    favorite={favorite}
                    id={item.id}
                    username={item.username}
                    onClick={() => onClickCard(item.id)}
                  />

                  {tabActive === item.id && !isEmpty(detailUserData) &&
                    <DetailMobile detailData={detailUserData} />
                  }

                </div>
              ))}

            </Tabs.TabPane>
            <Tabs.TabPane tab='Favorite Users' key='2' className={styles.homepage__tab}>
              {!isEmpty(favoriteList) && favoriteList.map((item) => (
                <div key={item.id}>
                  <Card
                    pic={`https://avatars.dicebear.com/v2/avataaars/${item.name}.svg?options[mood][]=happy`}
                    name={item.name}
                    company={item.company.name}
                    handleToggle={handleFavorite}
                    favorite={favorite}
                    id={item.id}
                    username={item.username}
                    onClick={() => onClickCard(item.id)}
                  />
                </div>
              ))}
            </Tabs.TabPane>
          </Tabs>
        </Col>
        <Col md={12} xs={24}>
          {!isEmpty(detailUserData) &&
            <DetailDesktop detailData={detailUserData} favorite={favorite} handleFavorite={handleFavorite} />
          }
        </Col>
      </Row>

    </div>
  );
};

export default Homepage;
