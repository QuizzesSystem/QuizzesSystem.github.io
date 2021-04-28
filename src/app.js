import { page, render } from './lib.js';

import { editorPage } from './views/editor/editor.js';

const main = document.getElementById('content');

page('/', decorateContext, editorPage);

page.start();

setUserNav();

function decorateContext(cntx, next) {
    cntx.render = (content) => render(content, main);
    next();
}

function setUserNav() {
    const user = sessionStorage.getItem('userId');

    if (user) {
        document.getElementById('user-nav').style.display = 'block';
        document.getElementById('guest-nav').style.display = 'none';
    } else {
        document.getElementById('user-nav').style.display = 'none';
        document.getElementById('guest-nav').style.display = 'block';
    }
}