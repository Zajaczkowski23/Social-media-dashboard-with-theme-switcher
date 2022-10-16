const btn = document.querySelector(".toggle")
const box = document.querySelectorAll('.box')
const textToChange = document.querySelectorAll('.text-to-change')
const subtitle = document.querySelectorAll('.subtitle');
const followers = document.querySelectorAll('.followers-text')

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    document.body.classList.toggle('light')

    box.forEach(element => changeBoxBackground(element))
    textToChange.forEach(text => changeTextColor(text))
    subtitle.forEach(sub => changeSubtitleColor(sub))
    followers.forEach(fol => changeFollowersColor(fol))
})

function changeBoxBackground(e) {
    e.classList.toggle('box-light')
}

function changeTextColor(e) {
    e.classList.toggle('dark-text');
}

function changeSubtitleColor(e) {
    e.classList.toggle('dark-subtitle')
}

function changeFollowersColor(e) {
    e.classList.toggle('dark-followers');
}