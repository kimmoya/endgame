// 수박수박수

function solution(n) {
    let answer = '';
    for (let i=0; i<n; i++){
        answer += i % 2 == 0 ? '수' : '박' ;
        // ? > i를 n으로 나누어서 0이냐 ?
        // : > 맞으면 앞에꺼를 넣고 틀리면 뒤에거를 넣고
        // if문을 사용하지 않고 사용 할 수 있음
    }
    return answer 
}