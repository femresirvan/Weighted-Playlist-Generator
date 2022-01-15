import '../css/main.css';
import '../css/length.css';
import '../css/playlist.css';
import {
    submitBtnHandler,
    finishBtnHandler,
    lengthSubmitBtnHandler
} from './components/form';
let playlist = new Array();

submitBtnHandler(playlist);
finishBtnHandler(playlist);
lengthSubmitBtnHandler();