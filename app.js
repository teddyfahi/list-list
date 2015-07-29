$(document).ready(function() {
$("#add").click(function() {
    if ( $.trim( $('#addForm').val() ) === '' ) {
        //shake();
        return;
    }
    else {
    addItem();
    }
});

    $("#addForm").keypress(function(e){
        if(e.which==13){
            addItem();
            e.preventDefault();
        }
    });

function shake(){
    $("#addForm").addClass('shake animated').delay(1000).queue(function(next){
    $(this).removeClass('shake animated');
    next();
    });
  }

    function addItem(){
        var itemToAdd = $("#addForm").val();
        var createItem = '<div class="add-item"><div class="checkcheckcheck"><input type="checkbox" class="checkbox"></div><input type="text" class="item-field" value=" '+itemToAdd + ' "></div>';
        $("#shopping-list").append(createItem);
        $("#addForm").attr("placeholder", "Add an item").val("");
        $('input.check').change(function(){
        $(this).siblings('itemToAdd').toggleClass('strike');
    });
    }

    $("#remove").click(function(){
        $("input:checked").closest(".add-item").hide('slow');
    });

    $('#shopping-list').on('change','input[type=checkbox]',function(){
        var myInput = $(this).parent().siblings('input[type=text]');
        if ($(this).is(':checked')) {
            $(myInput).css('textDecoration','line-through');
        }
        else{
            $(myInput).css('textDecoration','none');
        }
});
    
        

});





