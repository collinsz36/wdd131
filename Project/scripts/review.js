let reviews = parseInt(localStorage.getItem("reviews"));
if (reviews == null) {
    reviews = 0;
}
else {
    reviews = reviews;
}
reviews++;

localStorage.setItem("reviews", reviews);

document.getElementById("reviewCount").textContent = reviews;

document.getElementById("lastModified").textContent =
`Last Modified: ${document.lastModified}`;