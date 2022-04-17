  document.getElementById('diposit-btn').addEventListener('click',function(){
          
        const   emptyValue=dipositValue.value;
        console.log(emptyValue.length)
        if(emptyValue.length==0){
            alert('Plise Enter Ammount')
            dp.innerText='';
        }else{
             balance();
            }
});
  const dipositValue=document.getElementById('dipojit-input');
function getdiposit(){
   const getvalue=dipositValue.value;

return getvalue;
}

function totaldiposit(){
    const olddiposit=document.getElementById('dipojit');
    const totaloldDiposit=parseFloat(olddiposit.innerText) ;
    const newDiposit=parseFloat(getdiposit()) ;
    const totalDiposit=totaloldDiposit+newDiposit;

return totalDiposit;

}
const dp=document.getElementById('wrong-data');
function balance(){
    const balanceTag=document.getElementById('balance');
    const oldBalance=parseFloat(balanceTag.innerText);
    const newBalance=parseFloat(getdiposit());
    const TotalBalance=oldBalance+newBalance;
    const totalDiposit=totaldiposit(); 

   if(newBalance >=0){
    const olddiposit=document.getElementById('dipojit');
          olddiposit.innerText=totalDiposit;
          balanceTag.innerText=TotalBalance;
          dp.innerText='';
   }else{
         dp.innerText="incapition balance"
      }
   const dipositValue=document.getElementById('dipojit-input');
         dipositValue.value='';
}

document.getElementById('withdrow-btn').addEventListener('click',function(){
         
        const emptyValue=inputTag.value;
         if(emptyValue.length==0){
            alert('Plise Enter Ammount')
            p.innerText=""
        }else{
            withdroBalance();
        }
})
    const inputTag=document.getElementById('withdrow-input');
function getWithdrow(){

    const getvalue=inputTag.value;

 return getvalue;
}

function withdrowAmmount(){
    const withdrowTag=document.getElementById('withdro');
    const oldAmmount=parseFloat(withdrowTag.innerText);
    const newAmmount =parseFloat(getWithdrow());
    const totalAmmount=oldAmmount+newAmmount;

return totalAmmount;
}
    const p=document.getElementById('withdrow-data');
function withdroBalance(){
    const balanceTag=document.getElementById('balance');
    const balance=parseFloat(balanceTag.innerText);
    const newAmmount =parseFloat(getWithdrow());
    const totalAmmount=balance-newAmmount;
    const totalWithdrow=withdrowAmmount();

    if (balance >= newAmmount && newAmmount >=0){
    const withdrowTag=document.getElementById('withdro');
          withdrowTag.innerText=totalWithdrow; 
          balanceTag.innerText=totalAmmount;
          p.innerText=""  
    }else{
  
              p.innerText="Incapition Balance"
    }
    const inputTag=document.getElementById('withdrow-input');
          inputTag.value='';
}