let aMenu=document.getElementById('M3');

function Note() {
    let newDiv = document.createElement('div');
    let container = document.querySelector('aside');
    newDiv.innerHTML = '<h1>Я стану крутым фронтенд-разработчиком!</h1>' +
       '<h2>И для этого приложу все усилия</h2>';
    container.appendChild(newDiv);
   /// console.log(event); 
};

addEventListener("click",(event)=>{
    if (event.target.id==="M3") Note();
});
addEventListener("keydown",(event)=>{
   if (event.code==='KeyN') Note();
   
});
addEventListener("keypress",(event)=>{
    //console.log(String.fromCharCode(event.charCode));
    //console.log(event);
    if (event.code==='KeyA' && event.shiftKey) Note();
   
   });


   /// перемещение мыши
   let lastX; // Последняя позиция мыши
   let rect = document.querySelector("div");
   rect.addEventListener("mousedown", function(event) {
    if (event.which === 1) {
      lastX = event.pageX;
      addEventListener("mousemove", moved);
      event.preventDefault(); // Запретим выделение
   
    }
   
   });
   
   function moved(event) {
   
    if (event.which !== 1) {
   
      removeEventListener("mousemove", moved);
   
    } else {
   
      let dist = event.pageX - lastX;
   
      let newWidth = Math.max(10, rect.offsetWidth + dist);
   
      rect.style.width = newWidth + "px";
   
      lastX = event.pageX;
   
    }
   
   }
   ///  Тайм Аут
  
setTimeout(function() {
    document.body.style.background = "olive";
}, 2000);