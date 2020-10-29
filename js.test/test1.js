// 두수를 뽑아 오름차순으로 정렬하기
function solution(numbers) {
    const answer = [];
    let i,j;
    let sum;
    for(i=0;i<numbers.length;i++){
        for(j=i+1;j<numbers.length;j++){
        sum = numbers[i]+numbers[j];
            if(answer.indexOf(sum) === -1){
                answer.push(sum);
            }
        }
    }
    answer.sort(function(a,b){
                return a-b;
                })
    return answer;
}

// 가운데 글자 뽑기
function solution(s) {
    let answer = '';
    let leng = s.length
    
    if(leng % 2 == 0){
        answer=s[leng/2 -1] + s[leng/2]  
    }
    else{
        answer = s[Math.floor(leng/2)]
    }
    return answer;
}