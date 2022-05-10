const InputFontSizeControl = document.querySelector("input#font-size-control");
const SpanText = document.querySelector('span#text');
SpanText.style.fontSize = `${InputFontSizeControl.value}px`
const NewFontSize = () => {
SpanText.style.fontSize = `${InputFontSizeControl.value}px`
}

InputFontSizeControl.addEventListener("input", NewFontSize )
console.log(InputFontSizeControl.value);