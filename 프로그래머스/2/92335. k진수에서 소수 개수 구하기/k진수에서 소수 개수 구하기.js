function solution(n, k) {
    return get_k_base(n, k)
        .split('0')
        .filter((base) => get_prime(base))
        .length;;
}

function get_k_base(n, k) {
    const base = [];
    
    while(n) {
        base.push(n % k);
        n = Math.floor(n / k);
    }
    
    return base.reverse().join('');
}

function get_prime(n) {
    if (n < 2) return false;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    
    return true;
}

