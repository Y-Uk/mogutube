const API_KEY = "AIzaSyB-_3Q0nPbaJqNUaIMNpakZ1loFDbyZwIQ";  
function search(q){    
  
  fetch(   
  `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${q}&key=${API_KEY}`   
  )   
  .then(res => res.json())   
  .then(data => {      
    
    const list = document.getElementById("list");     
    list.innerHTML = "";      
    
    data.items.forEach(v => {        
      
      const id = v.id.videoId;       
      const title = v.snippet.title;        
      
      const div = document.createElement("div");       
      div.className = "video";        
      
      div.innerHTML = `         
        <img src="https://img.youtube.com/vi/${id}/mqdefault.jpg">         
        <div>${title}</div>       
      `;        
      
      div.onclick = () => {         
        document.getElementById("player").src =           
          "https://www.youtube.com/embed/" + id;       
      };        
      
      list.appendChild(div);     
    });    
  });  
}  

// 最初の表示 search("music");
