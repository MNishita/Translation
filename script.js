'use script';

const input = document.getElementById('user-input');

const btnTranslate = document.getElementById('btn-translate');

const output = document.getElementById('output');

const url = '	https://api.funtranslations.com/translate/pig-latin.json';



/// functions

const TranslatedUrl = function(text) {
    return `${url}?text=${text}`;
}

const translate = async function(text) {
    const data = await fetch(TranslatedUrl(text));
    const result = await data.json();
    output.innerText = result.contents.translated;
}

btnTranslate.addEventListener('click', () => {
    userText = input.value;
    translate(userText);
});