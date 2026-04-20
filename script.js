const userAgent = navigator.userAgent;
const platform = navigator.platform;

localStorage.setItem("browser", userAgent);
localStorage.setItem("platform", platform);

const footer = document.getElementById("footerInfo");

footer.innerHTML =
"Browser: " + localStorage.getItem("browser") +
"<br>Platform: " + localStorage.getItem("platform");
fetch("https://jsonplaceholder.typicode.com/posts/15/comments")
.then(response => response.json())
.then(data => {

const commentsDiv = document.getElementById("comments");

data.forEach(comment => {

const p = document.createElement("p");

p.innerHTML =
"<b>" + comment.name + "</b>: " +
comment.body;

commentsDiv.appendChild(p);

});

})
.catch(error => console.log(error));
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");

setTimeout(() => {
modal.style.display = "block";
}, 10000);

closeBtn.onclick = function(){
modal.style.display = "none";
}
const toggle = document.getElementById("themeToggle");

toggle.onclick = function(){

document.body.classList.toggle("dark");

}
const now = new Date();
const hours = now.getHours();

if(hours >= 7 && hours < 21){
document.body.classList.remove("dark");
}
else{
document.body.classList.add("dark");
}










condition ? value1 : value2;








localStorage.setItem("modalClosed", true);