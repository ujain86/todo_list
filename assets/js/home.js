// Setting background color of category using javascript

var li = document.getElementsByClassName('li');

console.log(li.length);

for(let i=0; i<=li.length; i++){
if(li[i].innerText == 'PERSONAL'){
  li[i].style.backgroundColor = 'purple';
}

else if(li[i].innerText == 'WORK'){
  li[i].style.backgroundColor = 'blue';
}

else if(li[i].innerText == 'OTHER'){
  li[i].style.backgroundColor = 'orange';
}
}