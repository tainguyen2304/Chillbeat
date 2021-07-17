import { categery, imgPopular } from 'constans';
import { useTranslation } from 'react-i18next';


function PopularGenres() {
    const { t } = useTranslation()
    return (
        <div className='PopularGenres'>
            <h5 className="fw-bold">{t("Popular genres")}</h5>
            <div className="PopularGenres__grid__categary">
                {categery.map(item => (
                    <button type="button" className="btn btn-outline-dark categary-text " key={item}>
                        {t(item)}
                    </button>
                ))}
            </div>
            <div className="PopularGenres__grid__avt pt-2">
                {imgPopular.map(item => (
                    <div key={item.title} className="text-center single">
                        <div>
                            <img src={item.img} alt={item.title} className="w-75" />
                        </div>
                        <p className="pt-2 name">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularGenres;