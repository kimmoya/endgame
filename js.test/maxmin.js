function solution(n, m) {
    let max, min;
    for (let i = 0; i <= m; i++) {
      max = !(n % i) && !(m % i) ? i : max;
    }
    min = (n * m) / max;
    return [max, min];
  }