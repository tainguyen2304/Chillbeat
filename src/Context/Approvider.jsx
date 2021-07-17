import { useContext, createContext, useMemo, useState, useRef } from 'react';
import useFirestore from '../Hook/useFireStore';
import { AuthContext } from './AuthProvider';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
  const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState('');
  const [audioIndex, setAudioIndex] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const audioRef = useRef();
  const [songAndSingle, setSongAndSingle] = useState({})
  const {
    user: { uid },
  } = useContext(AuthContext);

  const roomsCondition = useMemo(() => {
    return {
      fieldName: 'members',
      operator: 'array-contains',
      compareValue: uid,
    };
  }, [uid]);
  const rooms = useFirestore('rooms', roomsCondition);

  const selectedRoom = useMemo(
    () => rooms.find((room) => room.id === selectedRoomId) || {},
    [rooms, selectedRoomId]
  );

  const usersCondition = useMemo(() => {
    return {
      fieldName: 'uid',
      operator: 'in',
      compareValue: selectedRoom.members,
    };
  }, [selectedRoom.members]);

  const members = useFirestore('users', usersCondition);
  const clearState = () => {
    setSelectedRoomId('');
    setIsAddRoomVisible(false);
    setIsInviteMemberVisible(false);
  };

  return (
    <AppContext.Provider
      value={{
        rooms,
        members,
        selectedRoom,
        isAddRoomVisible,
        setIsAddRoomVisible,
        selectedRoomId,
        setSelectedRoomId,
        isInviteMemberVisible,
        setIsInviteMemberVisible,
        clearState,
        audioIndex,
        setAudioIndex,
        isPlay,
        setPlay,
        audioRef,
        songAndSingle,
        setSongAndSingle
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
