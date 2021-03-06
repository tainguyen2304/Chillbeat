import { PlayCircleFilled } from '@ant-design/icons';
import { artistImg, dataMusic, imgPlayed } from 'constans';
import { AppContext } from 'Context/Approvider';
import { useContext, useEffect } from 'react';
import AddMusicFavorite from './AddMusicFavorite';
import OnLiked from './OnLiked';


function Music() {
    const { isPlay, setPlay, audioIndex, setAudioIndex, audioRef } = useContext(AppContext);

    useEffect(() => {
        if (isPlay) {
            audioRef.current.play()
        }
        else {
            audioRef.current.pause()
        }
    }, [isPlay, audioRef])

    const handlePausePlayClick = () => {
        setPlay(!isPlay);
    };

    const MusicClick = (index) => {
        setAudioIndex(index);
        setPlay(true);
    }


    const unActive = 'row align-items-center py-2 Music-item ';
    const Active = 'row activeMusic align-items-center py-2 Music-item';
    const iconCurrent = (<div onClick={handlePausePlayClick}>{isPlay ? <img src={imgPlayed} alt="am thanh" /> : <PlayCircleFilled style={{color:'hotpink'}} />}</div>)

    return (
        <div className='Music opacity'>
            <div className='row  mb-4'>
                <div className="col-4 h-50">
                    <img src={artistImg} alt="Monica Lee" className='w-100 rounded ' />
                </div>
                <div className="col-8  align-items-center">
                    <div>
                        <small>Album</small>
                        <h2>Mocica Lee</h2>
                    </div>
                </div>
            </div>
            <div >
                {
                    dataMusic.map((data, index) => (
                        <div className={index === audioIndex ? Active : unActive} key={data.title}>
                            <div className="col-4">
                                <div className="row" >
                                    <div className="col-4">
                                        {index === audioIndex ? iconCurrent : index + 1}
                                    </div>
                                    <div className="col-4">
                                        <OnLiked />
                                    </div>
                                    <div className="col-4">
                                        <AddMusicFavorite
                                            nameSong={data.title}
                                            nameSingle={data.single}
                                            time={data.time}
                                            audio={data.audio}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6" onClick={() => MusicClick(index)}>
                                <p className='m-0 fw-bold'>{data.title}</p>
                                <small className="text-secondary">{data.single}</small>
                            </div>
                            <div className="col-2">
                                <p className='m-0'>{data.time}</p>
                            </div>
                        </div>

                    ))
                }

            </div>
        </div >
    );
}

export default Music;