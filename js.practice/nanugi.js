function solution(arr, divisor) {
    const answer = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]%divisor ===0){
            answer.push(arr[i])
        }
    }
    answer.sort((a,b)=>a-b)
    if(answer.length === 0){
        answer.push(-1)
    }
    return answer;
}


// 직접 풀어본 거
// function solution(arr,divisor) {
//     const answer = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % divisor === 0) {
//             answer.push(arr[i])
//             answer.sort((a,b)=>a-b)
//         } else if(answer.length === 0) {
//                 answer.push(-1)
//             }
//         }
//         return answer;
//     }
    
    // function solution(arr,divisor) {
    //     const answer = [];
    //     for(let i = 0; i < arr.length; i++){
    //         if(answer.length === 0){
    //             answer.push(-1)
    //         } else if (arr[i] % divisor === 0){
    //             answer.push(arr[i])
    //             answer.sort((a,b) => a - b)
    //         }
    //     }
    //         return answer;
    // }