import { dataNews } from 'constans';
import { useTranslation } from 'react-i18next';


function News(props) {
    const {t} = useTranslation();
    const col = "card bg-dark text-white border-0";
    const col_2 = "card bg-dark text-white grid__col-2 border-0"
    return (
        <div className='News'>
            <h5 className="fw-bold">{t("More news")}</h5>
            <div className="News__grid">    
               {dataNews.map((data,index) => (
                    <div 
                    className= {data.col === 'col_1/3' ? col_2 : col}
                    key={index}
                    >
                        <img src={data.img} className="card-img w-100 h-100" alt={data.title}/>
                        <div className="card-img-overlay ">
                            <div className="caption">
                                <p className="title">{t(data.title)}</p>
                                <p className="des">{t(data.des)}</p>
                            </div>
                        </div>
                    </div>
               ))}
            </div>
        </div>
    );
}

export default News;