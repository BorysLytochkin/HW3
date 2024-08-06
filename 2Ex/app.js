function iterativeOddSumTo(number) {
    if (number < 1) {
        return 0;
    }
    let res = 0;
    for (let i = 1; i <= number; i += 2) {
        res += i;
    }
    return res;
}
    console.log(iterativeOddSumTo(1)) // 1
    console.log(iterativeOddSumTo(10)) // 25