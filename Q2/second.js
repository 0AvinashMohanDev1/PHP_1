function fraudulent(arr){
    let fraud=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i][2]>=10000){
            if(fraud.includes(arr[i][0])){
                continue;
            }else{
                fraud.push(arr[i][0]);
            }
        }else{
            for(let j=i+1;j<arr.length;j++){
                if(arr[i][1]===arr[j][1]&&arr[i][1]!==arr[j][2]&&arr[j][4]<30){
                    fraud.push(arr[j][0]);
                }
            }
        }
    }
    console.log(fraud);
    
}
// Any transaction greater than or equal to 10000 is considered fraudulent. 
// Any transaction from the same credit card in a different city within 30 minutes is considered fraudulent
 fraudulent([ [1, 1000, 500.00, "“Vadodara”", 0],
              [2, 1000, 500.00, "“Mumbai”", 5],
              [3, 1001, 500.00, "“Mumbai”", 10],
              [4, 1001, 10000.00, "“Mumbai”", 10]])
// Output: [2, 4])