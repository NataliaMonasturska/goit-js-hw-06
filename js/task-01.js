const lengthItems2 = document.querySelectorAll('li.item')

console.log(`Number of categories:`, lengthItems2.length);
console.log(" ");


const findText = (categories) => {
    for (let category of categories){
      
        
        console.log(`Category:`, category.firstElementChild.textContent);

        console.log(`Elements:`, category.lastElementChild.children.length);
        console.log(" ");
       
    }
};

findText(lengthItems2);




