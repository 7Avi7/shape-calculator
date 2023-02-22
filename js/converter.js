// Triangle
document.getElementById('convert-1').addEventListener('click',function(){
    

    const triangleArea =  document.getElementById('tri-area-calc');
    const  newTriangleAreaString = triangleArea.innerText;
    const previousTriangleArea = parseFloat(newTriangleAreaString);


    newTriangleAreaTotal = (0.0001*previousTriangleArea);

    triangleArea.innerText = newTriangleAreaTotal.toFixed(5);
})
// Rectangle
document.getElementById('convert-2').addEventListener('click',function(){

    const triangleArea =  document.getElementById('rec-area-calc');
    const  newTriangleAreaString = triangleArea.innerText;
    const previousTriangleArea = parseFloat(newTriangleAreaString);


    newTriangleAreaTotal = (0.0001*previousTriangleArea);

    triangleArea.innerText = newTriangleAreaTotal.toFixed(5);
})