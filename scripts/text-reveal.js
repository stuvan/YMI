/* Secion 1 */
const revealText1 = new SplitType('#reveal-text-1 span.reveal-it', { types: 'chars' });
const revealText2 = new SplitType('#reveal-text-2 span.reveal-it', { types: 'chars' });
const revealText3 = new SplitType('#reveal-text-3 span.reveal-it', { types: 'chars' });

const revealTimeline1 = gsap.timeline();
revealTimeline1.from("#section-1 .bg", {
    duration: 1, yPercent: 150, xPercent: 100, ease:
        Power3.easeOut,
});
revealTimeline1.from("#section-1 #cover-image", { duration: 1, opacity: .8, xPercent: -100 })
revealTimeline1.from("#reveal-text-1 .char", { duration: .2, opacity: 0, y: 10, stagger: .05 });
revealTimeline1.from("#reveal-text-2 .char", { duration: .2, opacity: 0, y: 10, stagger: .05 });
revealTimeline1.from("#reveal-text-3 .char", { duration: .2, opacity: 0, y: 10, stagger: .05 });
revealTimeline1.from("#section-1 .magic-star", { duration: .5, opacity: 0 })
revealTimeline1.from("#section-1 #sd-circle", { duration: 1, opacity: 0, ease: "sine.out" });
revealTimeline1.to("#section-1 #sd-circle span", { duration: .5, yPercent: -30, ease: "slow(0.7, 0.7, false)" })
revealTimeline1.to("#section-1 #sd-circle span", { duration: 1.3, yPercent: 30, ease: "slow(0.7, 0.7, false)", yoyo: true, repeat: -1 })

/* section 2 */
function checkForVisibility() {
    var headers = document.querySelectorAll(".reveal-text");
    headers.forEach(function (header) {
        if (isElementInViewport(header)) {
            header.classList.add("reveal-text-visible");
        } else {
            header.classList.remove("reveal-text-visible");
        }
    });
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

if (window.addEventListener) {
    addEventListener("DOMContentLoaded", checkForVisibility, false);
    addEventListener("load", checkForVisibility, false);
    addEventListener("scroll", checkForVisibility, false);
}
