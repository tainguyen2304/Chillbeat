import { Avatar, Typography, Button, Menu, Dropdown } from 'antd';
import styled from 'styled-components';
import { formatRelative } from 'date-fns/esm';
import { useContext } from 'react';
import { AuthContext } from 'Context/AuthProvider';
import { deleteDocument } from 'Components/Firebase/service';

const WrapperStyled = styled.div`
  margin-bottom: 10px;

  .author {
    margin-left: 5px;
    font-weight: bold;
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

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Button type="text" onClick={() => handleClick(idMessage)}>Xóa</Button>
      </Menu.Item>
      <Menu.Item key="1">
        <Button type="text" >Chuyển tiếp</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    idUser === uid
      ? <div className='d-flex justify-content-end me-2 mb-3 align-items-center'>
        <Typography.Text style={{ fontSize: 11, color: '#a7a7a7', marginRight: '10px' }}>
          {formatDate(createdAt?.seconds)}
        </Typography.Text>
        <Dropdown overlay={menu} trigger={['click']}>
          <Button type="primary" shape="round">
            {text}
          </Button>
        </Dropdown>
      </div>
      : <WrapperStyled>
        <div>
          <Avatar size='small' src={photoURL}>
            {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
          </Avatar>
          <Typography.Text className='author'>{displayName}</Typography.Text>
          <Typography.Text className='date'>
            {formatDate(createdAt?.seconds)}
          </Typography.Text>
        </div>
        <div>
          <Dropdown overlay={menu} trigger={['click']}>
            <Button shape="round">
              {text}
            </Button>
          </Dropdown>
        </div>
      </WrapperStyled>
  );
}
