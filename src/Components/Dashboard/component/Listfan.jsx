import { listFan } from 'constans';
import { useTranslation } from "react-i18next";
    

function Listfan(props) {
    const {t} = useTranslation();
    function hours () {
        return Math.floor(Math.random() * 10)
    }
    return (
        <div className="Listfan rounded box d-flex flex-column justify-content-between">
            <div>
                <div className="title px-2 py-3 d-flex justify-content-between">
                    <p className="font-weight-bold">{t("Fans/Hours listening to you")}</p>
                    <div>
                        <p className="text-secondary">
                            {t("Descending")}
                        <span className="pl-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <   path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </span>
                        </p>
                    </div>
                </div>
                <hr/>

                <div className="list px-4">
                    {
                        listFan.map((fan,index) => (
                            <div className="row aligns-item-center" key={index}>
                                <div className="col-2">
                                    <img src={fan.img} alt="" />
                                </div>
                                <div className="col-8">
                                    <p className="text-secondary">{fan.name}</p>
                                </div>
                                <div className="col-2 text-right">
                                    <p className="font-weight-bold">{hours()}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <p className=' show-more'>{t("Show more")}</p>
        </div>
    );
}

export default Listfan;