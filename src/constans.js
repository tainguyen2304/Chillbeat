import img_1 from './assets/images/mau-poster-ca-nhac-6.jpg'
import img_2 from './assets/images/mau-poster-ca-nhac-7.jpg'
import img_3 from './assets/images/mau-poster-ca-nhac.jpg'
import img_4 from './assets/images/mau-poster-ca-nhac-8.jpg'
import img_5 from './assets/images/mau-poster-ca-nhac-5.jpg'
import artist_img from './assets/images/arttist_img_1.png'
import new_img_1 from './assets/images/new_img_1.jpg'
import new_img_2 from './assets/images/new_img_2.png'
import new_img_3 from './assets/images/new_img_3.png'
import new_img_4 from './assets/images/new_img_4.png'
import new_img_5 from './assets/images/new_img_5.png'
import popular_img_1 from './assets/images/popular_img_1.png'
import popular_img_2 from './assets/images/popular_img_2.png'
import popular_img_3 from './assets/images/popular_img_3.png'
import popular_img_4 from './assets/images/popular_img_4.png'
import popular_img_5 from './assets/images/popular_img_5.png'
import popular_img_6 from './assets/images/popular_img_6.png'
import logo from './assets/images/logo.png'
import avt_1 from './assets/images/Avatar_1.png'
import avt_2 from './assets/images/Avatar_2.png'
import avt_3 from './assets/images/Avatar_3.png'
import avt_4 from './assets/images/Avatar_4.png'
import avt_5 from './assets/images/Avatar_5.png'
import avt_6 from './assets/images/Avatar_6.png'
import avt_7 from './assets/images/Avatar_7.png'

import audio_5 from './assets/audio/audio_0.mp3'
import audio_0 from './assets/audio/audio_1.mp3'
import audio_1 from './assets/audio/audio_2.mp3'
import audio_2 from './assets/audio/audio_3.mp3'
import audio_3 from './assets/audio/audio_4.mp3'
import audio_4 from './assets/audio/audio_5.mp3'
import audio_6 from './assets/audio/audio_6.mp3'
import audio_7 from './assets/audio/audio_7.mp3'
import audio_8 from './assets/audio/audio_8.mp3'
import audio_9 from './assets/audio/audio_9.mp3'
import audio_10 from './assets/audio/audio_10.mp3'
import audio_11 from './assets/audio/audio_11.mp3'
import audio_12 from './assets/audio/audio_12.mp3'
import audio_13 from './assets/audio/audio_13.mp3'
import audio_14 from './assets/audio/audio_14.mp3'
import audio_15 from './assets/audio/audio_15.mp3'
import audio_16 from './assets/audio/audio_16.mp3'
import audio_17 from './assets/audio/audio_17.mp3'
import imgPlayed from './assets/images/music_played.gif';
import { AreaChartOutlined, HomeFilled, MessageFilled, HeartFilled, SearchOutlined, UserOutlined, RiseOutlined, FallOutlined } from '@ant-design/icons'

export { imgPlayed };
export const logo_img = logo;
// data NAV-TABS
export const search = <SearchOutlined />
export const HOME_PAGE = '/Home';
export const DASH_BOARD = '/Dashboard'
export const EARNINGS = '/Earning';
export const MESSAGE = '/Message';
export const SIGNIN = '/SignIn';
export const CHILL_BEAT = '/ChillBeat';
export const MUSIC = '/Listen_to_Music'
export const navTabs = [
    {
        url: HOME_PAGE,
        icon: <HomeFilled />,
    },
    {
        url: DASH_BOARD,
        icon: <AreaChartOutlined />,
    },
    {
        url: EARNINGS,
        icon: <HeartFilled />,
    },
    {
        url: MESSAGE,
        icon: <MessageFilled />,
    },
]

// DATA HOME_TRENDDING
export const imgCarousel = [img_1, img_2, img_3, img_4, img_5];

// DATA HOME_ARTIST
export const artistImg = artist_img;

// DATA HOME_NEWS
export const dataNews = [
    {
        img: new_img_4,
        title: 'Thomas Bank',
        des: 'Working in his new album in 2021',
        col: ''
    },
    {
        img: new_img_5,
        title: 'Art',
        des: 'Music and museums',
        col: ''
    },
    {
        img: new_img_1,
        title: 'News',
        des: 'Chill out for our mind',
        col: ''
    },
    {
        img: new_img_2,
        title: 'EDM',
        des: 'Muisc remix 2021',
        col: 'col_1/3'

    },
    {
        img: new_img_3,
        title: 'Aucostic',
        des: 'Guitar',
        col: ''
    },
];

// DATA HOME_POPULAR
export const categery = [
    'Blues', 'Classical', 'Country', 'Dance', 'Electronic', 'Hip-Hop', 'Jazz', 'Latin', 'Metal', 'Party', 'R&B/Soul'
    , 'Reggae / Dancehall', 'Soundtracks', 'Would'
]
export const imgPopular = [
    {
        img: popular_img_6,
        title: 'Will Moon'
    },
    {
        img: popular_img_4,
        title: 'loas'
    },
    {
        img: popular_img_2,
        title: 'Sasew'
    },
    {
        img: popular_img_1,
        title: 'Tom Krugg'
    },
    {
        img: popular_img_3,
        title: 'Waslae'
    },
    {
        img: popular_img_5,
        title: 'Maesse'
    },
]

