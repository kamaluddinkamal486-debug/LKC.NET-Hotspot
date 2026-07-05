/* ==========================================
   LKC.NET Hotspot Premium
   RouterOS 6
========================================== */

// Jam Digital
function updateClock() {

    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');

    clock.innerHTML = h + ":" + m + ":" + s;

}

setInterval(updateClock,1000);

updateClock();


// Show Password

function togglePassword(){

    const pass=document.getElementById("password");

    if(pass.type==="password"){

        pass.type="text";

    }else{

        pass.type="password";

    }

}


// Loading Login

document.addEventListener("DOMContentLoaded",()=>{

    const form=document.forms.login;

    if(!form) return;

    form.addEventListener("submit",()=>{

        const btn=document.querySelector(".login-button");

        btn.innerHTML="Menghubungkan...";

        btn.disabled=true;

    });

});