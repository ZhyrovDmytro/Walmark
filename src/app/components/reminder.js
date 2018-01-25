import axios from 'axios';
import notify from './../base/notify';
import { notes } from './../constants/notes';
import { messages } from './../constants/messages';

export default () => {
    const APIURl = 'http://localhost:5003/reminders';
    const day = document.querySelector('[data-reminder="day"]');
    const time = document.querySelector('[data-reminder="time"]');
    const setBtn = document.querySelector('[data-reminder="set"]');
    setBtn.disabled = true;
    let SELECTEDDAY = 'Select day';
    let SELECTEDTIME = 'Select time';

    day.addEventListener('change', (event) => {
        const selectEl = event.target;
        SELECTEDDAY = selectEl.value;
        (SELECTEDDAY !== 'Select day') && (SELECTEDTIME !== 'Select time') ? setBtn.disabled = false : setBtn.disabled = true;
    });

    time.addEventListener('change', (event) => {
        const selectEl = event.target;
        SELECTEDTIME = selectEl.value;
        (SELECTEDDAY !== 'Select day') && (SELECTEDTIME !== 'Select time') ? setBtn.disabled = false : setBtn.disabled = true;
    });

    setBtn.addEventListener('click', postResult);

    function postResult() {
        axios({
            method: 'post',
            url: APIURl,
            data: {
                day: SELECTEDDAY,
                time: SELECTEDTIME
            }
        })
            .then(() => {
                notify(`${notes.note} ${notes.info}`, messages.sent);
            })
            .catch(() => {
                notify(`${notes.note} ${notes.warning}`, messages.failed);
            });
    }
};