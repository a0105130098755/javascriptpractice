let menu = [];
let tmp;
tmp = prompt("상덕버거 가격 입력 : ", "");
menu[0] = Number(tmp);
tmp = prompt("중덕버거 가격 입력 : ", "");
menu[1] = Number(tmp);
tmp = prompt("하덕버거 가격 입력 : ", "");
menu[2] = Number(tmp);
tmp = prompt("콜라 가격 입력 : ", "");
menu[3] = Number(tmp);
tmp = prompt("사이다 가격 입력 : ");
menu[4] = Number(tmp);

let minB = menu[0];
let minD = menu[3];
for (let i = 0; i < menu.length; i++) {
    if (i < 3 && minB > menu[i]) minB = menu[i];
    if (i > 2 && minD > menu[i]) minD = menu[i];
};
document.getElementById("value").innerHTML = (minD + minB - 50) + "원";