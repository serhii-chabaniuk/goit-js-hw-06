console.log(`Number of categories: ${document.querySelectorAll("#categories li.item").length}`);
document.querySelectorAll("#categories *").forEach(element => {
    if (element.nodeName === "H2") {
        console.log(`Category: ${element.outerText}`);
    }
    if (element.nodeName === "UL") {
        console.log(`Elements: ${element.childElementCount}`);
    }
});