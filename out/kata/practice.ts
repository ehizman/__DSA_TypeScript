interface objectInterface{
    squirrel:boolean,
    events: string[],
    [key: string]: any
}
let dayOne: objectInterface = {
    squirrel: false,
    events: ["work","touched tree","pizza","running"],
};

console.log(dayOne.squirrel);
dayOne.wolf = true;

