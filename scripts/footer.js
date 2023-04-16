const footer = document.createElement('footer');

footer.className = "flex items-center justify-center w-full h-auto bg-red-400 p-4";

footer.innerHTML = `<div class="flex flex-col items-center justify-center">
                <div>
                    <a href="https://discord.com/invite/young-minds-of-india-868680062772338688"
                        class="m-4 text-3xl text-white hover:text-blue-600"><i class="fab fa-discord"></i></a>
                    <a href="https://www.instagram.com/young_minds_of_india.official/"
                        class="m-4 text-3xl text-white hover:text-blue-600"><i class="fab fa-instagram"></i></a>
                    <a href="https://twitter.com" class="m-4 text-3xl text-white hover:text-blue-600"><i
                            class="fab fa-twitter"></i></a>
                </div>
                <div>Created by <a href="https://github.com/stuvan">Stuvan</a> with 💙</div>
            </div>`;

document.body.appendChild(footer);