const InputFontSizeControl = document.querySelector("input#font-size-control");
const SpanText = document.querySelector('span#text');

const NewFontSize = () => {
SpanText.style.fontSize = `${InputFontSizeControl.value}px`
}

InputFontSizeControl.addEventListener("input", NewFontSize )
