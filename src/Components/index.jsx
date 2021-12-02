import { DASH_BOARD, EARNINGS, HOME_PAGE, MESSAGE, MUSIC } from 'constans';
import {
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom';
import Dashboard from './Dashboard';
import FavoriteMusic from './FavoriteMusic';
import Homepage from './Homepage';
import Message from './Message';
import Nav from './Navbar';
import UserInfo from './Message/UserInfo';
import AddRoomModal from './Modal/AddRoom';
import InviteMemberModal from './Modal/inviteMemberModal';
import Music from './Homepage/components/Music';
import ControlMusic from './Homepage/components/ControlMusic';
import iconSoluong from '../assets/images/iconSoLuong.png'


function ChillBeat(props) {
  const peopleRandom = Math.floor(Math.random() * 10000)
  const { path, url } = useRouteMatch()

  return (
    <div className="row">
      <div className="navbar-tabs p-0">
        <Nav url={url} />
      </div>
      <div className="d-flex my-2 header">
        <div style={{fontWeight:'bold'}}>
          <span style={{marginRight:6}}>
                <img src={iconSoluong} alt="so_luong"/>
          </span>
           {peopleRandom} people listening you
        </div>
        <div className="ms-auto">
          <UserInfo />
        </div>
      </div>
      <div className="content-page p-0 bg-page">
        <div className='container body-page'>
          <Switch>
            <Route component={Homepage} exact path={`${path}${HOME_PAGE}`} />
            <Route component={Dashboard} path={`${path}${DASH_BOARD}`} />
            <Route component={FavoriteMusic} path={`${path}${EARNINGS}`} />
            <Route component={Message} path={`${path}${MESSAGE}`} />
            <Route component={Music} path={`${path}${HOME_PAGE}${MUSIC}`} />
          </Switch>
          <AddRoomModal />
          <InviteMemberModal />
        </div>
      </div>
      <ControlMusic />
    </div>
  );
}

export default ChillBeat;