//query selectors for yarn amount 
const metersOriginal = document.getElementById("metersOriginal"); //innerhtml i guess?? ved de fleste 
const gramsOriginal = document.getElementById("gramsOriginal");
const totalGramsOriginal = document.getElementById("totalGramsOriginal");
const metersAlternative = document.getElementById("metersAlternative");
const gramsAlternative = document.getElementById("gramsAlternative");
const yarnAmountResult = document.getElementById("yarnAmountResult");
const yarnAmountForm = document.getElementById("yarnAmountForm");

//eventlistener for submit button for yarn amount 
yarnAmountForm.addEventListener('submit', e => {
    e.preventDefault();

    console.log(parseInt(metersOriginal.value))
    console.log(typeof(parseInt(metersOriginal.value)))
    let originalMetersNeeded = (parseInt(metersOriginal.value) / parseInt(gramsOriginal.value)) * parseInt(totalGramsOriginal.value); 
    console.log(originalMetersNeeded)
    //meters pr gram * meters = grams needed?
    let result = (parseInt(gramsAlternative.value) / parseInt(metersAlternative.value)) * originalMetersNeeded; 

    yarnAmountResult.innerHTML += `
        <p>Du skal bruge ${result} gram med dit garnalternativ</p>
    `;

    // (Opskriftens garn antal meter pr. nøgle / antal gram i et nøgle) * antal gram der skal bruges = antal meter

// (Alternativ garn antal meter pr nøgle / antal gram i et nøgle) * antal meter fra den anden = garn der skal bruges ?
//MANGLER DER ET STEP??? 
});





//query selectors for garment size
const inputStitches = document.getElementById("inputStitches");
const originalGauge = document.getElementById("originalGauge");
const alternativeGauge = document.getElementById("alternativeGauge");
const sizeResult = document.getElementById("sizeResult");
const sizeSubmit = document.getElementById("sizeSubmit");

//eventlistener for submit button for size calculation 
sizeSubmit.addEventListener('click', e => {
    e.preventDefault; 

    let originalCm = inputStitches / originalGauge * 10; 
    let alternativeCm = inputStitches / alternativeGauge * 10; 

    sizeResult.innerHTML += `
        <p>Opskriftens størrelse i cm: ${orignalCm}</p>
        <p>Størrelse i cm med din strikkefasthed: ${alternativeCm}</p>
        <p><br>Hvis der er stor forskel sammenlignet med den størrelse du vil strikke, kan du prøve at sammenligne med en størrelse større eller mindre.</p>
    `; 

});

// Antal masker det bredeste sted på trøjen/huen etc / antal masker pr 10 cm i opskriften * 10 cm = antal cm på det bredeste punkt 

// Antal masker det bredeste sted på trøjen/huen etc / antal masker pr 10 cm med mit garn * 10 cm = antal cm på det bredeste punkt 
