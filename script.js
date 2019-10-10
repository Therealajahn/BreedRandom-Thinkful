
//get dog photos on submit
function getDogPhotos(){
    $('#button').on('click',()=>{
    let imageBreed = $('#breed').val();
   console.log(imageBreed); fetch(`https://dog.ceo/api/breed/${imageBreed}/images/random`)
        .then(response =>response.json())
        .then(responseJSON => 
        renderDogPhoto(responseJSON.message))
        .catch(error => console.log(error));
    })   
}
//put images in a img tag with a for each
function renderDogPhoto(dogPhoto) {
    $('img').remove();
   
    $('form').append(`<img src=${dogPhoto} alt='dog'>`)
    
}


$(getDogPhotos());