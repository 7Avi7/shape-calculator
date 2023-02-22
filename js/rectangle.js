document.getElementById('btn-rec-cal').addEventListener('click',function(){
    const wField = document.getElementById('rec-w-field');
    const newWString = wField.value;
    const newW = parseFloat(newWString);

    const lField = document.getElementById('rec-l-field');
    const newHeightString = lField.value;
    const newL = parseFloat(newWString);

    wField.value = '';
    lField.value = '';
	
    if(isNaN(newW)){
        alert(' Please provide a valid number');
        return;
    }
    else if(isNaN(newL)){
        alert(' Please provide a valid number');
        return;
    }


    const newWElement = document.getElementById('w-total');
    const previousWString = newWElement.innerText;
    const previousWTotal = parseFloat(previousWString);

    const lElement = document.getElementById('l-total');
    const previousLString = lElement.innerText;
    const previousLTotal = parseFloat(previousLString);
  
    const currentWTotal =  newW;
    const currentLTotal =  newL;

    newWElement.innerText = currentWTotal;
    lElement.innerText = currentLTotal;





    const triangleArea =  document.getElementById('rec-area-calc');
    const  newTriangleAreaString = triangleArea.innerText;
    const previousTriangleArea = parseFloat(newTriangleAreaString);

    const currentTriangleArea = previousTriangleArea+(newW*newL);


    triangleArea.innerText = currentTriangleArea.toFixed(2);
	


})

   



