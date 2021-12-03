import { useContext, useRef } from 'react';
import { Form, Modal, Input } from 'antd';
import { AppContext } from 'Context/Approvider';
import { addDocument } from 'Components/Firebase/service';
import { AuthContext } from 'Context/AuthProvider';
import { useTranslation } from "react-i18next";

export default function AddRoomModal() {
  const { isAddRoomVisible, setIsAddRoomVisible, rooms } = useContext(AppContext);
  const { user: { uid } } = useContext(AuthContext);
  const [form] = Form.useForm();
  const nameRef = useRef();

  const { t } = useTranslation()

  const handleOk = () => {
    const {name} = form.getFieldsValue()
    if(name) {
      const exitName = rooms.find(room => room.name === name)
      if(!exitName) {
        addDocument('rooms', { ...form.getFieldsValue(), members: [uid] })
        // reset form value
        form.resetFields()
        setIsAddRoomVisible(false)
        return 
      }
      alert('Tên phòng đã dược sử dụng');
    }
    else nameRef.current.focus();
  };

  const handleCancel = () => {
    // reset form value
    form.resetFields();

    setIsAddRoomVisible(false);
  };

  return (
    <div>
      <Modal
        title={t('Tạo phòng')}
        visible={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="addRoom_buttonOke"
      >
        <Form form={form} layout='vertical'>
          <Form.Item label={t('Tên phòng')} name='name'>
            <Input ref={nameRef} placeholder={t('Nhập tên phòng')} />
          </Form.Item>
          <Form.Item label={t('Mô tả')} name='description'>
            <Input.TextArea placeholder={t('Nhập mô tả')} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
