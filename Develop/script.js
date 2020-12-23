// $(document).ready(function () {

var currentDate = $("#currentDay")[0];
currentDate.textContent = moment().format('LLLL');

var currentHour = parseInt(moment().format('LT'));
if (currentHour < 9){
    currentHour = currentHour + 12;
};

var textAreaValues = [9,10,11,12,13,14,15,16,17];
var nineAm = $("#9")[0];
var tenAm = $("#10")[0];
var elevenAm = $("#11")[0];
var twelvePm = $("#12")[0];
var onePm = $("#13")[0];
var twoPm = $("#14")[0];
var threePm = $("#15")[0];
var fourPm = $("#16")[0];
var fivePm = $("#17")[0];
var blocks = [nineAm, tenAm, elevenAm, twelvePm, onePm, twoPm, threePm, fourPm, fivePm];
var saveBtn = $(".saveBtn");

var a = nineAm.textContent;
// console.log(a);

blocks.forEach(block => {
    var blockNum = parseInt(block.name);
    if (blockNum === currentHour){
        block.style.backgroundColor = '#ff6961';
    } else if (blockNum < currentHour){
        block.style.backgroundColor = '#aaaaaa';
    } else {
        block.style.backgroundColor = '#77dd77';
    }
});

var i="";

function save (event){
    event.preventDefault();
    var v = parseInt(event.target.value);
    // console.log(event.target);
    // console.log(v);
    var x = $("#\\[v\\]");
    // console.log(x);
    for (i=0;i < 9;i++){
        var tasks = $(".description")[i].value;
        // console.log(tasks);
        localStorage.setItem(i,tasks);
        var storedTasks = localStorage.getItem(i);
        console.log(storedTasks);
    };
};

function refresh (){
    for (i=0;i < 9;i++){
        var storedTasks = localStorage.getItem(i);
        $(".description")[i].value = storedTasks;
        console.log(storedTasks);
};
};

saveBtn.on("click", save);

$(window).unload(refresh());

// });