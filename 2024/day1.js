arr1 = [3,4,2,1,3,3];
arr2 = [4,3,5,3,9,3];
arr1 = [], arr2 = []; 

$0.innerText.split('\n').forEach(pair=>{
    let [n1,n2]=pair.split('   ');
    arr1.push(parseInt(n1));
    arr2.push(parseInt(n2));
});

// part one
diff = [];
result1 = 0;
arr1_1 = [...arr1], arr2_1 = [...arr2];
len = arr1_1.length;
for (let i = 0; i < len; i++) {
    min1 = arr1_1[0], min2 = arr2_1[0], min1I = 0, min2I = 0;
    for (let j = 0; j < arr1_1.length; j++) {
        if (arr1_1[j] < min1) {
            min1 = arr1_1[j];
            min1I = j;
        }
        if (arr2_1[j] < min2) {
            min2 = arr2_1[j];
            min2I = j;
        }
    }
    diff.push(Math.abs(min1 - min2));
    arr1_1.splice(min1I,1);
    arr2_1.splice(min2I,1);
}
diff.filter(n=>!Number.isNaN(n)).forEach(n=>result1+=n);
console.log("Result 1",result1);

// part two
sim = [];
result2 = 0;
arr1_2 = [...arr1], arr2_2 = [...arr2];
len = arr1_2.length;
for (let i = 0; i < len; i++) {
    n = arr1_2[i];
    count = arr2_2.filter(num=>num==n).length;
    sim.push(n * count);
}
sim.filter(n=>!Number.isNaN(n)).forEach(n=>result2+=n);
console.log("Result 2",result2);