const element = document.getElementById('currentTime');
      
setInterval(function () {
  const currentDate = new Date();
  element.innerText = currentDate.getHours() + ":" + currentDate.getMinutes();
});