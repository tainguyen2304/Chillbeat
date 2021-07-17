import { imgCarousel } from 'constans';
import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from "react-i18next";
import {
    Link,
    useLocation
} from 'react-router-dom';


function Trendind(props) {
    const { t } = useTranslation();
    const { pathname } = useLocation();
    return (
        <div className='Trendind'>
            <h5 className='fw-bold'>{t("Trendings")}</h5>
            <Carousel>
                {imgCarousel.map((item, index) => (
                    <Carousel.Item key={index} className='img-trending'>
                        <Link to={`${pathname}/event_${index}`}>
                            <img
                                className="d-block w-100 rounded "
                                src={item}
                                alt='...'
                            />

                            <Carousel.Caption className="text-left">
                                <div >
                                    <p className="trend">{t("//TRENDIND")}</p>
                                    <h5 className="fw-bold m-0 text-light">{t("Red Snapper")}:<br /> {t("Performance Review")}</h5>
                                    <p className="fw-bold ">- Kamelia</p>
                                </div>
                                <div className="mt-4">
                                    <button className='btn btn-light text-primary btn-play mr-2'>{t("PLAY ")}
                                        <span >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play mb-1" viewBox="0 0 16 16">
                                                <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                                            </svg>
                                        </span>
                                    </button>
                                    <button className="btn btn-light text-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                                        </svg>
                                    </button>
                                </div>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>))}
            </Carousel>

        </div>
    );
}

export default Trendind;