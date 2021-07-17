import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth } from '../Firebase/config';
import { addDocument, generateKeywords } from '../Firebase/service';
import { GoogleSquareFilled, FacebookFilled } from '@ant-design/icons';
import { useTranslation } from "react-i18next";


const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {
  const { t } = useTranslation();

  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };

  return (
    <div>
      <Row justify='center' style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: 'center' }} >
            Chill Beat
          </Title>
          <Button
            type="primary" danger
            style={{ width: '100%', marginBottom: 5, height: '2.5rem', }}
            icon={<GoogleSquareFilled style={{ fontSize: '1.5rem' }} />}
            onClick={() => handleLogin(googleProvider)}
          >
            {t("Sign in gg")}
          </Button>
          <Button
            type="primary"
            style={{ width: '100%', height: '2.5rem', }}
            icon={<FacebookFilled style={{ fontSize: '1.5rem' }} />}
            onClick={() => handleLogin(fbProvider)}
          >
            {t("Sign in fb")}
          </Button>
        </Col>
      </Row>
    </div>
  );
}
