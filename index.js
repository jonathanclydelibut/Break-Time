// function timer(){
//     var sec = 1230;
//     var timer = setInterval(function(){
//         document.getElementById('countdown').innerHTML=sec;
           
//         sec--;
//         if (sec < 0) {
//             clearInterval(timer);
//         }
//     }, 1000);
// }

// timer();

//let time = "0101";
//let nums = time.split('');
//let indnums = nums.map(Number);
//console.log(indnums);



let min = "";
//min = (indnums[0]*10) + indnums[1];
//console.log(min);
let sec = "";
//sec = (indnums[2]*10) + indnums[3];
//console.log(min);


let text = document.getElementById('countdown');

let alert = document.getElementById("alert");




 function start () 
 {

  // let time = "";
    // setInterval( ()=> {text.textContent= Math.random()}, 1000)

    interval = setInterval(()=> {

      if (sec > 60) 
      {
       sec = sec % 60;
       min = Number(min);
       min += 1;
      }  
        
      
       if (sec > 0 )
       {
         if (sec < 11 )
            {
            
              
            sec -= 1;
            text.textContent = min + ":0" + sec;  
            }
          
         else 
            {
            
            sec -= 1;
            text.textContent = min + ":" + sec;
            }
          
       }
       else if (sec == 0 && min != 0)
       {
         
         sec = 59;
         min -= 1;
         text.textContent = min + ":59";

       }
      


       else {
         console.log(min);
         console.log(sec);
         clearInterval(interval);
          alert.play();


       }
       

       
    //   //  else 
    //   //  {
    //   //  text.textContent = "Times up";

    //   //  }
      
    //   //  else 
    //   //  {
    //   //     if (min = 0){
             
    //   //     }
    //   //     min = min - 1;
    //   //     sec = 59;
    //   //     text.textContent = min + ":" + sec;
         
    //   //  }
      }, 1000)

 };

function showTimer() {

   //console.log(timer);

   let timer = document.getElementById("timer-one").value;
   1170

   if (timer.length == 1) {
      min = 00;
      sec = "0" + timer[0];
      text.textContent = min + ':' + sec;
   }

   else if (timer.length == 2) {
      min = 00;
      sec = timer[0] + timer[1];
      text.textContent = min + ':' + sec;
   }

   else if (timer.length == 3) {
      min = timer[0];
      sec = timer[1] +timer[2];
      text.textContent = min + ':' + sec;
   }

   else if (timer.length == 4) {
      min = timer[0] + timer[1];
      sec = timer[2] +timer[3];
      text.textContent = min + ':' + sec;
   }

   else {
      text.textContent = "Invalid Input";
   }










   


}





function stop() 
{

   if (sec < 10 )
   {
   
     
  
   text.textContent = min + ":0" + sec;  
   }
   else {
 text.textContent = min + ":" + sec;
   }
 alert.pause();
 clearInterval(interval);

}





// reset timer -- clear timer
// increment timer -- add 5 mins etc 