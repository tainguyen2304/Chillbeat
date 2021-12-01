import { PlusSquareOutlined } from '@ant-design/icons';
import { Button, Collapse, Typography } from 'antd';
import { AppContext } from 'Context/Approvider';
import { useContext, useState } from 'react';
import { useTranslation } from "react-i18next";
import styled from 'styled-components';


const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
   
    .ant-collapse-header,
    p {
      color: #000;
    }

    .ant-collapse-content-box {
      max-height: 300px;
      overflow-y: auto;
      padding: 0 40px;
      &::-webkit-scrollbar {
        width: 6px;
      }
  
      &::-webkit-scrollbar-thumb {
        heigth: 1rem;
        background-color: #eee;
        border-radius: 6px;
        cursor: pointer;
        
      }
        
      &::-webkit-scrollbar-thumb:hover{
        background-color: #ddd;
        cursor: pointer;
      }
    }

    .add-room {
      display: flex;
      align-items: center;
      margin-top: .5rem;
      color: black;
    }
    .add-room:hover {
      color:#fff;
      background:green;
      transition: all .2s linear;
    }
    .active {
      background-color:blue;
      color:#fff;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  border-radius:4px;
  background-color:#eee;
  margin-bottom: 5px;
  color: #333;
  padding:.5rem;
  text-align:center;

  &:hover {
    background-color:blue;
    color:#fff;
  }
`;


function RoomList(props) {
  const { rooms, setSelectedRoomId, setIsAddRoomVisible } = useContext(AppContext)
  const { t } = useTranslation();
  const [idActived, setIdActive] = useState();

  const handleAddRoom = () => {
    setIsAddRoomVisible(true)
  };
  
  const handleSelectRoom = (id) => {
    setSelectedRoomId(id);
    setIdActive(id);
  };

  return (
    <Collapse ghost='true' defaultActiveKey={['1']}>
      <PanelStyled header={t('Danh sách các phòng')} key='1'>
        {rooms.map((room) => (
          <LinkStyled
            key={room.id}
            onClick={() => handleSelectRoom(room.id)}
            className={idActived === room.id ? 'active' : ''}
          >
            {room.name}
          </LinkStyled>
        ))}
        <Button
          type='text'
          icon={<PlusSquareOutlined />}
          className='add-room'
          onClick={handleAddRoom}
        >
          {t("Thêm phòng")}
        </Button>
      </PanelStyled>
    </Collapse>
  );
}

export default RoomList;