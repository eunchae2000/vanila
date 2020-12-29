// object를 배움

/* object = {}, array = []
,(콤마) 빠뜨리지 말기
string 타입은 ""(큰따옴표) 기억하기
*/
const cocoInfo = {
    name : "coco",
    age : 21,
    gender : "Female",
    FavMoovie : "lalaland",
    FavFood : [{name : "lemon", fatty: false},
    {name : "snack", fatty : "true"}]
}

console.log(cocoInfo);

cocoInfo.age = 22;

console.log(cocoInfo);