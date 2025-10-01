function solution(users, emoticons) {
    const answer = { plus: 0, price: 0 };
    
    combi(0, []);
    
    return [answer.plus, answer.price];
    
    function combi(depth, arr) {
        if (depth === emoticons.length) {
            const { plus, price } = calculate_price(arr);
            
            if (answer.plus < plus) {
                answer.plus = plus;
                answer.price = price;
            } else if (answer.plus === plus && answer.price < price) {
                answer.price = price;
            }
            
            return;
        }
        
        for (sale of [10, 20, 30, 40]) {
            combi(depth + 1, [...arr, sale]);
        }
    }
    
    function calculate_price(sales) {
        const result = { plus: 0, price: 0 };
        for (const [percent, price] of users) {
            let total_price = 0;
            sales.forEach((sale, i) => {
                if (percent <= sale) {
                    total_price += emoticons[i] * (100 - sale) / 100;
                }
            })

            if (price <= total_price) {
                result.plus += 1;
            } else {
                result.price += total_price;
            }
        }

        return result;
    }
}

