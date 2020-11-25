function solution(array, commands) {
    const answer = [];
        
        for(var i=0; i<commands.length; i++){
            const sliced = array.slice(commands[i][0]-1, commands[i][1]).sort((a, b)=> a-b);
                answer.push(sliced[commands[i][2]-1]);
    }
    return answer;
}


