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

blocks.forEach(block => {
    console.log(currentHour);
    console.log(block);
    var blockNum = parseInt(block.name);
    console.log(blockNum);
    if (blockNum === currentHour){
        block.style.backgroundColor = '#ff6961';
    } else if (blockNum < currentHour){
        block.style.backgroundColor = '#aaaaaa';
    } else {
        block.style.backgroundColor = '#77dd77';
    }
});


function save (event){
    event.preventDefault();
    alert("Save button clicked.");
    var tc = $("textarea").textContent;
    console.log(tc);
    // str = tc.textContent;
    // console.log(str);

};
$(".saveBtn").on('click', save);
