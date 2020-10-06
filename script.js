

function validate() {
  var emailID = document.myForm.EMail.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");
  var alpha = /^[a-zA-Z]+$/;
  var number = /^[0-9]+$/;

         if( document.myForm.Name.value == "" ) {
            alert( "Please provide your name!" );
            document.myForm.Name.focus() ;
            return false;
         }
         if(document.myForm.Name.value.match(number)){
           alert( "Name should contain only alphabets" );
           document.myForm.Name.focus() ;
           return false;
         }

         if( document.myForm.EMail.value == "" ) {
            alert( "Please provide your Email!" );
            document.myForm.EMail.focus() ;
            return false;
         }
         if( document.myForm.Age.value == "" || isNaN( document.myForm.Age.value ) ||
            document.myForm.Age.value < 0 || document.myForm.Age.value > 150) {

            alert( "Please provide age between 0-150" );
            document.myForm.Age.focus() ;
            return false;
         }
         if( document.myForm.mobile.value.length < 10 ) {
            alert( "Please provide a valid Mobile Number" );
            return false;
         }
         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID")
            document.myForm.EMail.focus() ;
            return false;
         }

         alert("Form Validation Complete!! \n All attributes match the conditions \n Details Recorded");
      }
