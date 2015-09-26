   function TextLimit(){
    var text = document.getElementById('mobile_no');
   if (text.value.length > 10){
        alert('you are allowed to enter 10 characters only');

    }
}


$(document).ready(function () {
    $('#register-btn').click(function () {
 var old_password = document.form.old_password.value,
  password = document.form.password.value,
  confirm_password = document.form.confirm_password.value;
  
 if( old_password == "" )
   {
     document.form.old_password.focus() ;
	document.getElementById("errorBox").innerHTML = "enter the first name";
     return false;
   }
    
   if (password == "" )
 {
  document.form.password.focus();
  document.getElementById("errorBox").innerHTML = "enter the password";
  return false;
  }
   
   if (confirm_password == "" )
 {
  document.form.confirm_password.focus();
  document.getElementById("errorBox").innerHTML = "Re-enter the password";
  return false;
  }
   
  if(confirm_password !=  password){
   document.form.confirm_password.focus();
   document.getElementById("errorBox").innerHTML = "Passwords are not matching, re-enter again";
   return false;
   }
   
   
   
  if(old_password != '' && password != '' && confirm_password != ''){
  event.preventDefault();
      $.ajax({
        type: "POST",
        url: website + 'api/user/register/format/json',
        data: {	'api_key' : 'a2a119aabd70e736569f194056a15860',
				'user_type' 	: user_type,
				'old_password': old_password,
				'lastname' : lastname,
				'mobile_no': mobile_no,
				'emailid': emailid,
				'other_contact' : other_contact,
				'password' : password,
				'dob' : dob,
				'city' : city,
				'state' : state, 
				'locality' : locality,
				'pincode'	: pincode},
        
        success: function(html){
            $("#errorBox").html(html);
        } 
      });
   }
});
});

 
