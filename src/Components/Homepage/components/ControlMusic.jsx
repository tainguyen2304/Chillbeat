import { FastBackwardOutlined, FastForwardOutlined, PauseCircleFilled, PlayCircleFilled, RetweetOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { dataMusic } from 'constans';
import { AppContext } from 'Context/Approvider';
import { useState, useContext, useEffect, useMemo } from 'react';
import TimeSlider from 'react-input-slider';



function ControlMusic() {
    const { isPlay, setPlay, audioIndex, setAudioIndex, audioRef, songAndSingle } = useContext(AppContext);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isLoop, setLoop] = useState(false);
    const [isRandom, setRandom] = useState(false);
    const max = useMemo(() => {
        return dataMusic.length - 1;
    }, [])

    useEffect(() => {
        if (isPlay) {
            audioRef.current.play()
        }
        else {
            audioRef.current.pause()
        }
    }, [audioRef, isPlay]);

    const handlePausePlayClick = () => {
        if (isPlay) {
            audioRef.current.pause()
        }
        else {
            audioRef.current.play()
        }
        setPlay(!isPlay);
    };

    const handleLoadedData = () => {
        setDuration(audioRef.current.duration);
        if (isPlay) audioRef.current.play();
    };

    const handleTimeSliderChange = ({ x }) => {
        audioRef.current.currentTime = x;
        setCurrentTime(x);

        if (isPlay === false) {
            setPlay(true);
        }
    };

    const nextSong = () => {
        if (!isRandom) {
            if (audioIndex === max) {
                setAudioIndex(0)
            }
            else {
                setAudioIndex(audioIndex + 1)
            }
        }
        else {
            const random = Math.floor(Math.random() * max)
            setAudioIndex(random)
        }
    }

    const prevSong = () => {
        if (!isRandom) {
            if (audioIndex === 0) {
                setAudioIndex(max)
            }
            else {
                setAudioIndex(audioIndex - 1)
            }
        }
        else {
            const random = Math.floor(Math.random() * max)
            setAudioIndex(random)
        }
    }

    const onRanDom = () => {
        setRandom(!isRandom)
    }

    const onLoop = () => {
        setLoop(!isLoop)
    }

    const onEnd = () => {
        if (isLoop) {
            audioRef.current.play()
        }
        else {
            setAudioIndex(audioIndex + 1);
        }
    }
    return (
        <div >
            <Row className='ControlMusic'>
                <Col span={6} className='d-flex flex-column justify-content-center align-items-center'>
                    <h6 className='font-width-bold'>{dataMusic[audioIndex] ? dataMusic[audioIndex].title : songAndSingle.nameSong}</h6>
                    <p className='text-secondary'>{dataMusic[audioIndex] ? dataMusic[audioIndex].single : songAndSingle.nameSingle}</p>
                </Col>
                <Col span={18}>
                    <Row justify="center">
                        <Col span={16}>
                            <div className="d-flex justify-content-center">
                                <div className="buttons-control w-50 d-flex justify-content-center align-items-center ">
                                    <span onClick={onRanDom}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className={isRandom ? 'text-success' : 'text-dark'} viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z" />
                                            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                                        </svg>
                                    </span>
                                    <span onClick={prevSong}
                                    >
                                        <FastBackwardOutlined style={{ fontSize: 18 }} />
                                    </span>
                                    <span onClick={handlePausePlayClick}>
                                        {isPlay ? <PauseCircleFilled style={{ fontSize: '36px', color: 'hotpink' }} /> : <PlayCircleFilled style={{ fontSize: '36px',color: 'hotpink' }} />}
                                    </span>
                                    <span onClick={nextSong}
                                    >
                                        <FastForwardOutlined style={{ fontSize: 18 }} />
                                    </span>
                                    <span
                                        onClick={onLoop}>
                                        <RetweetOutlined style={isLoop ? { color: 'green', fontSize: 18 } : { color: '#000', fontSize: 18 }} />
                                    </span>
                                </div>
                            </div>
                            <Row align="middle">
                                <Col span={20}>
                                    <TimeSlider
                                        axis="x"
                                        xmax={duration}
                                        x={currentTime}
                                        onChange={handleTimeSliderChange}
                                        className='w-100 time-bar'
                                        styles={{
                                            track: {
                                                backgroundColor: "#e3e3e3",
                                                height: "4px",
                                            },
                                            active: {
                                                backgroundColor: "#333",
                                                height: "4px",
                                            },
                                            thumb: {
                                                marginTop: "0px",
                                                height: "4px",
                                                width: "0px",
                                                backgroundColor: "#333",
                                                borderRadius: 0,
                                            },
                                        }}
                                    />
                                </Col>
                                <Col span={4} className="ps-1">{dataMusic[audioIndex] ? dataMusic[audioIndex].time : songAndSingle.time}</Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <audio
                ref={audioRef}
                src={dataMusic[audioIndex] ? dataMusic[audioIndex].audio : audioIndex}
                onLoadedData={handleLoadedData}
                onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                onEnded={onEnd}
            />
        </div >
    );
}

export default ControlMusic;