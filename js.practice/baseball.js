// //prompt에서 취소를 눌렀을 때 게임을 종료하도록 업그레이드(힌트: prompt때 취소를 누르면 input이 null이 됩니다)
// 중복된 숫자(예: 2254)를 입력했을 때 오류가 표시되도록 업그레이드
// 몇 번째 시도인지 항상 보여주도록 업그레이드(힌트: console.info에 count를 추가하면 됩니다)

const list = [0,1,2,3,4,5,6,7,8,9];
const number = [];
for (let i = 0; i < 4; i++) {
  let select = Math.floor(Math.random() * list.length);
  number[i] = list.splice(select, 1)[0];
}
let count = 1;
let strike = 0;
let ball = 0;
while (count <= 10) {
  let input = prompt('숫자를 입력하세요');
  if (input == null) {
    console.error('취소를 눌러 게임이 종료됩니다.');
    }
  let inputArray = input.split('');
  strike = 0;
  ball = 0;
  count++;
  loop1:
  for (let j = 0; j < 4; j++) {
    loop2:
    for (let k = 0; k < 4; k++) {
        if (j !== k && inputArray[j] == inputArray[k]) {
            alert('중복되는숫자입니다. 기회를한번날리셨습니다')
            break loop1;
            }
      if (number[j] == inputArray[k]) {
        if (j === k) {
          strike++;
        } else {
          ball++;
        }
        break;
      }
    }
  }
  if (strike === 4) {
    console.log('홈런!!! ' + (count - 1) + '번 만에 맞추셨습니다');
    break;
  }
    else if (count > 10) {
    console.error('시도 횟수를 초과하셨습니다. 정답은' + number.join('') + '입니다.');

  } else {
    console.info(inputArray.join('') + ': ' + strike + '스트라이크 ' + ball + '볼 ' + (count - 1) + '번째 시도입니다');
  }
}

//카운트를 다쓴거로 처리하는방법
