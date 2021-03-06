import { UserAddOutlined} from '@ant-design/icons';
import { Alert, Avatar, Button, Form, Input, Tooltip} from 'antd';
import { addDocument } from 'Components/Firebase/service';
import { AppContext } from 'Context/Approvider';
import { AuthContext } from 'Context/AuthProvider';
import useFirestore from 'Hook/useFireStore';
import { useContext, useEffect, useRef, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Message from './Messages';


const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }

    &__description {
      font-size: 12px;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperStyled = styled.div`
  height: 70vh;
  border: 1px solid #000;
  border-radius: 4px;
  background:#fff;
`

const ContentStyled = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end !important ;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
  word-wrap: break-word ;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    height: 1rem;
    background-color: pink;
    border-radius: 6px;
    
  }
    
  &::-webkit-scrollbar-thumb:hover{
    background-color: #fd609c;
    cursor: pointer !important;
  }
`;

function ChatWindown(props) {
  const { selectedRoom, members, setIsInviteMemberVisible } = useContext(AppContext);
  const { user: { uid, photoURL, displayName } } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState('');
  const [form] = Form.useForm();
  const inputRef = useRef(null);
  const messageListRef = useRef();
  // const antIcon = <LoadingOutlined style={{ fontSize: 20 }} spin />
  const { t } = useTranslation();

  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = () => {
    if(inputValue) {
      addDocument('messages', {
        text: inputValue,
        uid,
        photoURL,
        roomId: selectedRoom.id,
        displayName,
      });
    }

    form.resetFields(['message']);

    //focus to input again after submit
    if (inputRef?.current) {
      setTimeout(() => {
        inputRef.current.focus();
      });
    }
  };

  const condition = useMemo(
    () => ({
      fieldName: 'roomId',
      operator: '==',
      compareValue: selectedRoom.id,
    }),
    [selectedRoom.id]
  );

  const messages = useFirestore('messages', condition);

  useEffect(() => {
    if (messageListRef?.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  },[messages,selectedRoom.id]);


  return (
    <WrapperStyled>
      {selectedRoom.id ? (
        <>
          <HeaderStyled>
            <div className='header__info'>
              <p className='header__title'>{selectedRoom.name}</p>
              <span className='header__description'>
                {selectedRoom.description}
              </span>
            </div>
            <ButtonGroupStyled>
              <Button
                icon={<UserAddOutlined />}
                type='text'
                onClick={() => setIsInviteMemberVisible(true)}
              >
                {t("M???i")}
              </Button>
              <Avatar.Group size='small' maxCount={2}>
                {members.map((member) => (
                  <Tooltip title={member.displayName} key={member.id}>
                    <Avatar src={member.photoURL}>
                      {member.photoURL
                        ? ''
                        : member.displayName?.charAt(0)?.toUpperCase()}
                    </Avatar>
                  </Tooltip>
                ))}
              </Avatar.Group>
            </ButtonGroupStyled>
          </HeaderStyled>

          <ContentStyled>
            <MessageListStyled ref={messageListRef}>
              {messages.map((mes) => (
                // <Lazyload
                //   key={mes.id}
                //   placeholder={<Spin indicator={antIcon} style={{ position: 'fixed', inset: '40%' }} />}
                // >
                //   </Lazyload>
                    <Message
                      key={mes.id}
                      text={mes.text}
                      photoURL={mes.photoURL}
                      displayName={mes.displayName}
                      // createdAt={mes.createAt}
                      idUser={mes.uid}
                      idMessage={mes.id}
                      />
              ))}
            </MessageListStyled>

            <FormStyled form={form}>
              <Form.Item name='message'>
                <Input.TextArea
                  className='input-box'
                  rows={1}
                  ref={inputRef}
                  onChange={handleInputChange}
                  onPressEnter={handleOnSubmit}
                  placeholder='Nh???p tin nh???n...'
                  bordered={false}
                  autoComplete='off'
                />
              </Form.Item>
              <Button 
                style={{backgroundColor:'hotpink', color:'white', fontWeight:"bold", border:'none'}} 
                onClick={handleOnSubmit}
              >
                {t("G???i")}
              </Button>
            </FormStyled>
          </ContentStyled>
        </>
      ) : (
        <Alert
          message='H??y ch???n ph??ng'
          type='error'
          style={{ margin: 5 }}
          closable
        />
      )}
    </WrapperStyled>
  );
}

export default ChatWindown;