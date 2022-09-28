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
                        <td><button onclick = deleteuser('${data.emailid}')>Delete</button></td>
                        <td><button onclick = edituser('${data.emailid}')>Edit</button></td>
                    </tr>
            `;
        });                
    }
}
dispData();
function deleteUser(emailid){
    console.log(emailid)
    localStorage.removeItem(emailid);
    removeUserFromScreen(emailid);

}

function removeUserFromScreen(emailid){
    const parentNode = document.getElementById('output');
    const childNodeToBeDeleted = document.getElementById(emailid);

    parentNode.removeChild(childNodeToBeDeleted)
}
