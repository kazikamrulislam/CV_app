let profile = {};
function myFunction(){

    profile.name = document.getElementById("name").value;
    profile.adress = document.getElementById("adress").value;
    profile.c_obj = document.getElementById("c_obj").value;
    profile.c_skill = document.getElementById("c_skill").value;
    profile.experties = document.getElementById("experties").value;
    profile.phone = document.getElementById("phone").value;
    profile.pro_comp = document.getElementById("pro_comp").value;
    // document.getElementById("demo").innerHTML = profile.name + " " + profile.adress + " " + profile.c_obj + " " + profile.c_skill + " " + profile.experties + " " + profile.phone + " " + profile.pro_comp ? profile.name + " " + profile.adress + " " + profile.c_obj + " " + profile.c_skill + " " + profile.experties + " " + profile.phone + " " + profile.pro_comp : 'Empty';
}

console.log(profile);