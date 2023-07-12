var fetchUrl = 'https://api.npoint.io/222da154d1ceece9c1ee';
let boozeobject = null;
var leftsidelist = document.getElementById('leftsidelist');
var leftcalories = document.getElementById('leftcalories');
var rightsidelist = document.getElementById('rightsidelist');
var rightcalories = document.getElementById('rightcalories');
var mainresults = document.getElementById('mainresults');
var lessmorespan = document.getElementById('lessmore');
var resultulon = document.getElementById('resulto');
var resultstext = document.getElementById('resultstext');

var fatto = document.getElementById('fatto');
var thinno = document.getElementById('thinno');
var actionstaken = 0;

var left = 0;
var right = 0;
var lessmore = '';

var alldata = null;

function getLeft(){
var getValue = leftsidelist.selectedOptions[0].dataset.calories;
left = getValue;
leftcalories.innerHTML = left;
actionstaken = actionstaken+1;
getResults(right, left);
}

function getRight(){
var getValue = rightsidelist.selectedOptions[0].dataset.calories;
right = getValue;
rightcalories.innerHTML = right;
actionstaken = actionstaken+1;
getResults(right, left);
}

var getValue = leftsidelist.selectedOptions[0].value;

function getResults(a, b){
const firstnum = parseInt(a);
const secondnum = parseInt(b);
let mainresult = (secondnum-firstnum);
resultulon.innerHTML = mainresult;
resultstext.style.display= 'block';
// console.log(actionstaken);
if(actionstaken===2){
if (mainresult>0) {
lessmore = 'more';
thinno.style.display= 'none';
fatto.style.display= 'block';
actionstaken=0;
} else {
    lessmore = 'less';
    thinno.style.display= 'block';
fatto.style.display= 'none';
actionstaken=0;
}

} else{
    // console.log(actionstaken);
}


lessmorespan.innerHTML = lessmore;

}


function mainFunction(){
alldata = boozeobject;


    thinno.style.display= 'none';
fatto.style.display= 'none';
resultstext.style.display= 'none';


for (const key in alldata) {
        let additem = document.createElement('option'); // is a node
        const value = alldata[key];
        additem.innerHTML = value.title;
        additem.dataset.calories = value.calories;
        leftsidelist.appendChild(additem);
}

for (const key in alldata) {
        let additem = document.createElement('option'); // is a node
        const value = alldata[key];
        additem.innerHTML = value.title;
        additem.dataset.calories = value.calories;
        rightsidelist.appendChild(additem);
}




}




async function getResponse() {
    const response = await fetch(
       fetchUrl,
        {
            method: 'GET',
            headers: {
                // 'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
                // 'x-rapidapi-key': 'your_api_key'
            }
        }
    );
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let responso = await response.json();
    boozeobject = responso;
    mainFunction();
}


document.addEventListener("DOMContentLoaded", function() {
getResponse();
});