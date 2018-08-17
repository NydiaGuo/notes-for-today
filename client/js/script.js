$(document).ready(function(){
  let updateBtn = "<button class='update'>Update</button>";
  let remove = "<button class='remove'>x</button>";

  $.get('http://localhost:8000/get-data', function(data) {

    console.log("this is get route data: ", data);


    // let dataID = data.map(function(list){
    //   return list._id
    // })

    for (let i =0; i < data.length; i++) {
      // console.log("data of i: ", data[i].$oid);
      let listItem = "<li data-id="+ dataID+"><a href=#>"+ remove +"<p>" + data[i].text  +"</p></a>"+ updateBtn + "</li>" ;
      // $("li").attr(data[i].$oid);
      $("#notes-list").append(listItem);

    }


    $('.remove').click((e)=>{
      e.preventDefault();

  
      console.log("remove clicked: ", $(this).parent());
  
      // $.post("http://localhost:8000/drop-data",)
  
    });

    $('.update').click((e)=>{
      e.preventDefault();
      
    });


  });


  $(document).on('click', '#submit-note', function(e){

    e.preventDefault();

    let newNote = $("#new-note").val();

    // console.log("this is new note: ", newNote);

    if (newNote !== "") {

      let listItem = "<li><a href=#>"+ remove +"<p>" + newNote  +"</p></a>"+ updateBtn + "</li>" ;
      
      let noteContent = {
        
        "task": newNote
      }

      console.log("note content: ", noteContent)

      $.post("http://localhost:8000/set-data", noteContent, function(data){

        console.log("this is new Note: ", data);

      });

      $("#notes-list").append(listItem);

      //empty the textares after clicking
			$("#new-note").val("");
    
    }

  });





});