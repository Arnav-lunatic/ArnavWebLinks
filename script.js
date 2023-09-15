const linksPanel = document.querySelector('.links-panel')

window.addEventListener('load', () => {
    document.querySelector('.loadingScreen').style.opacity = '0'
    setTimeout(() => {
        document.querySelector('.loadingScreen').style.display = 'none'
    }, 600);
})

const links = [
    {image: 'assests/icons/codepen.png', title: 'Codepen', href: "https://codepen.io/arnav-lunatic"},
    {image: 'assests/icons/github.png', title: 'Github', href: "https://github.com/Arnav-lunatic"},
    {image: 'assests/icons/instagram.png', title: 'Instagram', href: "https://www.instagram.com/arnavbuilds/"},
    {image: 'assests/icons/discord.png', title: 'Discord', href: 'https://discord.gg/BGgkrfkh'},
    {image: 'assests/icons/reddit.png', title: 'Reddit', href: 'https://www.reddit.com/user/OpenUserArnav'},
    {image: 'assests/icons/spotify.png', title: 'Spotify', href: 'https://open.spotify.com/user/stzdaym79wk5kd2upuacqcy5p?si=890bab7ef5164369'},
    {image: 'assests/icons/youtube.png', title: 'Youtube', href: 'https://www.youtube.com/channel/UCN_JtwOt0V7gwYH3Ilxrxrg'},
    {image: 'assests/icons/chess.png', title: 'Chess.com', href: 'https://www.chess.com/member/legendarnav'},

]

links.forEach(link => {
    linksPanel.innerHTML += `
        <a class="link" href= ${link.href} target=”_blank”>
            <img src=${link.image} alt="icon">
            
            <h1 class="title">${link.title}</h1>
        </a>
        `
});