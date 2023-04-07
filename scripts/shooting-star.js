const stars = document.querySelector("#section-2 .stars")

for(let i = 0; i<=50; i++) {
    const star = document.createElement('div');
    star.className = "star";
    stars.appendChild(star);
}