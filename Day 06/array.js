// Q1------------------------------------------------------------
function is_array(input){
    return Array.isArray(input);
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

// Q2-------------------------------------------------------------
function array_Clone(input){
    return input.slice(1,3)
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// Q3-------

function first(input,n){
    if (input == null)
        return 0;
    if (n == null)
        return input[0];
    if (n < 0)
        return [];
    return input.slice(0, n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// Q4--------------------------------------------
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","))
console.log(myColor.join(" "))

//Q5--------------------------------
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var n=arr1.length;
var c=0;
var maxc=0;
var ans='';
for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
        if (arr1[i]==arr1[j]){
            c+=1;
            if (c>maxc){
                maxc=c;
                ans=arr1[i];
            }
        }
    }
    c=0;
}
console.log(ans+" ( "+maxc+" times)")