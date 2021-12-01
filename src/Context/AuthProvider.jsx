import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { auth } from 'Components/Firebase/config';
import { CHILL_BEAT, HOME_PAGE, SIGNIN } from 'constans';
import { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />
  console.log('re-render')
  useEffect(() => {
    const unsubscibed = auth.onAuthStateChanged((user) => {// khi đăng nhập thành công hoặc khi đăng xuất
      console.log(user) 
      if (user) {                                           // (trạng thái account thay đổi) sẽ chạy hàm này.
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });


        setIsLoading(false);
        history.push(`${CHILL_BEAT}${HOME_PAGE}`);

        return;
      }

      // reset user info
      setUser({});
      setIsLoading(false);
      history.push(SIGNIN);
    });

    // clean function
    return () => {
      unsubscibed();
    };
  }, [history]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin tip="Đang đăng nhập..." indicator={antIcon} style={{ position: 'fixed', inset: '40%' }} /> : children}
    </AuthContext.Provider>
  );
}
