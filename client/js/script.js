$(document).ready(()=>{
    let cards = '<div class="card text-white bg-warning mb-3" style="max-width: 18em;"><div class="card-body">';
    let btns = '<div class="row justify-content-center mt-4"><button class="btn btn-outline-danger mr-2">Update</button><button class="btn btn-outline-danger ml-2">Delete</button></div></div></div>';
           
  $.get('http://localhost:8000/get-data', (data)=>{

    let dataArray = data.notes;

    console.log("this is data array: ", dataArray);

    for(let i =0; i< dataArray.length; i++) {

        let text = '<p>'+dataArray[i]+'</p>';

        $('.cards').append(cards+text+btns);

    }

  });

  $('#add-note').click((e)=>{
    e.preventDefault();
    
    let newText = $('#note-texts').val();

    let newNote = {
        "notes": newText
    }
    console.log(newNote);
  });

});