(function() {
    const cohort7 = [
        {
            name : "oshioke",
            gender: "Male",
            Age: 17
        },
        {
            name: "Tobi",
            gender: "Male",
            Age: 25
        },
        {
            name: "Love",
            gender: "Female",
            Age: 16
        },
        {
            name: "Janet",
            gender: "Female",
            Age: 20
        }
    ]
    //1
    const lastName: string[] = ["Ikpea", "Ligali", "Okum", "Ishola"];
    cohort7.map((value, index) => {
        value.name = value.name + " " + lastName[index];
    });
    console.log(cohort7);

    console.log();
    //2
    const newArrayContainingOnlyFemales = cohort7.filter(element => element.gender == "Female");
    console.log(newArrayContainingOnlyFemales);
    console.log();


    //3
    let favourite_foods: string[] = ["beans", "garri", "rice", "moimoi"];
    let count: number = 0;
    cohort7.forEach(element =>{
        element["favourite_food"] = favourite_foods[count];
        count += 1;
    })
    console.log();
    console.log(cohort7);

    //4
    const newArrayOfAge = cohort7.filter(element => element.Age > 20);
    console.log(newArrayOfAge);

    // console.log(cohort7);

}());