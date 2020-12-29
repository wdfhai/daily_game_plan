
var currentDate = $("#currentDay")[0];
currentDate.textContent = moment().format('LLLL');
var currentHour = parseInt(moment().format('H'));

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
var clearBtn = $("#clearBtn");

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

var v="";

function save (event){
    event.preventDefault();
    var v = parseInt(event.target.value);
    var tasks = ($("#"+v)[0].value);
    localStorage.setItem(v,tasks);
    var storedTasks = localStorage.getItem(v);
    console.log(storedTasks);
};

function refresh (){
    for (i=9;i < 18;i++){
        var storedTasks = localStorage.getItem(i);
        var u = ($("#"+i)[0]) 
        u.value = storedTasks;
    };
};

function clear (){
    localStorage.clear();
    location.reload();
};

clearBtn.on("click", clear);

saveBtn.on("click", save);

refresh();