import './Dashboard.scss';
import Header from './component/Header';
import { icon_array } from 'constans';
import Listfan from './component/Listfan'
import Stream from './component/Stream'
import ChartLine from './component/ChartLine';
import { useTranslation } from "react-i18next";




function Dashboard(props) {
    const { t } = useTranslation();
    function random() {
        return Math.floor(Math.random() * 100)
    }

    return (
        <div className="Dashboard opacity">
            <Header />
            <div className="Dashboard__body">
                <div className="grid-1">
                    {
                        icon_array.map((item, index) => (
                            <div className="item " key={item.title} >
                                <div className="d-flex  p-5 box  aligns-item-center">
                                    <div className="d-flex">
                                        <div className={"rounded-circle m-auto p-3 item-" + (index + 1)}>
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className="ps-4">
                                        <h3> {random()} {index === 3 ? '%' : ""}</h3>
                                        <small className='text-secondary'>{item.title}</small>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="grid-2 pt-4">
                    <div className="d-flex p-3 box item">
                        <div className="d-flex">
                            <div className="rounded-circle item-5 m-auto p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                            </div>
                        </div>
                        <div className="ps-4">
                            <h3> {random()}</h3>
                            <small className='text-secondary'> {t("Saved as playlist")}</small>
                        </div>
                    </div>
                    <div className="d-flex p-3 box item">
                        <div className="d-flex">
                            <div className="rounded-circle item-6 m-auto p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="ps-4">
                            <h3> {random()}</h3>
                            <small className='text-secondary'> {t("Steams total hours")}</small>
                        </div>
                    </div>
                    <Listfan />
                    <Stream />
                    <ChartLine />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;