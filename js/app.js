const siderEl = document.querySelector(".sidebar");
console.log(siderEl);

function toggleSidebar() {
    siderEl.classList.toggle("show");
}
function hideSidebar() {
    siderEl.classList.remove("show");
}