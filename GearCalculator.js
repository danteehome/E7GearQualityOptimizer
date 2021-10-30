//Attack, Defense, Health, Speed, Crit, CDmg, Eff, ERes, Dac

//main function which takes character's base stat and whether character is using fixed stat or percentage stat.
function Determine(CharacterName, NecklaceMainStat, Ringmainstat, Bootmainstat, Imprint ) {
    //1. get base stat of the character
    Basestat= getBaseStat(CharacterName);
    //2. substract base stat with the main stats and imprint stat.
    if (NecklaceMainStat === 'Health') {
        Health -= Basestat.Health();

    }
    //3. divide subtracted stats with max stat possibly can get. For speed take 4 since 5 is quite impossible. 
    
    
    //4. print result in report manner.
}
//need to create a spreadsheet of character's base stat
//retrive base stat from spreadsheet
function getBaseStat(CharacterName){
    return Basestat;
}
var Basestat = {
    Attack: 'attack',

    Defense: 'defense',

    Health: 'health',

    Speed: 'speed',

    Crit: 'Crit',

    CDmg: 'cdmg',

    Eff: 'eff',

    ERes: 'ERes',

    Dac: 'Dac',

}
function AssignBaseStat(){
    Basestat.Attack= 'newvalue'
}

testfunction = () => {
    console.log(Basestat.Attack);
}
AssignBaseStat();
testfunction();