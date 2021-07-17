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

  useEffect(() => {
    const unsubscibed = auth.onAuthStateChanged((user) => {
      if (user) {
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
      {isLoading ? <Spin indicator={antIcon} style={{ position: 'fixed', inset: '50%' }} /> : children}
    </AuthContext.Provider>
  );
}
