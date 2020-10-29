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