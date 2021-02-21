import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: "Smells Like Teen Spirit", duration: "5:01" },
    { title: "Don't Speak", duration: "4:23" },
    { title: "Jump Around", duration: "3:37" },
    { title: "All Star", duration: "3:21" }
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

// making use of the combineReducers function, passing an object;
// export using default
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});