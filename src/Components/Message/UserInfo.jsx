import { Avatar, Typography } from 'antd';
import { auth } from 'Components/Firebase/config';
import { AppContext } from 'Context/Approvider';
import { AuthContext } from 'Context/AuthProvider';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

function UserInfo(props) {
  const { t } = useTranslation();

  const {
    user: { displayName, photoURL },
  } = useContext(AuthContext);
  const { clearState } = useContext(AppContext);

  return (
    <div >
      <Avatar src={photoURL}>
        {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
      </Avatar>
      <Typography.Text className='username'>{displayName}</Typography.Text>
      <button className='btn btn-outline-dark ms-3'
        ghost='true'
        onClick={() => {
          // clear state in App Provider when logout
          clearState();
          auth.signOut();
        }}
      >
        {t("Đăng xuất")}
      </button>
    </div>
  )
}

export default UserInfo;