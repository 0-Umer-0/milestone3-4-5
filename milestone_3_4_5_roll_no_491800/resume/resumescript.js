"use strict";
let myName = localStorage.getItem("name");
window.addEventListener("load", () => {
    let desig = localStorage.getItem("desig");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let add = localStorage.getItem("add");
    let pass1 = localStorage.getItem("pass1");
    let deg = localStorage.getItem("deg");
    let uni = localStorage.getItem("uni");
    let pass2 = localStorage.getItem("pass2");
    let deg2 = localStorage.getItem("deg2");
    let uni2 = localStorage.getItem("uni2");
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let lang = localStorage.getItem("lang");
    let lang2 = localStorage.getItem("lang2");
    let styear = localStorage.getItem("styear");
    let endyear = localStorage.getItem("endyear");
    let company = localStorage.getItem("company");
    let comlocation = localStorage.getItem("comlocation");
    let JobTitle = localStorage.getItem("JobTitle");
    let achv1 = localStorage.getItem("achv1");
    let achv2 = localStorage.getItem("achv2");
    let achv3 = localStorage.getItem("achv3");
    let picture = localStorage.getItem('profile_pic');
    let resName = document.getElementById("resName");
    resName.textContent = myName;
    let resDesig = document.getElementById("resDesig");
    resDesig.textContent = desig;
    let resPhone = document.getElementById("resPhone");
    resPhone.textContent = phone;
    let resEmail = document.getElementById("resEmail");
    resEmail.textContent = email;
    let resAdd = document.getElementById("resAdd");
    resAdd.textContent = add;
    let resPass = document.getElementById("resPass");
    resPass.textContent = pass1;
    let resdeg = document.getElementById("resdeg");
    if (resdeg) {
        let deg = localStorage.getItem("deg") || "Degree not provided";
        resdeg.textContent = deg;
    }
    else {
    }
    let resIns = document.getElementById("resIns");
    resIns.textContent = uni;
    let resPass2 = document.getElementById("resPass2");
    resPass2.textContent = pass2;
    let resdeg2 = document.getElementById("resdeg2");
    resdeg2.textContent = deg2;
    let resIns2 = document.getElementById("resIns2");
    resIns2.textContent = uni2;
    let resskill1 = document.getElementById("resskill1");
    resskill1.textContent = skill1;
    let resskill2 = document.getElementById("resskill2");
    resskill2.textContent = skill2;
    let resskill3 = document.getElementById("resskill3");
    resskill3.textContent = skill3;
    let resLan1 = document.getElementById("resLan1");
    resLan1.textContent = lang;
    let resLan2 = document.getElementById("resLan2");
    resLan2.textContent = lang2;
    let resStartYear = document.getElementById("resStartYear");
    resStartYear.textContent = styear;
    let resEndYear = document.getElementById("resEndYear");
    resEndYear.textContent = endyear;
    let resCompany = document.getElementById("resCompany");
    resCompany.textContent = company;
    let resComlocation = document.getElementById("resComlocation");
    resComlocation.textContent = comlocation;
    let resJobTitle = document.getElementById("resJobTitle");
    resJobTitle.textContent = JobTitle;
    let resAch1 = document.getElementById("resAch1");
    resAch1.textContent = achv1;
    let resAch2 = document.getElementById("resAch2");
    resAch2.textContent = achv2;
    let resAch3 = document.getElementById("resAch3");
    resAch3.textContent = achv3;
    let resImg = document.getElementById("resImg");
    resImg.src = picture;
});
//----------------------------------------------------------print button----------------------------------------------------------
let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
    window.print();
});
// ------------------edit button-----------------------------------//
document.addEventListener('DOMContentLoaded', () => {
    let edit_btn = document.getElementById("edit_btn");
    if (edit_btn) {
        edit_btn.addEventListener('click', () => {
            console.log("Going back");
            window.history.back();
        });
    }
    else {
        console.error("edit_btn not found");
    }
});
//----------------------------------------shareable link button--------------------------------------//
let share_btn = document.getElementById('share_btn');
let anc = document.getElementById('anc');
let userName;
if (myName) {
    userName = myName.toLowerCase().replace(/\s+/g, "-");
}
else {
    userName = "user";
}
let baseUrl = "http://127.0.0.1:5500/resume/resume.html";
let uniqueUrl = `${baseUrl}?/${myName}`;
share_btn?.addEventListener('click', () => {
    anc?.setAttribute('href', uniqueUrl);
});
//----------------------------copy link button-----------------------------------//
let copy_btn = document.getElementById('copy_btn');
copy_btn?.addEventListener('click', () => {
    navigator.clipboard.writeText(uniqueUrl).then(() => {
        alert('copy succesful');
    });
});
