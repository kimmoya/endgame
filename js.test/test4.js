//같은 숫자는 싫어
//배열을 찾고 배열을 비교해서 같지않은 숫자면 answer에 넣고 같은숫자면 넣지않음
//순서를 지키기위해 0번째 배열부터 검색시작을 한다!

function solution(arr)
{
    const answer = [];
    let i;
    for(i = 0; i<arr.length; i++){
        if(arr[i] != arr[i + 1]){
            answer.push(arr[i]);
        }
    }
    return answer;
}