const progressPercent = document.querySelector("h2");
const progressFill = document.querySelector(".progress-fill");
const progressBar = document.querySelector(".progress-bar");
const btn = document.querySelector("button");

function handleIncrement(percent) {
    progressPercent.innerText = `${percent}%`;
    progressFill.style.width = percent + "%";
}

function handleEvent(value) {
    btn.disabled = value;
    btn.innerText = value ? 'Downloading...' : 'Download'
    btn.style.cursor = value ? 'progress' : 'pointer'
    progressBar.style.display = value ? "block" : "none";
}

btn.addEventListener("click", () => {
    handleEvent(true)
    let progress = 0;
    const myInterval = setInterval(inProgress, 200);
    function inProgress() {
        if (progress === 100) {
            clearInterval(myInterval);
            handleEvent(false)
        } else {
            progress++;
            handleIncrement(progress);
        }
    }
});
