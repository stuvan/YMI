class Team {
    constructor(name, position, imgUrl, twitter = "", instagram = "", facebook = "") {
        this.name = name;
        this.position = position;
        this.imgUrl = imgUrl;
        if (twitter.length) this.twitter = twitter;
        if (instagram.length) this.instagram = instagram;
        if (facebook.length) this.facebook = facebook;
    }
}

const teamArr = [
    new Team("Deepanshu", "Founder", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBW2B8Ihoe_QtaL-G7UbspsJ8U3mi2UzzU9bgbF29KxCL2M6uVx3PB0Iv471kmDcYZES4&usqp=CAU", "https://twitter.com", "https://instagram.com", "https://www.facebook.com/"),
    new Team("Shlok", "Founder", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBW2B8Ihoe_QtaL-G7UbspsJ8U3mi2UzzU9bgbF29KxCL2M6uVx3PB0Iv471kmDcYZES4&usqp=CAU", "https://twitter.com", "https://instagram.com", "https://www.facebook.com/"),
    new Team("Debasish dev", "Web Developer", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBW2B8Ihoe_QtaL-G7UbspsJ8U3mi2UzzU9bgbF29KxCL2M6uVx3PB0Iv471kmDcYZES4&usqp=CAU", "https://twitter.com", "https://instagram.com", "https://www.facebook.com/"),
    new Team("Abhasay", "Web Developer", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBW2B8Ihoe_QtaL-G7UbspsJ8U3mi2UzzU9bgbF29KxCL2M6uVx3PB0Iv471kmDcYZES4&usqp=CAU", "https://twitter.com", "https://instagram.com", "https://www.facebook.com/"),
    new Team("Aryan", "Manager", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBW2B8Ihoe_QtaL-G7UbspsJ8U3mi2UzzU9bgbF29KxCL2M6uVx3PB0Iv471kmDcYZES4&usqp=CAU", "https://twitter.com", "https://instagram.com", "https://www.facebook.com/"),
    new Team("Sana", "Admin", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBW2B8Ihoe_QtaL-G7UbspsJ8U3mi2UzzU9bgbF29KxCL2M6uVx3PB0Iv471kmDcYZES4&usqp=CAU", "https://twitter.com", "https://instagram.com", "https://www.facebook.com/"),
]


const team = document.getElementById('team-container');



teamArr.forEach((v, k) => {
    const teamContainer = document.createElement('div');
    teamContainer.classList = "group relative font-sans-serif w-[220px] h-[220px] hover:h-[260px] bg-rose-50 p-[30px] rounded-[50%] hover:rounded-[10px] shadow-[0_0_22px_#3336] duration-500 mx-[25px] my-12";

    let text;

    text = `
    <div class="relative w-full h-full duration-500 z-10 group-hover:translate-y-[-50px]">

        <img src="${v.imgUrl}"
            alt="${v.name} image" class="w-full rounded-[50%] shadow-[0_0_22px_#3336] duration-500">
    </div>
    <div class="text-center translate-y-[-80px] opacity-0 duration-500 group-hover:opacity-100">
        <h3 class="text-[21px] font-sans-serif">${v.name}</h3>
        <p class="text-[15px] text-[#0c52a1] font-sans-serif mt-[2px] mb-[9px]">${v.position}</p>
        <div class="social-links">`;

    if (v.facebook) {
        text +=
            `<a href="${v.facebook}" class="text-[#333] mr-[15px] font[21px] duration-500 hover:text-[#0c52a1]"><i
        class="fab fa-facebook"></i></a>`;
    }
    if (v.instagram) {
        text +=
            ` <a href="${v.instagram}" class="text-[#333] mr-[15px] font[21px] duration-500 hover:text-[#0c52a1]"><i
        class="fab fa-instagram"></i></a>`;
    }
    if (v.twitter) {
        text +=
            `<a href="${v.twitter}" class="text-[#333] mr-[15px] font[21px] duration-500 hover:text-[#0c52a1]"><i
        class="fab fa-twitter"></i></a>`;
    }
    text += `</div>
    </div>`;

    teamContainer.innerHTML = text;

    team.appendChild(teamContainer)
})