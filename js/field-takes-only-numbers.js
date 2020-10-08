     /*
	* add this to the field onkeypress="return isNumberKey(event)" 
	
     */

	// function to make field accept only numbers
     function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
        }