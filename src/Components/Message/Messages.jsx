import { Avatar, Typography, Menu, Dropdown, Button,Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { formatRelative } from 'date-fns/esm';
import { useContext } from 'react';
import { AuthContext } from 'Context/AuthProvider';
import { deleteDocument } from 'Components/Firebase/service';
import LazyLoad from 'react-lazyload';

const WrapperStyled = styled.div`
  margin-bottom: 16px;
  .author {
    margin-left: 5px;
    font-weight: bold;
    font-size: 1rem;
  }

  .date {
    margin-left: 10px;
    font-size: 11px;
    color: #a7a7a7;
  }

  .content {
    margin-left: 30px;
  }
`;

function formatDate(seconds) {
  let formattedDate = '';

  if (seconds) {
    formattedDate = formatRelative(new Date(seconds * 1000), new Date());

    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }

  return formattedDate;
}


const handleClick = (idMessage) => {
  deleteDocument('messages', idMessage)
}


export default function Message({ text, displayName, createdAt, photoURL, idUser, idMessage }) {
  const { user: { uid } } = useContext(AuthContext);
  const antIcon = <LoadingOutlined style={{ fontSize: 5 }} spin />

  const menu = (
    <Menu className='dropdwon-message'>
      <Menu.Item key="0" className='d-flex dropdwon-message' >
        <Button size='small' shape="round" danger type='primary ' onClick={() => handleClick(idMessage)}>Xóa</Button>
        <Button size='small' shape="round" className='ms-2' type='primary' >Chuyển tiếp</Button>
      </Menu.Item>
    </Menu>
  );

  return (
      // <LazyLoad
      // >
      //       { 
      //         }
      // </LazyLoad>
            idUser === uid
                ? <div className='d-flex justify-content-end me-2 mb-2 align-items-center'>
                      <Typography.Text style={{ fontSize: 11, color: '#a7a7a7', marginRight: '10px' }}>
                        {formatDate(createdAt?.seconds)}
                      </Typography.Text>
                      <Dropdown overlay={menu} trigger={['click']}>
                        <span className='bg-primary  text-light message-box'>{text}</span>
                      </Dropdown>
                </div>
                : <WrapperStyled >
                    <div className='mb-2'>
                      <Avatar size='small' src={photoURL}>
                        {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
                      </Avatar>
                      <Typography.Text className='author'>{displayName}</Typography.Text>
                    </div>
                    <div className='d-flex justify-content-start ms-2 mb-2 align-items-center'>
                      <Dropdown overlay={menu} trigger={['click']}>
                        <span className='message-box' style={{ backgroundColor: '#ddd' }}>{text}</span>
                      </Dropdown>
                      <Typography.Text style={{ fontSize: 11, color: '#a7a7a7', marginLeft: '10px' }}>
                        {formatDate(createdAt?.seconds)}
                      </Typography.Text>
                    </div>
                </WrapperStyled>
   
  );
}
