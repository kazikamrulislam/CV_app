let profile = {};
function myFunction(){

    profile.name = document.getElementById("name").value;
    profile.adress = document.getElementById("adress").value;
    profile.c_obj = document.getElementById("c_obj").value;
    profile.c_skill = document.getElementById("c_skill").value;
    profile.experties = document.getElementById("experties").value;
    profile.phone = document.getElementById("phone").value;
    profile.pro_comp = document.getElementById("pro_comp").value;
    profile.e_mail = document.getElementById("e_mail").value;
    // document.getElementById("demo").innerHTML = profile.name + " " + profile.adress + " " + profile.c_obj + " " + profile.c_skill + " " + profile.experties + " " + profile.phone + " " + profile.pro_comp ? profile.name + " " + profile.adress + " " + profile.c_obj + " " + profile.c_skill + " " + profile.experties + " " + profile.phone + " " + profile.pro_comp : 'Empty';
}
console.log(profile);

function addnewone(){
   let new_em = '<div class="form-group row"> <label for="E-mail" class="col-sm-4 col-form-label">E-mail::</label> <div class="col-sm-7"> <input type="text" class="form-control" id="e_mail"> </div> <span class="addnew" onclick="addnewone()"> + </span>  </div>' ;
   document.getElementById("email_container").appendChild(new_em);
}
 