const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function askQuestion(query) {
    return new Promise(resolve => readline.question(query, ans => {
      resolve(ans);
      readline.close();
    }));
  }
  
  async function main() {
    const num1 = parseFloat(await askQuestion('첫 번째 숫자를 입력하세요: '));
    const operator = await askQuestion('연산자를 입력하세요 (+, -, *, /): ');
    const num2 = parseFloat(await askQuestion('두 번째 숫자를 입력하세요: '));
  
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = '0으로 나눌 수 없습니다.';
        }
        break;
      default:
        console.log('유효하지 않은 연산자입니다.');
        return;
    }
  
    console.log(`결과: ${result}`);
  }
  
  main();
  