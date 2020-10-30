//문자열 내 마음대로 정렬하기

function solution(strings, n) {
    strings.sort();
    strings.sort(function(a, b) {
        if(a.charAt(n) > b.charAt(n)) {
                return 1;
            }
        if (a.charAt(n) < b.charAt(n)) {
                 return -1;
             }
        return 0;
    });
    return strings;
}