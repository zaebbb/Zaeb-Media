export const radioPlayerInit = () => {
    const radio = document.querySelector(".radio");
    const radioCoverImg = document.querySelector(".radio-cover__img");
    const radioHeader = document.querySelector(".radio-header__big");
    const radioNavigation = document.querySelector(".radio-navigation");
    const radioItem = document.querySelectorAll(".radio-item");
    const radioStop = document.querySelector(".radio-stop");

    const audio = new Audio();
    audio.type = "audio/aac";

    radioStop.disabled = true;

    const changeIconPlay = () => {
        if(audio.paused){
            radio.classList.remove("play");
            radioStop.classList.add("fa-play");
            radioStop.classList.remove("fa-stop");
        } else {
            radio.classList.add("play");
            radioStop.classList.remove("fa-play");
            radioStop.classList.add("fa-stop");
        }
    }

    const selectItem = elem => {
        radioItem.forEach(item => {
            item.classList.remove("select");
        })
        elem.classList.add("select");
    }

    radioNavigation.addEventListener("change", event => {
        const target = event.target;

        const parent = target.closest(".radio-item");
        selectItem(parent);

        const title = parent.querySelector(".radio-name").textContent;
        radioHeader.textContent = title;
        
        const urlImg = parent.querySelector(".radio-img").src;
        radioCoverImg.src = urlImg;

        audio.src = target.dataset.radioStantion;

        audio.play();

        radioStop.disabled = false;
    });

    radioStop.addEventListener("click", () => {
        if(audio.paused){
            audio.play();
        } else {
            audio.pause();
        }
        changeIconPlay();
    });

    return () => {
        audio.pause();
        changeIconPlay();
    }
};