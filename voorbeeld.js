var nr = 0;

var subject = document.getElementById('subject');
var next = document.getElementById('skip');
var back = document.getElementById('back');

console.dir(subject);

subject.innerHTML = subjects[nr].title;
nr++;
subject.innerHTML = subjects[nr].title;

var next = function(event){
	nr++;
	subject.innerHTML = subject[nr].title;
}

var prev = function(event){
	nr--;
	subject.innerHTML = subject[nr].title;
}

skip.onlick = next;
back.onclick = prev;