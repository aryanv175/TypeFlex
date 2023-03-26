let shortcuts = {'/linkedin': "https://www.linkedin.com/in/aryanv175/", 
'/ig': "https://www.instagram.com/" , '/name': "Aryan Verma", 'ty': 'Thank you for participating Guys!'}


if (window.location.href === 'https://web.whatsapp.com/') {
    window.addEventListener('load', function () {     
        sleep(8000).then(() => {    
            console.log('whatsapp mode');
            var wsb = document.querySelector('div[class="to2l77zo gfz4du6o ag5g9lrv bze30y65 kao4egtt qh0vvdkp"]');
            console.log(wsb)
            wsb.addEventListener("input" , () => {
                var wsb = document.querySelector("span[class='selectable-text copyable-text']");
                for (var key in shortcuts){
                    if (wsb.innerText.includes(key)) {
                        replacer_textbox(wsb, key);
                    }
                }
            })

            let chat_list = document.querySelector('div[data-testid="chat-list"]');
            console.log(chat_list);
            chat_list.addEventListener('click',  () => {
                console.log('chatbox clicked');
                var wmb = document.querySelector('div[class="to2l77zo gfz4du6o ag5g9lrv bze30y65 kao4egtt"]');
                wmb.addEventListener("input" , () => {
                    var wmb = document.querySelector("span[class='selectable-text copyable-text']");
                    for (var key in shortcuts){
                        if (wmb.innerText.includes(key)) {
                            replacer_textbox(wmb, key);
                        }
                    }
                })
            });
        })
    })   

} else {
    console.log('else mode');
    window.addEventListener('load', function () {     
        sleep(6000).then(() => {
            var all_inputs = document.querySelectorAll('div[role="textbox"], input:not([type=hidden]), textarea');
            console.log(all_inputs);
            for (let i = 0; i < all_inputs.length; i++) {
                all_inputs[i].addEventListener("input" , () => {
                    if (all_inputs[i].nodeName === 'INPUT' || all_inputs[i].nodeName === 'TEXTAREA'){
                        detect_input_value(all_inputs[i]);
                    } else if (all_inputs[i].nodeName === 'DIV') {
                        detect_input_textbox(all_inputs[i]);
                    }      
                })
            }
        })
    })
}



function detect_input_value (my_input) {
    my_input.addEventListener("input" , () => {
        for (var key in shortcuts){
            if (my_input.value.includes(key)){
                replacer_value(my_input, key);
            }
        }
    })
}

function replacer_value(my_input, key) {
    my_input.value = my_input.value.replace(key , shortcuts[key]);
}


function detect_input_textbox (my_input) {
    my_input.addEventListener("input" , () => {
        for (var key in shortcuts){
            if (my_input.innerText.includes(key)) {
                replacer_textbox(my_input, key);
            }
        }
    })
}

function replacer_textbox(my_input, key) {
    my_input.firstChild.nodeValue = my_input.firstChild.nodeValue.replace(key , shortcuts[key]) + ' ';
    //moveCursorToEnd_div(my_input)
}


function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


function PosEnd(end) {
    var len = end.value.length;
      
    // Mostly for Web Browsers
    if (end.setSelectionRange) {
        end.focus();
        end.setSelectionRange(len, len);
    } else if (end.createTextRange) {
        var t = end.createTextRange();
        t.collapse(true);
        t.moveEnd('character', len);
        t.moveStart('character', len);
        t.select();
    }
}

function moveCursorToEnd_div(editableDiv) {
    editableDiv.focus();
    const range = document.createRange();
    range.selectNodeContents(editableDiv);
    range.collapse(false); 
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}
  

/* work under progress to monitor DOM

Monitor the DOM for changes and replace text in new elements
const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const newElements = node.querySelectorAll("input, textarea, [role='textbox'], canvas");
            for (const newElement of newElements) {
            //replaceText(newElement);
            }
        }
        }
    }
}); 
      
observer.observe(document.body, {
    childList: true,
    subtree: true,
});

*/




