function solution(nums) {
    var answer = 0;
    
    const num_set = new Set(nums);
    const max_sort = nums.length / 2;

    answer = num_set.size < max_sort ? num_set.size : max_sort;
    
    return answer;
}