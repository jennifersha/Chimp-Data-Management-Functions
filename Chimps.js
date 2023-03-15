
// JENNIFER     


let chimps = [
    {name: "Azibo", gender: "male", birthYear: 2010, birthPalce: "Leipzig"},
      {name: "Bongolo", gender: "male", birthYear: 2011, birthPalce: "Leipzig"},
      {name: "Corrie", gender: "female", birthYear: 2010, birthPalce: "Koln"},
      {name: "Dorian", gender: "female", birthYear: 2011, birthPalce: "Bohn"},
      {name: "Frodo", gender: "male", birthYear: 2011, birthPalce: "Leipzig"},
    {name: "Matata", gender: "female", birthYear: 2012, birthPalce: "Berlin"},
    {name: "Baboo", gender: "male", birthYear: 2012, birthPalce: "Koln"}
    ];

    function getNames() {
        let a = []; // build empty array
        chimps.forEach((item,index) => a[index] = item.name);
        a.sort(compare1);
        return a;
    }
    function amountByGender(gender) {
    
        if (gender == undefined) {
            gender = "female";
        }
        let number = chimps.filter(item => item.gender == gender );
        return number.length;
    }

    function compare1(a,b) {
        ind = 0;
        
        while (ind < a.length && ind < b.length) {
        if (a.charCodeAt(ind) > b.charCodeAt(ind)) {
         return 1;
        }
        else if (a.charCodeAt(ind) < b.charCodeAt(ind)){
         return -1;
        } 
            ind++;
        }
        return 0;
    }
    
    function howManyFromPlace(place){
    let res;
    res=chimps.filter(function(item){
        return item[3]=== place;
    });
    }
    function groupByPlace() {
        let a = [];
        for (let i = 0 , k = 0; i < chimps.length ; i++) {
            for (;k < a.length ; k++) {
                if (chimps[i].birthPalce === a[k].birthPlace) {
                    a[k].amount++;
                    break;
                }
            }
            if(k === a.length) {
                    a[k] = {birthPlace : chimps[i].birthPalce , amount : 1};
                    
                    k = 0;
                }
        }
        a.sort(compare2);
        return a;
    }
    
    function compare2(a,b) {
        if (a.amount > b.amount) {
         return -1;
        }
        else if (a.amount < b.amount){
        return 1;
        } 
        else {
            return 0;
        }
    }

    function createFunctionOfLetter(letter){
		let result=[]
    for(i =0;i<chimps.length;i++){
    	if(chimps[i][0][0] == letter){
      	result.push(chimps[i][0])
      }
    }
    return result;
}
function groupByYear() {
    let arr = [];
    for (let i = 0 , j = 0; i < chimps.length ; i++) {
        for (; j < arr.length ; j++) {
            if (chimps[i].birthYear === arr[j].year) {
                break;
            }
        }
        if(j === arr.length) {
                arr[j] = {year : chimps[i].birthYear , apes : chimps.filter(item => item.birthYear == chimps[i].birthYear)};
                
                j = 0;
            }
    }
    
    return arr;
}