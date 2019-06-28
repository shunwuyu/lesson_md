const createPhoneNumber = (arr) => "(" + arr[0] + arr[1] + arr[2] + ") " + arr[3] + arr[4] + arr[5] + "-" + arr[6] + arr[7] + arr[8] + arr[9]

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));