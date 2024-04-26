// 자동차 객체 리터럴 생성
let car = {
    make: 'Hyundai',
    model: 'Sonata',
    year: 2020,
    color: 'silver',

    // 자동차 정보를 출력하는 메서드
    displayInfo: function() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
    }
};

// 메서드 호출하여 자동차 정보 출력
car.displayInfo();
