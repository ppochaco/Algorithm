function solution(n, k) {
    k = BigInt(k) - 1n

    const answer = []
    const numbers = Array.from(
        { length: n },
        (_, index) => index + 1
    )

    const factorial = Array(n + 1).fill(1n)

    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * BigInt(i)
    }

    for (let remaining = n; remaining >= 1; remaining--) {
        const groupSize = factorial[remaining - 1]
        const index = Number(k / groupSize)

        answer.push(numbers[index])
        numbers.splice(index, 1)

        k %= groupSize
    }

    return answer
}