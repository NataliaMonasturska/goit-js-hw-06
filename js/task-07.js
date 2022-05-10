const inputFontSizeControl = document.querySelector("input#font-size-control");
const spanText = document.querySelector('span#text');
spanText.style.fontSize = `${inputFontSizeControl.value}px`
const NewFontSize = () => {
spanText.style.fontSize = `${inputFontSizeControl.value}px`
}

inputFontSizeControl.addEventListener("input", NewFontSize )
