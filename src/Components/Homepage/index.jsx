import { search } from 'constans';
import Artlist from './components/Artlist';
import News from './components/News';
import PopularGenres from './components/PopularGenres';
import Trendind from './components/Trendind';
import './Homepage.scss';

function Homepage() {
    return (
        <div className="Home-page opacity">
            <div className="Home-page__search text-secondary py-4">
                <div className="rounded-pill w-50 d-flex align-items-center">
                    <span style={{paddingBottom:'0.4rem'}}>{search}</span>
                    <input type="text" className='text-secondary bg-light w-75' placeholder="Search to find" />
                </div>
            </div>
            <div className="row py-3">
                <div className="col-12 col-md-6">
                    <Trendind />
                </div>
                <div className="col-12 col-md-6">
                    <Artlist />
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-12 col-md-6">
                    <News />
                </div>
                <div className="col-12 col-md-6">
                    <PopularGenres />
                </div>
            </div>
        </div>
    );
}

export default Homepage;
