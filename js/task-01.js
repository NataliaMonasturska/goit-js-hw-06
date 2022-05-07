const Categories = document.querySelector("ul#categories");
const lengthItems = Categories.querySelectorAll("li.item");
console.log(`Number of categories:`, lengthItems.length);
console.log(" ");


const FindText = (Categories) => {
    for (let Category of Categories){
        const Texth2 = Category.querySelector("h2");
        console.log(`Category:`, Texth2.textContent);
       
        const Elements = Category.querySelectorAll("li");
        console.log(`Elements:`, Elements.length);
        console.log(" ");
       
    }
};

FindText(lengthItems);



