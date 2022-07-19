// Write a javascript code to print the highest number in the array.

    var numbers=[-2, -4,  2, 45, 3, 68, 93, 299, 563, 6372, 954, 234,-5,]
    var largest =numbers[0]

    for (var i =0; i <numbers.length;  i++){
    if (largest < numbers[i]) 
    {largest =numbers[i]}
    }   

    alert(largest)
    