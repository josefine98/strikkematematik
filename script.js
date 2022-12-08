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

    let originalMetersNeeded = (parseInt(metersOriginal.value) / parseInt(gramsOriginal.value)) * parseInt(totalGramsOriginal.value); 
    
    let result = (parseInt(gramsAlternative.value) / parseInt(metersAlternative.value)) * originalMetersNeeded; 

    yarnAmountResult.innerHTML = `
        <h2>Resultat:</h2>
        <p>Du skal bruge ${result} gram med dit garnalternativ</p>
    `;
});




//query selectors for garment size
const inputStitches = document.getElementById("inputStitches");
const originalGauge = document.getElementById("originalGauge");
const alternativeGauge = document.getElementById("alternativeGauge");
const sizeResult = document.getElementById("sizeResult");
const sizeForm = document.getElementById("sizeForm");

//eventlistener for submit button for size calculation 
sizeForm.addEventListener('submit', e => {
    e.preventDefault(); 

    let originalCm = parseInt(inputStitches.value) / parseInt(originalGauge.value) * 10; 
    let alternativeCm = parseInt(inputStitches.value) / parseInt(alternativeGauge.value) * 10; 

    sizeResult.innerHTML = `
        <h2>Resultat:</h2>
        <p>Opskriftens størrelse i cm: ${originalCm.toFixed(1)}</p>
        <p>Størrelse i cm med din strikkefasthed: ${alternativeCm.toFixed(1)}</p>
        <p><br>Hvis der er stor forskel sammenlignet med den størrelse du vil strikke, kan du prøve at sammenligne med en størrelse større eller mindre.</p>
    `; 

});
