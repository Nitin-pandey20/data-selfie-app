function setup() {
        
    const video= createCapture(VIDEO);  
    video.size(350, 200);
    video.position(0,280);
    let lat,lon;
    button.addEventListener('click', async event=>{                
    const inputElement = document.getElementById('inp');
        const name=inputElement.value;
        video.loadPixels();
        const image64=video.canvas.toDataURL();
        const data={lat,lon,name,image64};
            const options={
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }; 
          const response= await fetch('/api',options);
         const json =await response.json();
         console.log(json);
}) 
if (navigator.geolocation) {
     console.log("Geolocation avliable");
    navigator.geolocation.getCurrentPosition(async position => {
     lat = position.coords.latitude;
     lon = position.coords.longitude;
    document.getElementById('lat').textContent = lat;     
    document.getElementById('lon').textContent = lon;
    });  
    } 
    else {
    console.log("not Geolocation avliable");
    }
} 