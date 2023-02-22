document.getElementById('btn-tri-cal').addEventListener('click',function(){
    const baseField = document.getElementById('tri-base-field');
    const newBaseString = baseField.value;
    const newBase = parseFloat(newBaseString);

    const heightField = document.getElementById('tri-height-field');
    const newHeightString = heightField.value;
    const newHeight = parseFloat(newHeightString);

    baseField.value = '';
    heightField.value = '';
	
    if(isNaN(newBase)){
        alert(' Please provide a valid number');
        return;
    }
    else if(isNaN(newHeight)){
        alert(' Please provide a valid number');
        return;
    }


    const baseElement = document.getElementById('base-total');
    const previousBaseString = baseElement.innerText;
    const previousBaseTotal = parseFloat(previousBaseString);

    const heightElement = document.getElementById('height-total');
    const previousHeightString = heightElement.innerText;
    const previousHeightTotal = parseFloat(previousHeightString);
  
    const currentBasedTotal =  newBase;
    const currentHeightTotal =  newHeight;

    baseElement.innerText = currentBasedTotal;
    heightElement.innerText = currentHeightTotal;





    const triangleArea =  document.getElementById('tri-area-calc');
    const  newTriangleAreaString = triangleArea.innerText;
    const previousTriangleArea = parseFloat(newTriangleAreaString);

    const currentTriangleArea = previousTriangleArea+(0.5*newBase*newHeight);


    triangleArea.innerText = currentTriangleArea.toFixed(2);
	


})

   



