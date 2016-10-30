var names = ['Russ','Danielle', 'Elleigh', 'the whole Sabia clan'];
var comp = ' is great';

function suckUp (peeps, smooze){
  var fullGreat = [];
  for (var i = 0; i < peeps.length; i += 1){
       fullGreat.push(peeps[i] + smooze)
  }
  return fullGreat;
} 
//activate below to test in console
// console.log(suckUp(names, comp));
//activate for html test below
document.write(suckUp(names, comp));