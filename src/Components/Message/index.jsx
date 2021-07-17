import { Row, Col } from 'antd';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindown';

export default function ChatRoom() {
  return (
    <div className='opacity'>
      <Row >
        <Col span={6}>
          <Sidebar />
        </Col>
        <Col span={18}>
          <ChatWindow />
        </Col>
      </Row>
    </div>
  );
}
