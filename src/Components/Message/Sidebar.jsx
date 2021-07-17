import { Row, Col } from 'antd';
import RoomList from './RoomList';
import styled from 'styled-components';

const SidebarStyled = styled.div`
  color: #333;
  height: 80vh;
  border: 1px solid #000;
  border-radius: 4px;
`;

export default function Sidebar() {
  return (
    <SidebarStyled>
      <Row>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </SidebarStyled>
  );
}
