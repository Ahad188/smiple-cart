     const btnApply = document.getElementById("btn-Apply");
     const btyAmount = document.getElementById("bty-Am");
     const offer = document.getElementById("new-price");
     //   2nd
     const btnAppl = document.getElementById("btn-Appl");
     const btyAmoun = document.getElementById("bty-A");
 
// 1st
     btnApply.addEventListener("click",function(){
      
          let newPrice = 2000 -  proAmount("bty-Am");
          let offers = offeR("new-price");
          offer.innerText = offers + newPrice;
     });
// 2nd
     btnAppl.addEventListener("click",function(){
          let newPrice = 3000 - proAmount("bty-A");  
          let offers = offeR("new-price");
          offer.innerText = offers + newPrice;
     });
// common function     
     function proAmount(id){
               let amount = document.getElementById(id).innerText;
               let tottalCost = parseFloat(amount) * 0.3;
               return tottalCost;
     };
      
     function offeR(id){
          let strings = document.getElementById(id).innerText;
          let Amount = parseFloat(strings);
          let add = strings.innerText = Amount;
          return add;
     };
     