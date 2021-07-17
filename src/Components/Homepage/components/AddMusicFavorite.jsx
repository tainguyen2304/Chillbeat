import PropTypes from 'prop-types';
import { FileAddOutlined, FileAddFilled } from '@ant-design/icons'
import { addDocument } from 'Components/Firebase/service';
import useFirestore from 'Hook/useFireStore';

AddMusicFavorite.propTypes = {
    nameSingle: PropTypes.string.isRequired,
    nameSong: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};

function AddMusicFavorite({ nameSong, nameSingle, time, audio }) {
    const listMusic = useFirestore('MusicFavorite');
    const exist = listMusic.find(music => music.nameSong === nameSong);

    const handleClick = () => {
        if (!exist) {
            addDocument('MusicFavorite', {
                nameSong,
                nameSingle,
                time,
                audio
            })
        }
    }
    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            {exist ? <FileAddFilled /> : <FileAddOutlined />}
        </div>
    );
}

export default AddMusicFavorite;