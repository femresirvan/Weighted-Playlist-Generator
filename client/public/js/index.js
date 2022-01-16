import '../css/main.css';
import '../css/length.css';
import '../css/playlist.css';
import '../css/table.css';
import '../css/carousel.css';
import {
    submitBtnHandler,
    finishBtnHandler,
    lengthSubmitBtnHandler
} from './components/form';
let playlist = new Array();

submitBtnHandler(playlist);
finishBtnHandler(playlist);
lengthSubmitBtnHandler();