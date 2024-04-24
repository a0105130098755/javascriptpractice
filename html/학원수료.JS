let dDay = new Date("2024-02-21");       
    let now = new Date();   

    let toNow = now.getTime();       
    let toDay = dDay.getTime();  
    let remainTime = toDay - toNow;  

    remainTime = Math.round(remainTime/(1000*60*60*24));  // 밀리 초를 일 수로 계산하고 반올림

    document.querySelector('#result').innerText = remainTime;