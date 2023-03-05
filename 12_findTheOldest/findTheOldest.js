const findTheOldest = function(people) {
    let today = new Date();
    let year = today.getFullYear()
    let oldest = 0
    let age = 0
    let max_age = 0
    for(person in people){
        if ("yearOfDeath" in people[person]){
            age = people[person].yearOfDeath - people[person].yearOfBirth
        }
        else{
            age = year - people[person].yearOfBirth
        }

        if(age > max_age){
            max_age = age 
            oldest = person 
        }
    }
    return people[oldest]
};

// Do not edit below this line
module.exports = findTheOldest;
