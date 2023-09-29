

let user = {
   info:{
    name: "Islom",
    surname: "Arabitdiov",
    thirdName: "Bobirovich",
    age:15,
    born:"2008.29.01",
    bodyInfo: {
        bodyType: "Ectomorph=Methomorph",
        weight: 60,
        height:1.76,
        hairColor: "darkBrown",
        eyeColor: "brown",
    },
    city:"Samarkand",
   },
   sports: {
    combatSport:"wresling,judo,jiujitsu,kickboxing,boxing,tеaekwondo",
    otherSport: "swimming,fencing,basketball,football"
   },
   cars: "lamborginiferarri,bugatti,maclaren,BMW,mersedez"
}


let myLaptop ={
    series: "HP",
    nameLaptop: "Victus",
    gen: "15",
    color: "DarkSilver",
    year: 2023,
    screenInfo:{
        diagonal: 15.6,
        matrix: "IPS",
        screen: 'FullHD',
        screenSize: 1920.1080,
        screenLight: "250nit"
    },
    adapters: {
        core: 'IntelCore',
        coreGen: "I5-12450H,",
        cores: "8,16",
        Hz: "4000hz",
        function: "TurboBoost",
        videoAdap: "NvidiaGeforce",
        videoSeries: "RTX",
        videoSeriesGen: "3050"

    }
}




let newObj = Object.assign({}, user, {myLaptop});
let keys = Object.keys(newObj)
let values = Object.values(newObj)

console.log(keys);
console.log(values);
console.log(Object.entries(newObj));




let count = values.reduce((acc, value) => {
  if (typeof value === 'number') {
    acc.numbers++;
  } else if (typeof value === 'string') {
    acc.strings++;
  }
  return acc;
}, { numbers: 0, strings: 0 });

console.log(count);
 

