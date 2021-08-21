import { CloseCircleFilled, HeartFilled, PlayCircleFilled } from '@ant-design/icons';
import { Avatar, Button, Col, Row, Typography } from 'antd';
import { deleteDocument } from 'Components/Firebase/service';
import OnLiked from 'Components/Homepage/components/OnLiked';
import { imgPlayed, search } from 'constans';
import { AppContext } from 'Context/Approvider';
import { AuthContext } from 'Context/AuthProvider';
import { useContext, useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Earnings.scss';


const { Title, Text } = Typography;

function Earning(props) {
    const { isPlay, setAudioIndex, setPlay, setSongAndSingle, listMusicFavorite } = useContext(AppContext);
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const [listSong, setListSong] = useState([]);
    const [id, setId] = useState('')
    const { user: { photoURL, displayName } } = useContext(AuthContext);
    const unActive = ' Music-item p-2';
    const inputRef = useRef(null)
    const Active = ' Music-item p-2 activeMusic ';
    const iconCurrent = (<div >{isPlay ? <img src={imgPlayed} alt="am thanh" /> : <PlayCircleFilled />}</div>);


    useEffect(() => {
        setListSong(listMusicFavorite)
        setValue('')
    }, [listMusicFavorite])


    const handleClick = (music) => {
        const { id, nameSingle, nameSong, time, audio } = music;
        setId(id);
        setAudioIndex(audio);
        setSongAndSingle({ nameSong, nameSingle, time });
        setPlay(true);
    }

    const onChange = (e) => {
        let value = e.target.value;
        setValue(value);

        if (inputRef.current) {
            clearTimeout(inputRef.current)
        }

        inputRef.current = setTimeout(() => {
            let exist = new RegExp(value.trim(), 'i');
            const listSongFillter = listMusicFavorite.filter(music => exist.test(music.nameSong) || exist.test(music.nameSingle));
            setListSong(listSongFillter)
        }, 400)
    }

    const RemoveDataSong = (id) => {
        deleteDocument('MusicFavorite', id)
    }

    return (
        <div className='opacity Earning'>
            <Row style={{ borderRadius: '8px', border: '2px solid #000', backgroundColor: "#000", padding: '6rem' }}>
                <Col span={8}>
                    <Row justify='center' align='middle'>
                        <Col >
                            <div>
                                <HeartFilled style={{ fontSize: '8rem', color: 'white' }} />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={16}>
                    <Title level={1} className='text-light'>{t("Danh Sách Nhạc Yêu Thích")}</Title>
                    <small className="d-flex align-items-center">
                        <Avatar size='small' src={photoURL}>
                            {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
                        </Avatar>
                        <Text className='username text-light ms-2'>{displayName}</Text>
                    </small>
                </Col>
            </Row>
            <div className="Song-search text-secondary py-4">
                <div className="rounded-pill w-50 d-flex align-items-center">
                    <span style={{ paddingBottom: '0.4rem' }}>{search}</span>
                    <input value={value} onChange={onChange} type="text" className='text-secondary bg-light w-75' placeholder="Search song or artist" />
                </div>
            </div>
            <div className="pt-5">
                {
                    listSong.map((music, index) => (
                        <Row className={music.id === id ? Active : unActive} align='middle' key={music.id}>
                            <Col span={2} > {music.id === id ? iconCurrent : index + 1} </Col>
                            <Col span={2}> <OnLiked /> </Col>
                            <Col span={16} onClick={() => handleClick(music)}>
                                <p className="m-0 fw-bold">{music.nameSong}</p>
                                <small className='text-secondary'>{music.nameSingle}</small>
                            </Col>
                            <Col span={2}>{music.time}</Col>
                            <Col span={2}>
                                <Button
                                    icon={<CloseCircleFilled />}
                                    type='text'
                                    onClick={() => RemoveDataSong(music.id)}
                                ></Button>
                            </Col>
                        </Row>
                    ))
                }
            </div>

        </div>
    );
}

export default Earning;