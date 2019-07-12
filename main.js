var button = $(".button");

button.on("click", showDestination);
var destination = ["Ko Phi Phi, Thailand", "Hidden Beach, Marieta Islands", "Huacachina, Peru", "Blagaj Tekke, Bosnia", "Lake Hillier, Australia", "Silfra fissure, Iceland", "Isola Bella, Italy", "Popeye Village, Malta", "Dongchuan Red Land, China", "Door to Hell, Turkmenistan", "Giola, Greece"];
// var places = {
//   "Ko Phi Phi": "http://daretotravelalone.com/wp-content/uploads/2017/05/Ko-Phi-Phi-Tailand.jpg";
// }
var pic = $("#image");
function showDestination(){
  event.preventDefault();
  var add = $(".add");

  var randomDec = Math.random();
  var randomNum = randomDec * destination.length;
  var index = Math.floor(randomNum);
  var chosen_destination = destination[index];
  if (index==0) {
    pic.attr("src","http://daretotravelalone.com/wp-content/uploads/2017/05/Ko-Phi-Phi-Tailand.jpg");
  }
  else if (index==1) {
    pic.attr("src","https://amp.businessinsider.com/images/56da03b56e97c621048bba92-1136-852.jpg");
  }
  else if (index==2) {
    pic.attr("src","https://amp.businessinsider.com/images/56da03936e97c625048bba5b-1136-852.jpg");
  }
  else if (index==3) {
    pic.attr("src","https://amp.businessinsider.com/images/56da05a62e526555008bb9a1-1136-852.jpg");
  }
  else if (index==4) {
    pic.attr("src","https://amp.businessinsider.com/images/56dd94119105842a008b4867-2560-1920.jpg");
  }
  else if (index==5) {
    pic.attr("src","https://amp.businessinsider.com/images/56dd9add9105844e018b4874-1136-852.jpg");
  }
  else if (index==6) {
    pic.attr("src","https://amp.businessinsider.com/images/56ddaed852bcd022008b4916-1334-1001.jpg");
  }
  else if (index==7) {
    pic.attr("src","https://amp.businessinsider.com/images/56ddabbd910584cc008b4927-1136-852.jpg");
  }
  else if (index==8) {
    pic.attr("src","https://amp.businessinsider.com/images/56de033a9105841c008b4b87-1136-852.jpg");
  }
  else if (index==9) {
    pic.attr("src","https://amp.businessinsider.com/images/56defd7a91058424008b4d7b-1536-1152.jpg");
  }
  else {
    pic.attr("src","https://amp.businessinsider.com/images/56dd9d3a910584145c8b4620-1136-852.jpg");
  }

  add.text(`${chosen_destination}`);


}
