function solution(answers) {
    let first = [1,2,3,4,5];
    let second = [2,1,2,3,2,4,2,5];
    let third = [3,3,1,1,2,2,4,4,5,5];
    let result = [];
    let score = [0,0,0];
   for(let i = 0; i < answers.length; i++) {
       if(answers[i] === first[i % 5] ) {
           score[0] += 1;
       }
       if(answers[i] === second[i % 8] ) {
           score[1] += 1;
       }
       if(answers[i] === third[i % 10] ) {
           score[2] += 1;
       }
   }
    var max = score.reduce(function(a, b) {
        return Math.max(a, b);
    });
    for(let i = 0; i < score.length; i++) {
        if(max === score[i]) {
            result.push(i+1)
        }
    }
    return result
} 