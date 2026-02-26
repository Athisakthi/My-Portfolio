function hireMe() {
alert("Thanks for your interest! Contact me for hiring.");
}

/* Animate skill bars when page loads */

window.onload = () => {
document.querySelectorAll(".progress").forEach(bar => {
bar.style.width = bar.classList.contains("java") ? "90%" :
bar.classList.contains("html") ? "95%" :
bar.classList.contains("css") ? "85%" :
"70%";
});
};
