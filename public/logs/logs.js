getData(); 
async function getData() {
    const response = await fetch('/api');
    const data=await response.json();
    for(item of data){
        const roots=document.createElement('p');
        const name=document.createElement('div');
        const geo=document.createElement('div');
        const date=document.createElement('div');
        const image=document.createElement('img');
       
        name.textContent= `name:${item.name}`;
        geo.textContent= `${item.lat},${item.lon}`;
        const datestring =new Date(item.timestamp).toLocaleString();
        date.textContent=datestring;
       image.src=item.image64;
        roots.append(name,geo,date,image);
        document.body.append(roots);
    }
  
    console.log(data);
} 