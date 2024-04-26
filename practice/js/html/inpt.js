function getPrice() {
    let menu = [];

    for(let i = 0; i < 5; i++) {
        menu[i] = Number(document.getElementById("menu" + (i+1)).value);
        console.log(menu[i]);
    }

    let minB = menu[0];
    let minD = menu[3];
    for(let i = 0; i < menu.length; i++) {
        if(i < 3 && minB > menu[i]) minB = menu[i];
        if(i > 2 && minD > menu[i]) minD = menu[i];
    }
    document.getElementById("value").innerHTML = (minB + minD - 50) + "원";
}