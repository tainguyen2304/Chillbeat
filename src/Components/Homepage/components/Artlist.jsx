import { PauseCircleFilled, PlayCircleFilled } from '@ant-design/icons';
import { artistImg, dataMusicDemo, MUSIC } from 'constans';
import { AppContext } from 'Context/Approvider';
import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import OnLiked from './OnLiked';

function Artlist() {
    const { t } = useTranslation();
    const { pathname } = useLocation()
    const { isPlay, setPlay, audioIndex, setAudioIndex, audioRef } = useContext(AppContext);

    useEffect(() => {
        if (isPlay) {
            audioRef.current.play()
        }
        else {
            audioRef.current.pause()
        }
    }, [isPlay, audioRef]);

    const handlePausePlayClick = () => {
        setPlay(!isPlay);
    };

    const MusicClick = (index) => {
        setAudioIndex(index);
        setPlay(true);
    }

    const unActive = 'row pb-1 align-items-center  Music-item';
    const Active = 'row pb-1 align-items-center activeMusic  Music-item';
    const iconCurrent = (<div onClick={handlePausePlayClick}>{isPlay ? <PauseCircleFilled /> : <PlayCircleFilled />}</div>)
    return (
        <div className='Artlist h-100'>
            <h5 className="fw-bold">{t("Artist of the week")}</h5>
            <div className="row">
                <div className="col-4">
                    <img src={artistImg} alt="Monica Lee" className="rounded artist_img w-100" />
                </div>
                <div className="col-8 py-2">
                    <small>{t("Album")}</small>
                    <h2>Always Authentic</h2>
                    <p className="text-secondary m-0 name">Monica Lee</p>
                    <p className="des">{t("The artists we represent are one of the most successful in Virginia and also were a huge breakthrough in the international market, topping radio and sales around the world.")}</p>
                    <div className="list-play-music">
                        {
                            dataMusicDemo.map((data, index) => (
                                <div className={index === audioIndex ? Active : unActive} key={index}>
                                    <div className="col-2">
                                        <div className="row ">
                                            <div className="col-6">
                                                {index === audioIndex ? iconCurrent : index + 1}
                                            </div>
                                            <div className="col-6" >
                                                <OnLiked />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8" onClick={() => MusicClick(index)}>
                                        <p className='m-0'>{data.title}</p>
                                    </div>
                                    <div className="col-2">
                                        <p className='m-0'>{data.time}</p>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                    <p className="text-center text-dark m-0 pt-1">
                        <Link to={`${pathname}${MUSIC}`} >{t("Show more")}</Link>
                    </p>

                </div>
            </div>
        </div>
    );

}

export default Artlist;