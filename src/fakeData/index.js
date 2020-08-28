import css from "./css";
import javascript from "./javascript";
import html from "./html";
import sQl from "./sql";
import objectOriented from "./objectOriented";


const fakeData = [...css, ...javascript, ...html, ...sQl,...objectOriented];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;