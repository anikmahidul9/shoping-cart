function updateproduct(product,price,isIncreasing){
    
    const productInput = document.getElementById(product + '-num');
    let productNum=productInput.value;
    if(isIncreasing==true){
    productNum=parseInt(productNum)+1;
    }
    else if(productNum>0){
        productNum=parseInt(productNum)-1;
    }
 productInput.value=productNum;
 let productTotal = document.getElementById(product+'price');
 productTotal=productNum*price;
 document.getElementById(product+'price').innerText=productTotal;
 calculate();
}
function getInput(product){
    let inputproduct=document.getElementById(product+'-num');
    const inputvalue= parseInt( inputproduct.value);
    return inputvalue;

}
function calculate(){
    let phoneTotal = getInput('phone')*1278;
    let caseTotal = getInput('case')*110;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal/10;
    const total = subTotal+tax;

    document.getElementById('subtotal').innerText=subTotal;
    document.getElementById('tax').innerText=tax;
    document.getElementById('total').innerText=total;

}
 document.getElementById('phoneplus').addEventListener('click',()=>{
 updateproduct('phone',1278,true);
});
document.getElementById('phoneminus').addEventListener('click',()=>{
    updateproduct('phone',1278,false);
});
document.getElementById('caseminus').addEventListener('click',()=>{
    updateproduct('case',110,false);
});
document.getElementById('caseplus').addEventListener('click',()=>{
    updateproduct('case',110,true);
   });