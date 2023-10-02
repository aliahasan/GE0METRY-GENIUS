

// reusable function----> reduce duplicate code
function  getInputValueById(inputFieldById){
    const inputField = document.getElementById(inputFieldById);
    const inputFieldText = inputField.value
    const inputFieldValue = parseFloat(inputFieldText);
    return inputFieldValue;
}

// set  Area Field  text / value
function areaFieldValue (areaFiledId , area){
    const areaValue  = document.getElementById(areaFiledId);
    areaValue.innerText = area;
}

// TRIANGULAR AREA CALCULATE;
function calculateTriangleArea(){
    const base = getInputValueById('triangle-base');
    const height = getInputValueById('triangle-height');
    const area = 0.5 * base * height;
    areaFieldValue('triangle-area', area);
    
}
// RECTANGULAR AREA CALCULATOR;
function  calculateRectangleArea(){
    const length = getInputValueById('rectangle-length');
    const width = getInputValueById('rectangle-width');
    const area = length * width;
    areaFieldValue('rectangle-area', area);
}

// PARALLELOGRAM AREA CALCULATE
function calculateParallelogramArea(){
    const base =  getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    
    if(isNaN(base) || isNaN(height)){
        alert('please insert a number!');
        return        
        }
    const area = base * height;    
    areaFieldValue('parallelogram-area', area);
}

// ELLIPSE AREA CALCULATE
function calculateEllipseArea(){
    const majorEllipseRadius = getInputValueById('major-ellipse');
    const minorEllipseRadius = getInputValueById('minor-ellipse');

    if(isNaN(majorEllipseRadius) || isNaN(minorEllipseRadius)){
        alert('please insert a number!');
        return;
    }
    const area = Math.PI * majorEllipseRadius * minorEllipseRadius;
    const areaTwoDecimal = area.toFixed(2);
    areaFieldValue ('ellipse-area', areaTwoDecimal);
}