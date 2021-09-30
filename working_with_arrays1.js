(function () {
    var cohort7 = [
        {
            name: "oshioke",
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
    ];
    //1
    var lastName = ["Ikpea", "Ligali", "Okum", "Ishola"];
    cohort7.map(function (value, index) {
        value.name = value.name + " " + lastName[index];
    });
    console.log(cohort7);
    console.log();
    //2
    var newArrayContainingOnlyFemales = cohort7.filter(function (element) { return element.gender == "Female"; });
    console.log(newArrayContainingOnlyFemales);
    console.log();
    //3
    var favourite_foods = ["beans", "garri", "rice", "moimoi"];
    var count = 0;
    cohort7.forEach(function (element) {
        element["favourite_food"] = favourite_foods[count];
        count += 1;
    });
    console.log();
    console.log(cohort7);
    //4
    var newArrayOfAge = cohort7.filter(function (element) { return element.Age > 20; });
    console.log(newArrayOfAge);
    // console.log(cohort7);
}());
