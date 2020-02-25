function spookText() {
    let luck = Math.floor(Math.random() * 10);
    console.log(luck)
    if (luck === 1) {
        window.location.replace("http://lukashelp.me");
    }
}