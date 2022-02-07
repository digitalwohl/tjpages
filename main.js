import { TJ } from 'tj_comm';

async function getAllWindows() {
    const data = await TJ.chrome.windows.getAll();
    console.log(data);
}

window.getAllWindows = getAllWindows;

async function ready() {
    const loaded = await TJ.sandbox.page.ready();
    console.log(loaded);
}

TJ.chrome.windows.onFocusChanged((data) => {
    console.log(data);
})

// window.addEventListener('load', ready);
window.ready = ready;