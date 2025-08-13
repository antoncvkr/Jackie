document.getElementById('year').textContent = new Date().getFullYear();

let lang = 'ru';
function switchLang() {
    if(lang === 'ru') {
        document.getElementById('bio-text-ru').style.display = 'none';
        document.getElementById('bio-text-en').style.display = 'block';
        document.getElementById('history-text-ru').style.display = 'none';
        document.getElementById('history-text-en').style.display = 'block';
        lang = 'en';
    } else {
        document.getElementById('bio-text-ru').style.display = 'block';
        document.getElementById('bio-text-en').style.display = 'none';
        document.getElementById('history-text-ru').style.display = 'block';
        document.getElementById('history-text-en').style.display = 'none';
        lang = 'ru';
    }
}