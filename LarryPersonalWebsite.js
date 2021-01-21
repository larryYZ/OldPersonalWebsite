// The main function which is the basic unit, other functions call and input different argument

function Main(text,addr1,addr2,addr3,fig1,fig2,fig3) {

   document.getElementById("display").innerHTML = text;
   
   document.getElementById("pic1").setAttribute("src", addr1);
   document.getElementById("pic2").setAttribute("src", addr2);
   document.getElementById("pic3").setAttribute("src", addr3);
   
   document.getElementById("fig1").innerHTML = fig1;
   document.getElementById("fig2").innerHTML = fig2;
   document.getElementById("fig3").innerHTML = fig3;

   document.getElementById("check1").checked=false;
   document.getElementById("check2").checked=false;
   document.getElementById("check3").checked=false;
}

// this is the subfunction belongs to assigned to individual buttons and it has corresponding values to pass to the main function
function Nav(button){
      var display;
      var addr1 = "images/" + button + "/" + button + "1.jpeg";
      var addr2 = "images/" + button + "/" + button + "2.jpeg";
      var addr3 = "images/" + button + "/" + button + "3.jpeg";
      var fig1;
      var fig2;
      var fig3;

      switch(button){
         case "home":
            display = "From retail brokerage to the trading floor, I have worked in various positions including the highly competitive front office jobs in the financial services industry. <br /> Through simple coding, I transformed one of the offices I worked for through automation. <br /> Once witnessed how the industry might be transformed by tech, I knew where my next journey would begin.";
            fig1 = "I have held a range of positions on Bay Street";
            fig2 = "My seat on the trading floor";
            fig3 = "I am looking to start a new career in tech";
            break;
         case "education":
            display = "I carried out my own research on lichens and worked in a developmental biology lab as a research student at University of Toronto. The experience taught me how to approach a problem with unknown solutions, and how to critically analyze nature and the world. I decided to leave the ivory tower because I wanted to be closer to the actions in this fast-evolving world. At Smith school of business at Queen's University, I studied theories in the financial market systmatically and reflected upon what I have learned in the industry in the past years. The program also helped me understand more about different business models. I believe a good software engineer should have a good understanding of the business logic instead of solely depending on product managers. <br /> Now I am doing my second degree in Computer Science at Lassond school of engineering at York University.";
            fig1 = "I completed my undergrad study at University of Toronto majoring in Molecular Biology and Economics";
            fig2 = "I earned my Master of Finance degree at Smith School of Business at Queen's University";
            fig3 = "I am doing my second degree in Computer Science at Lassonde School of Engineering at York University";
            break;
         case "projects":
            display = "<p></p>";
            fig1 = "Fancy website created through API";
            fig2 = "Web-based stock trading game"
            fig3 = "Android app"

            break;
         default:
            display = "From retail banking to the trading floor, I have worked in various positions including the highly competitive front office jobs in the financial services industry. <br /> Through simple coding, I transformed one of the offices I worked for through automation. <br /> Once witnessed how the industry might be transformed by tech, I knew where my next journey would begin." ;
      }
      

      Main(display,addr1,addr2,addr3,fig1,fig2,fig3);
   }
