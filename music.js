async function Data() {
    const response = await fetch("https://api.unsplash.com/search/photos?page=1&query=meditation&client_id=1GyuDyh_30w-xBfpfCP8P5uPYwRrxfMC3k8dG2Kjpiw&count=10");
    const data = await response.json();
    console.log(data);
   
    handleImage(data); 
}

Data();

let section = document.getElementById("shadow-host-companion");
function handleImage(data){
    data.results.forEach((item)=>{
        let imgTag = document.createElement("img");
        imgTag.src = item.urls.small; 
        section.appendChild(imgTag); 
    });
}
