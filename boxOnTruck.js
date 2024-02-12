function getMaxTotalUnit(boxTypes, truckSize){
    boxTypes.sort((a,b)=>b[1] - a[1]);
    let N = boxTypes.length;
    let onTruck = 0;
    let maxTotal = 0;
    for(let i=0; i<N; i++){
        let need = truckSize - onTruck;
        if(need > 0){
            if(need >= boxTypes[i][0]){
                onTruck += boxTypes[i][0];
                maxTotal += boxTypes[i][0] * boxTypes[i][1];
            } else {
                onTruck += need;
                maxTotal += need * boxTypes[i][1];
            }
        } else {
            break;
        }
    }
    return maxTotal;
}

let boxTypes = [[1,3],[2,2],[3,1]];
let truckSize = 4;

console.log(getMaxTotalUnit(boxTypes, truckSize));
console.log(getMaxTotalUnit([[5,10],[2,5],[4,7],[3,9]], 10));

// Time Complexity: O(nlogn) as sort() is used here.
// Space Complexity: O(1) as sorted the input array, did not assigned to any extra space. 