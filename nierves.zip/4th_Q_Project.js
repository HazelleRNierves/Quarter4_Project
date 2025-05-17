	document.getElementById('charForm').addEventListener('submit',function(event)
	{
	 event.preventDefault();
     let isValid= true;
	 
	 const neededFields = ['firstName','lastName','email','password','reason'];
     neededFields.forEach(field =>
	 	{
         const element=document.getElementById(field);
         if (!element.value.trim())
         	{
            document.getElementById(field + 'Error').innerText='needed';
            isValid=false;
            }
            else
            {
            document.getElementById(field + 'Error').innerText='';
            }
        });

         const selectedsex=document.querySelector('input[name="sex"]:checked');
         if (!selectedsex)
         	{
            document.getElementById('sexError').innerText='needed';
            isValid=false;
            }
            else
            {
            document.getElementById('sexError').innerText='';
            }
      

			if(isValid)
            {
            	localStorage.setItem("firstName",document.getElementById("firstName").value);
            	localStorage.setItem("lastName",document.getElementById("lastName").value);
                localStorage.setItem("email",document.getElementById("email").value);

		localStorage.setItem("sex",selectedsex.value);
                localStorage.setItem("reason",document.getElementById("reason").value);

      		window.location.href="signinfo.html";
            }

	});