// data dashboard

const user_icon = <UserOutlined />
const mark_icon = <RiseOutlined />
const perform_icon = <FallOutlined />
const music_icon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-music-note-beamed" viewBox="0 0 16 16">
    <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
    <path fillRule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
    <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
</svg>
export const icon_array = [
    {
        icon: user_icon,
        title: 'Listeners',
    },
    {
        icon: mark_icon,
        title: 'Followers',
    },
    {
        icon: perform_icon,
        title: 'Unfollows',
    },
    {
        icon: music_icon,
        title: 'New streams',
    },
]

// data list fan

export const listFan = [
    {
        id: 1,
        img: avt_1,
        name: 'Annette Watson'
    },
    {
        id: 2,
        img: avt_2,
        name: 'Calvin Steward'
    },
    {
        id: 3,
        img: avt_3,
        name: 'Ralph Richards'
    },
    {
        id: 4,
        img: avt_4,
        name: 'Bernard Murphy'
    },
    {
        id: 5,
        img: avt_5,
        name: 'Arlene Robertson'
    },
    {
        id: 6,
        img: avt_6,
        name: 'Jane Lane'
    },
    {
        id: 7,
        img: avt_7,
        name: 'Pat Mckinney'
    },
]

export const dataMusic = [
    {
        title: 'At My Worst',
        audio: audio_0,
        single: 'Pink Sweat$',
        time: '5:00',
    },
    {
        title: 'Beautiful Mistakes',
        audio: audio_1,
        single: 'Maroon 5 Megan Thee Stallion',
        time: '4:23',
    },
    {
        title: 'Your Power',
        audio: audio_2,
        single: 'Billie Eilish',
        time: '3:50',
    },
    {
        title: 'Giữa Đại Lộ Đông Tây',
        audio: audio_3,
        single: 'Uyên Linh',
        time: '4:12',
    },
    {
        title: 'Hold On',
        audio: audio_4,
        single: 'Justin Bieber',
        time: '4:23',
    },
    {
        title: 'Khi Em Lớn',
        audio: audio_5,
        single: 'Orange Hoang Dung',
        time: '4:44',
    },
    {
        title: 'Kiss Me More (Feat. SZA)',
        audio: audio_6,
        single: 'Doja Cat, SZA',
        time: '3:35',
    },
    {
        title: 'Leave The Door Open',
        audio: audio_7,
        single: 'Bruno Mars,Anderson .Paak,Silk Sonic',
        time: '5:10',
    },
    {
        title: 'Nàng Thơ',
        audio: audio_8,
        single: 'Hoàng Dũng',
        time: '4:08',
    },
    {
        title: 'On The Ground',
        audio: audio_9,
        single: 'ROSÉ',
        time: '3:32',
    },
    {
        title: 'Peaches (Feat. Daniel Caesar & Giveon)',
        audio: audio_10,
        single: 'Justin Bieber, Daniel Caesar, Giveon',
        time: '5:00',
    },
    {
        title: 'Phải Chăng Em Đã Yêu?',
        audio: audio_11,
        single: 'Juky SanREDT',
        time: '4:23',
    },
    {
        title: 'Sài Gòn Đau Lòng Quá',
        audio: audio_12,
        single: 'Hứa Kim Tuyền, Hoàng Duyên',
        time: '3:50',
    },
    {
        title: 'Save Your Tears',
        audio: audio_13,
        single: 'The Weeknd Ariana Grande',
        time: '4:12',
    },
    {
        title: 'Từ Thích Thích Thành Thương Thương',
        audio: audio_14,
        single: 'AMEE Hoang Dung',
        time: '4:23',
    },
    {
        title: 'Tháng Mấy Em Nhớ Anh',
        audio: audio_15,
        single: 'Ha Anh Tuan',
        time: '4:44',
    },
    {
        title: 'Xin Đừng Nhấc Máy',
        audio: audio_16,
        single: 'B Ray, Han Sara, Masew',
        time: '3:35',
    },
    {
        title: 'Yêu Thầm ',
        audio: audio_17,
        single: 'Hoàng Yến Chibi Tlinh, TDK',
        time: '5:10',
    },
]

export const dataMusicDemo = [
    {
        title: 'At My Worst',
        audio: audio_0,
        single: 'Pink Sweat$',
        time: '5:00',
    },
    {
        title: 'Beautiful Mistakes',
        audio: audio_1,
        single: 'Maroon 5 Megan Thee Stallion',
        time: '4:23',
    },
    {
        title: 'Your Power',
        audio: audio_2,
        single: 'Billie Eilish',
        time: '3:50',
    },
    {
        title: 'Giữa Đại Lộ Đông Tây',
        audio: audio_3,
        single: 'Uyên Linh',
        time: '4:12',
    },
    {
        title: 'Hold On',
        audio: audio_4,
        single: 'Justin Bieber',
        time: '4:23',
    },
    {
        title: 'Khi Em Lớn',
        audio: audio_5,
        single: 'Orange Hoang Dung',
        time: '4:44',
    },
]
