fetch('https://thatsthespir.it/api')
    .then(res => res.json())//response type
    .then( data =>{
        document.getElementById('quote') .innerHTML=data.quote;
        document.getElementById('author').innerHTML=`- ${data.author}`;
        document.querySelector('figure') .style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${data.photo})`;
    } )
    .catch(err => err(console.log('ERROR')));