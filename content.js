// Define your replacement rules here
const replacements = {
    "#name": "gpt",
    "#example": "example-replacement",
    // Add more rules as needed
  };
  
  // Function to replace text in an element
function replaceText(node) {
    const text = node.textContent;
    let replacedText = text;
    for (const [key, value] of Object.entries(replacements)) {
        const regex = new RegExp(key, "g");
        replacedText = replacedText.replace(regex, value);
    }
    if (replacedText !== text) {
        const newNode = document.createTextNode(replacedText);
        node.parentNode.replaceChild(newNode, node);
    }
}
  
  // Replace text in all supported elements
const elements = document.querySelectorAll("input, textarea, [role='textbox'], canvas");
for (const element of elements) {
    replaceText(element);
}
  
  // Monitor the DOM for changes and replace text in new elements
const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
                const newElements = node.querySelectorAll("input, textarea, [role='textbox'], canvas");
                for (const newElement of newElements) {
                    replaceText(newElement);
                }
            }
        }
    }
});
  
observer.observe(document.body, {
    childList: true,
    subtree: true,
});
  