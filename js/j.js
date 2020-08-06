$("document").ready(function(){
    $("#myform").submit(function(){
        var  mysearch=$("#books").val();
         if(mysearch=="")
         {
             alert("please enter name or authour or title to search");
         }
            else{
            
                var url=""
                var img=""
                var title=""
                var authour="";
                
                 $.get("https://www.googleapis.com/books/v1/volumes?q="+mysearch,function(response){

                 console.log(response);

                    



                    });
        return false
        }     
        });
        });

        



         