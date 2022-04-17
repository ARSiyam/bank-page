  document.getElementById('diposit-btn').addEventListener('click',function(){
           totaldiposit();
           balance();
});

function getdiposit(){
    const dipositValue=document.getElementById('dipojit-input');
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

function balance(){
    const balanceTag=document.getElementById('balance');
    const oldBalance=parseFloat(balanceTag.innerText);
    const newBalance=parseFloat(getdiposit());
    const TotalBalance=oldBalance+newBalance;
    const totalDiposit=totaldiposit(); 
    const p=document.getElementById('wrong-data');
   if(newBalance >=0){
    const olddiposit=document.getElementById('dipojit');
          olddiposit.innerText=totalDiposit;
          balanceTag.innerText=TotalBalance;
          p.innerText='';
   }else{
         p.innerText="incapition balance"
      }
   const dipositValue=document.getElementById('dipojit-input');
         dipositValue.value='';
}

document.getElementById('withdrow-btn').addEventListener('click',function(){
         withdroBalance();
})

function getWithdrow(){
    const inputTag=document.getElementById('withdrow-input');
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
    const p=document.getElementById('withdrow-data');
          p.innerText=""  
    }else{
        const p=document.getElementById('withdrow-data');
              p.innerText="Incapition Balance"
    }
    const inputTag=document.getElementById('withdrow-input');
          inputTag.value='';
}