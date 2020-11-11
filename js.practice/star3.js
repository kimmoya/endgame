// 등기수열( 2배씩 찍히게)

for(let star = 1; star <= 16; star *= 2){
    console.log('*'.repeat(star))
}

//공백이 앞에 있는 별찍기
for(let star = 5; star >= 1; star -= 1){
    console.log(' '.repeat(5-star) + '*'.repeat(star))
}

//나누기를 사용한 공백찍기

for(let star = 9; star >= 1; star -= 2){
    console.log(' '.repeat((9-star)/2) + '*'.repeat(star))
}

// 강의에 숙제

for(let star = 4; star >= -4; star -= 2){
    console.log(' '.repeat(Math.abs(star)/2) + '*'.repeat(5 - Math.abs(star)))
}
