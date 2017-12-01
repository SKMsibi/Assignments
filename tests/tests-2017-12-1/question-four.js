function arrayFilter(arr, num, str) {
    if (str === "GreaterOrEqual") {
        return arr.filter((element) => element >= num);
    }
}
console.log(arrayFilter([1,2,3,4,5,6,7], 3, "GreaterOrEqual"));
console.log(arrayFilter([1,2,3,4,5,6,7], 5, "LessThan"));
