const outputElement=document.querySelector('#output');
const btnCopy=document.querySelector('#btnCopy');
const passwordLengthElement=document.querySelector('#length');
const capitalElement=document.querySelector('#capital')
const smallElement=document.querySelector('#small');
const numberElement=document.querySelector('#number');
const symbolElement=document.querySelector('#symbol');
const frm=document.querySelector('#frm');


btnCopy.addEventListener('click',async()=>
{
    const pass=outputElement.value;
    if(pass){
        await navigator.clipboard.writeText(pass);
        alert("Copied to Clipboard");
    }
    else{
        alert("There is no password to copy");
    }
});


function generateRandomChar(min,max){
    const n=max-min+1;
    return String.fromCharCode(Math.floor(Math.random()*n)+min);
}
function capitalValue(){
    return generateRandomChar(65,90);
}
function smallValue(){
    return generateRandomChar(97,122);
}
function numberValue(){
    const numbers="0123456789";
    return numbers[Math.floor(Math.random()*numbers.length)];
}
function symbolValue(){
    const symbols="~!@#$%^&*()_+|}{PO><\.,;'/";
    return symbols[Math.floor(Math.random()*symbols.length)];
}

const functionArray=[
    {
        element:numberElement,
        fun:numberValue
    },
    {
        element:capitalElement,
        fun:capitalValue
    },
    {
        element:smallElement,
        fun:smallValue
    },
    {
        element:symbolElement,
        fun:symbolValue
    }
];


frm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const len=passwordLengthElement.value;
    let generatePassword="";
    console.log(functionArray);
    const funArray=functionArray.filter(({element})=> element.checked);
    console.log(funArray);
    for(let i=0;i<len;i++){
        const index=Math.floor(Math.random()*funArray.length);
        const letter=funArray[index].fun();
        generatePassword+=letter;
    }

    outputElement.value=generatePassword;
});