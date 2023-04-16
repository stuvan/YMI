class TestimonialPerson {
    constructor(name, imgUrl, review) {
        this.name = name;
        this.imgUrl = imgUrl;
        this.review = review;
    }
}

let persons = [
    new TestimonialPerson("Max", "https://cdn.discordapp.com/avatars/910407524711288864/7ffcbad00b0c35915dcfe08ae7365846", "this is the best server ever, a server where you are finally home! your own home! feels so comfortable here with SO MANY comforting, helpful and sweet people, best owner and mods/admins <3 "),
    new TestimonialPerson("Deepanshu", "https://cdn.discordapp.com/avatars/755733650435342347/58721569b58acbc36b0e3031a33b4b85", "I’ve met a bunch of new people from this server. Everyone I’ve seen has been so kind! "),
    new TestimonialPerson("निसर्ग", "https://cdn.discordapp.com/avatars/880812386045526048/9cdabcf2a902d3b466976a2ba93c9834", "I might be biased because I work for this server, but I really love it <3"),
    new TestimonialPerson("▄︻デG̷a̷n̷g̷s̷t̷e̷r̷══━一", "https://cdn.discordapp.com/avatars/1064187322280722493/730f4c102250c3c3b7471545961061ac", "Excellent server, good events, active and full of friendly people with a good attitude"),
    new TestimonialPerson("Titli 🦋", "https://cdn.discordapp.com/avatars/1089159644729053204/29717095ca1ad7bb3ee57fe95593c346", "The server has actually been a mind-blowing place to hang out and chill. The moderators are quite friendly and helpful when the server members require 'em!"),
    new TestimonialPerson("pizza", "https://cdn.discordapp.com/avatars/1021865279485137018/a_c0c340994d4f9a6c682575b851dcb203", "It is an really good server to chill and hangout the staff team is very friendly and cooperative, They host a lot of amazing events to keep their audience entertained."),


    /* Double */
    new TestimonialPerson("Max", "https://cdn.discordapp.com/avatars/910407524711288864/7ffcbad00b0c35915dcfe08ae7365846", "this is the best server ever, a server where you are finally home! your own home! feels so comfortable here with SO MANY comforting, helpful and sweet people, best owner and mods/admins <3 "),
    new TestimonialPerson("Deepanshu", "https://cdn.discordapp.com/avatars/755733650435342347/58721569b58acbc36b0e3031a33b4b85", "I’ve met a bunch of new people from this server. Everyone I’ve seen has been so kind! "),
    new TestimonialPerson("निसर्ग", "https://cdn.discordapp.com/avatars/880812386045526048/9cdabcf2a902d3b466976a2ba93c9834", "I might be biased because I work for this server, but I really love it <3"),
    new TestimonialPerson("▄︻デG̷a̷n̷g̷s̷t̷e̷r̷══━一", "https://cdn.discordapp.com/avatars/1064187322280722493/730f4c102250c3c3b7471545961061ac", "Excellent server, good events, active and full of friendly people with a good attitude"),
    new TestimonialPerson("Titli 🦋", "https://cdn.discordapp.com/avatars/1089159644729053204/29717095ca1ad7bb3ee57fe95593c346", "The server has actually been a mind-blowing place to hang out and chill. The moderators are quite friendly and helpful when the server members require 'em!"),
    new TestimonialPerson("pizza", "https://cdn.discordapp.com/avatars/1021865279485137018/a_c0c340994d4f9a6c682575b851dcb203", "It is an really good server to chill and hangout the staff team is very friendly and cooperative, They host a lot of amazing events to keep their audience entertained."),
]

const slider = document.getElementById("testimonial-slider");

persons.forEach((v) => {
    const figElem = document.createElement('figure');
    figElem.classList = "font-raleway relative m-2.5 min-w-[400px] max-w-[480px] w-full h-auto text-neutral-600 text-left shadow-[0_0_5px_rgba(0,0,0,0.15)] box-border flex flex-row";

    figElem.innerHTML = `<figcaption
    class=" w-3/5  bg-rose-50 rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none">
    <blockquote
        class="relative py-[25px] px-[50px] text-[0.8em] font-medium align-left m-0 leading-[1.6em] italic before:font-font-awesome before:content-['\\201C'] before:absolute before:text-5xl before:opacity-30 before:not-italic before:top-[25px] before:left-[20px] after:font-font-awesome after:content-['\\201D'] after:absolute after:text-5xl after:opacity-30 after:not-italic after:right-[20px] after:bottom-0">
        ${v.review}
        <div
            class="top-[30px] left-full w-0 h-0 border-l-0 border-l-transparent border-l-solid border-r-[25px] border-r-transparent border-r-solid border-t-[25px] border-t-white border-t-solid m-0 absolute">
        </div>
    </blockquote>
</figcaption>
<img src="${v.imgUrl}" alt="sq-sample10"
    class="float-right max-w-[40%] align-middle rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg"
    width="100%" />
<div class="absolute top-full w-3/5 py-[10px] px-[15px] text-rose-50 m-0 uppercase">
    <span class="font-normal normal-case pl-1">- ${v.name}</span>
</div>`;

    slider.appendChild(figElem);

})