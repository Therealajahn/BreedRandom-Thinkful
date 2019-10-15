
//get dog photos on submit
function getDogPhotos(){
    $('#button').on('click',()=>{
    let imageBreed = $('#breed').val();
   fetch(`https://dog.ceo/api/breed/${imageBreed}/images/random`)
        .then(response =>response.json())
        .then(responseJSON => { 
        renderDogPhoto(responseJSON);
        
   })
        .catch(error => console.log('error',error));
    })   
}
//put images in a img tag with a for each
function renderDogPhoto(dogPhoto) {
    $('img').remove();
   if(dogPhoto.status === "error"){
       $('form').append(`<h1> ${dogPhoto.message}</h1>`) 
   }else{
    $('form').append(`<img src=${dogPhoto.message} alt='dog'>`)
   }
    
}


$(getDogPhotos());