import PropTypes from 'prop-types';
import { FileAddOutlined, FileAddFilled } from '@ant-design/icons'
import { addDocument } from 'Components/Firebase/service';
import { useContext } from 'react';
import { AuthContext } from 'Context/AuthProvider';
import { AppContext } from 'Context/Approvider';

AddMusicFavorite.propTypes = {
    nameSingle: PropTypes.string.isRequired,
    nameSong: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};

function AddMusicFavorite({ nameSong, nameSingle, time, audio }) {
    const { user: { uid } } = useContext(AuthContext)
    const { listMusicFavorite } = useContext(AppContext)
    const exist = listMusicFavorite.find(music => music.nameSong === nameSong);

    const handleClick = () => {
        if (!exist) {
            addDocument('MusicFavorite', {
                nameSong,
                nameSingle,
                time,
                audio,
                userId: uid
            })
        }
    }
    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            {exist ? <FileAddFilled style={{color:"hotpink"}} /> : <FileAddOutlined />}
        </div>
    );
}

export default AddMusicFavorite;