var container = document.querySelector('#typing-text-container');

var text = [{
  text: "",
  duration: 1000
},{
  text: "b",
  duration: 200
},{
  text: "br",
  duration: 200
},{
  text: "bri",
  duration: 200
},{
  text: "bria",
  duration: 200
},{
  text: "brian",
  duration: 200
},{
  text: "brian ",
  duration: 300
},{
  text: "brian b",
  duration: 300
},{
  text: "brian ba",
  duration: 300
},{
  text: "brian bar",
  duration: 300
},{
  text: "brian barc",
  duration: 300
},{
  text: "brian barce",
  duration: 300
},{
  text: "brian barcen",
  duration: 300
},{
  text: "brian barcena",
  duration: 300
},{
  text: "brian barcenas",
  duration: 10000
},{
  text: "brian barcenas :)",
  duration: 3000
}]

let index = 0;
function typingThing() {
// DELETE THIS COMMENT IF YOU WANT INFINITE TYPING
  if (index === text.length){
    index = 0;
  }
  //console.log(text[index]);
  container.innerText = text[index].text;
  console.log(index);
  setTimeout(typingThing, text[index].duration);
  index++;
}

typingThing();