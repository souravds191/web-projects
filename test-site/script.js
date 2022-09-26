var mybtn=document.getElementById("mybtn");
mybtn.onclick=function(){
    var username=document.getElementById("user_name").value;
    var emailid=document.getElementById("email_id").value;
    
   
   const obj=
   {
    username,
    emailid,
    
   }
//    localStorage.setItem('user1', JSON.stringify(obj));

   let formData = JSON.parse(localStorage.getItem('formData')) || [];
   formData.push({ username, emailid });
        localStorage.setItem('formData', JSON.stringify(formData));
        dispData();
        document.querySelector('form').reset();
   }

   
   function dispData(){
    console.log(localStorage.getItem('formData'));
    if(localStorage.getItem('formData')){
        var output = document.querySelector('tbody');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('formData')).forEach(data => {
            output.innerHTML += `
                    <tr>
                        <td>${data.username}</td>
                        <td>${data.emailid}</td>
                    </tr>
            `;
        });                
    }
}
dispData();