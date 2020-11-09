let start = '자바스크립트'
while(true){
    let end = prompt(start)
    if(start.length < 4){
        alert('다시입력해주세요')
    }
    if(start[start.length -1] === end[0]){
        alert('딩동댕')
        start = end;
    }else{
        alert('땡')
    }
}

// var word = '제로초초초'
// while(true){
//     var answer = prompt(word)
//     if (word[word.length - 1] === answer[0]){
//         alert('딩동댕');
//         word = answer;
//     } else {
//         alert('땡')
//     }
// }