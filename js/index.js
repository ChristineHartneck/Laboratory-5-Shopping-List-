function watchForm(){
  let addItem = $("#addItem");

  $("#addItem").on("click", function( e ){
    console.log($("#textfield").val());
    event.preventDefault();

    // Check if empty textfield exists
    if ($("#textfield").val() === "") {
    return;
  };


    // Add a new element on to the existing list, include the two buttons for each element
    $("#list").append('<li class="shoppingList">'+
    $("#textfield").val()+
    '<div class="button"><button class="check">check</button>'+
    '<button class="remove">delete</button></di></li>');
    e.preventDefault();

    // Empty textfield
    $("#textfield").val(" ");
  });

  // Delete an element from the shoppinglist
  $("#list").on( "click",".shoppingList .button .remove", function( e ) {
    e.preventDefault();
    $(this).parents(".shoppingList").remove();
  });

  // Check an element from the shoppinglist
  $("#list").on( "click",".shoppingList .button .check", function( e ) {
    e.preventDefault();
    console.log($(this).parents(".shoppingList").css("text-decoration"));

    // If it has a none, then check it (line-through)
    if($(this).parents(".shoppingList").css("text-decoration")=="none solid rgb(0, 0, 0)"){
      $(this).parents(".shoppingList").css("text-decoration","line-through");
    }
    //Else, uncheck it (none)
    else{
      $(this).parents(".shoppingList").css("text-decoration","none");
    }

  });
}


watchForm();
