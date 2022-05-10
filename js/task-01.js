// const categories = document.querySelector("ul#categories");
// const lengthItems = categories.querySelectorAll("li.item");
const lengthItems2 = document.querySelectorAll('li.item')

console.log(`Number of categories:`, lengthItems2.length);
console.log(" ");


const findText = (categories) => {
    for (let category of categories){
        // const texth2 = category.querySelector("h2");
        // const texth2 = category.firstElementChild;
        
        console.log(`Category:`, category.firstElementChild.textContent);
    //    const ul = category.lastElementChild;
        // const elements = category.querySelectorAll("li");
        console.log(`Elements:`, category.lastElementChild.children.length);
        console.log(" ");
       
    }
};

findText(lengthItems2);


// console.log(lengthItems2);



