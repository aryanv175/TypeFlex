// global variabls for all shortcuts

let shortcuts = {'/linkedin': "https://www.linkedin.com/in/aryanv175/", 
'/ig': "https://www.instagram.com/cloudkicks.es/" , '/fname': "Aryan"}


if (window.location.href === 'https://chat.openai.com/chat') {
    /* gpt model works on .value */
    console.log("gpt mode");
    var gpt = document.querySelector('textarea');
    detect_input_value(gpt);

} else if (window.location.href === 'https://mail.google.com/*') {
    /* gmail model works on .innerText */
    console.log("gmail mode");
    var gmb = document.querySelector('div[class="Am Al editable LW-avf tS-tW"]');
    detect_input_inner_text(gmb);
    
} else if (window.location.href === 'https://mail.google.com/*') {


}else { 
    /* else model works on .value */
    console.log('else mode');
    const inp = document.querySelectorAll("input")
    for (const inpu of inp){
        detect_input_value(inpu);
    }
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


function detect_input_inner_text (my_input) {
    my_input.addEventListener("input" , () => {
        for (var key in shortcuts){
            if (my_input.innerText.includes(key)) {
                replacer_inner_text(my_input, key);
            }
        }
    })
}

function replacer_inner_text(my_input, key) {
    my_input.innerText = my_input.innerText.replace(key , shortcuts[key]);
}


/*
Text replacer for whatsapp message box 

const dummy = document.querySelector("div[class='fd365im1 to2l77zo bbv8nyr4 gfz4du6o ag5g9lrv bze30y65 kao4egtt']");
const wmb = document.querySelector("span[class='selectable-text copyable-text']");
dummy.addEventListener("input" , () => {
    const substr1 = ['/linkedin', "https://www.linkedin.com/in/aryanv175/"];
    if (dummy.innerText.includes(substr1[0])) {
        console.log('I am ready to replace');
        replacer(wmb, substr1);
    }
})

function replacer(my_input, substr) {
    my_input.firstChild.nodeValue = my_input.firstChild.nodeValue.replace(substr[0] , substr[1]) + ' ';
    console.log('replacer was called');
}

*/



/* Text replacer for whatsapp search box 


var gmb = document.querySelector('div[role="textbox"]');
gmb.addEventListener("input" , () => {
    var gmb = document.querySelector("span[class='selectable-text copyable-text']");
    const substr1 = ['/linkedin', "https://www.linkedin.com/in/aryanv175/"];
    if (gmb.innerText.includes(substr1[0])) {
        console.log('I am ready to replace');
        replacer(gmb, substr1);
    }
})

function replacer(my_input, substr) {
    my_input.firstChild.nodeValue = my_input.firstChild.nodeValue.replace(substr[0] , substr[1]) + ' ';
    console.log('replacer was called');
}


const wsb = document.querySelector("div[class='Er7QU copyable-text selectable-text']");
wsb.addEventListener("input" , () => {
    console.log(wsb.innerText);
    const substr1 = ['/linkedin', "https://www.linkedin.com/in/aryanv175/"];
    if (wsb.innerText.includes(substr1[0])) {
        console.log('I am ready to replace');
        replacer(wsb, substr1);
    }
})


function replacer(my_input, substr) {
    my_input.innerText = my_input.innerText.replace(substr[0] , substr[1]);
    console.log('replacer was called');
}
*/


/* 

linkedin post box 
const lmb = document.querySelector("div[class='ql-editor']");
lmb.addEventListener("input" , () => {
    console.log(lmb.innerText);
    const substr1 = ['/linkedin', "https://www.linkedin.com/in/aryanv175/"];
    if (lmb.innerText.includes(substr1[0])) {
        console.log('I am ready to replace');
        replacer(lmb, substr1);
    }
})


function replacer(my_input, substr) {
    my_input.innerText = my_input.innerText.replace(substr[0] , substr[1]);
    console.log('replacer was called');
}
*/

/* 

snap message box 
const smb = document.querySelector("div[class='euyIb']");
smb.innerText = 'changed';

*/



