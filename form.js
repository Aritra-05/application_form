const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const next3 = document.getElementById("next3");

const ck1 = document.getElementById("myCheckbox1");
const ck2 = document.getElementById("myCheckbox2");
const ck3 = document.getElementById("myCheckbox3");
const ck4 = document.getElementById("myCheckbox4");

const ckb1 = document.getElementById("ckb1");
const ckb2 = document.getElementById("ckb2");
const ckb3 = document.getElementById("ckb3");
const ckb4 = document.getElementById("ckb4");

var url = 'final.html';

const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
const container4 = document.getElementById("container4");
const suc = document.getElementById("success");

const idbox = document.getElementById("sid");
const namebox = document.getElementById("sname");

const mid = document.getElementById("mid");
const fname = document.getElementById("fname");
const sgen = document.getElementById("sgen");
const dob = document.getElementById("dob");
const mnum = document.getElementById("mnum");
const eid = document.getElementById("eid");
const pan = document.getElementById("pan");
const hname = document.getElementById("hname");
const ano = document.getElementById("ano");

const bname = document.getElementById("bname");
const ifsc = document.getElementById("ifsc");
const anum = document.getElementById("anum");
const canum = document.getElementById("canum");
const ahol = document.getElementById("ahol");

const coun = document.getElementById("coun");
const state = document.getElementById("state");
const dist = document.getElementById("dist");
const city = document.getElementById("city");
const addr = document.getElementById("addr");
const landm = document.getElementById("landm");
const pcode = document.getElementById("pcode");

ck1.addEventListener('change', function () {
    if (ck1.checked) {
        btn1.disabled = false;
    } else {
        btn1.disabled = true;
    }
});

btn1.addEventListener("click", function () {
    var a1 = String(document.getElementById("sid").value);
    var a2 = String(document.getElementById("sname").value);

    if (a1.trim() === '' && a2.trim() === '') {
        idbox.style.borderColor = 'red';
        namebox.style.borderColor = 'red';
        alert("Fill the mandatory fields.");
        ck1.checked = false;
        btn1.disabled = true;
    }
    else if (a1.trim() === '') {
        idbox.style.borderColor = 'red';
        namebox.style.borderColor = null;
        alert("Fill the mandatory fields.");
        ck1.checked = false;
        btn1.disabled = true;
    }
    else if (a2.trim() === '') {
        idbox.style.borderColor = null;
        namebox.style.borderColor = 'red';
        alert("Fill the mandatory fields.");
        ck1.checked = false;
        btn1.disabled = true;
    }
    else {
        console.log("done");
        idbox.style.borderColor = null;
        namebox.style.borderColor = null;
        container2.style.display = "block";
        container1.style.display = "none";
        container3.style.display = "none";
        container4.style.display = "none";

        url += '?sid=' + encodeURIComponent(a1) + '&sname=' + encodeURIComponent(a2);
        idbox.readOnly = true;
        namebox.readOnly = true;

        next1.style.display = "block";
        btn1.style.display = "none";

        ckb1.style.display = "none";
    }
});

next1.addEventListener("click", () => {
    container2.style.display = "block";
    container1.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "none";
})

ck2.addEventListener('change', function () {
    if (ck1.checked) {
        btn2.disabled = false;
    } else {
        btn2.disabled = true;
    }
});

btn2.addEventListener("click", function () {

    var b1 = document.getElementById("mid").value;
    var b2 = document.getElementById("fname").value;
    var b3 = document.getElementById("sgen");
    var b4 = document.getElementById("dob").value;
    var b5 = document.getElementById("mnum").value;
    var b6 = document.getElementById("eid").value;
    var b7 = document.getElementById("pan").value;
    var b8 = document.getElementById("hname").value;
    var b9 = document.getElementById("ano").value;

    if (b1.trim() === '') {
        mid.style.borderColor = 'red';
        
        ck2.checked = false;
        btn2.disabled = true;
    }
    else {
        mid.style.borderColor = null;
    }

    if (b2.trim() === '') {
        fname.style.borderColor = 'red';
        ck2.checked = false;
        btn2.disabled = true;
    }
    else {
        fname.style.borderColor = null;
    }

    if (b4.trim() === '') {
        dob.style.borderColor = 'red';
        ck2.checked = false;
        btn2.disabled = true;
    }
    else {
        dob.style.borderColor = null;
    }

    if (b5.trim() === '') {
        mnum.style.borderColor = 'red';
        ck2.checked = false;
        btn2.disabled = true;
    }
    else {
        mnum.style.borderColor = null;
    }

    if (b7.trim() === '') {
        pan.style.borderColor = 'red';
        ck2.checked = false;
        btn2.disabled = true;
    }
    else {
        pan.style.borderColor = null;
    }

    if (b9.trim() === '') {
        ano.style.borderColor = 'red';
        ck2.checked = false;
        btn2.disabled = true;
    }
    else {
        ano.style.borderColor = null;
    }

    if (b1.trim() !== '' && b2.trim() !== '' && b4.trim() !== '' && b5.trim() !== '' && b7.trim() !== '' && b9.trim() !== '') {
        container2.style.display = "none";
        container1.style.display = "none";
        container3.style.display = "block";
        container4.style.display = "none";

        url += '&mid=' + encodeURIComponent(b1) + '&fname=' + encodeURIComponent(b2) + '&sgen=' + encodeURIComponent(b3) + '&dob=' + encodeURIComponent(b4) + '&mnum=' + encodeURIComponent(b5) + '&eid=' + encodeURIComponent(b6) + '&pan=' + encodeURIComponent(b7) + '&hname=' + encodeURIComponent(b8) + '&ano=' + encodeURIComponent(b9);

        mid.readOnly = true;
        fname.readOnly = true;
        dob.readOnly = true;
        mnum.readOnly = true;
        eid.readOnly = true;
        hname.readOnly = true;
        ano.readOnly = true;

        next2.style.display = "block";
        btn2.style.display = "none";

        ckb2.style.display = "none";
    }

    else{
        alert("Fill the mandatory fields.");
    }
})

next2.addEventListener("click", () => {
    container2.style.display = "none";
    container1.style.display = "none";
    container3.style.display = "block";
    container4.style.display = "none";
})

btn3.addEventListener("click", () => {
    container2.style.display = "none";
    container1.style.display = "block";
    container3.style.display = "none";
    container4.style.display = "none";
})

ck3.addEventListener('change', function () {
    if (ck3.checked) {
        btn4.disabled = false;
    } else {
        btn4.disabled = true;
    }
});

btn4.addEventListener("click", () => {
    var a = document.getElementById("bname").value;
    var b = document.getElementById("ifsc").value;
    var c = document.getElementById("anum").value;
    var d = document.getElementById("canum").value;
    var e = document.getElementById("ahol").value;

    if (a.trim() === '') {
        bname.style.borderColor = 'red';
        ck3.checked = false;
        btn4.disabled = true;
    }
    else {
        bname.style.borderColor = null;
    }

    if (b.trim() === '') {
        ifsc.style.borderColor = 'red';
        ck3.checked = false;
        btn4.disabled = true;
    }
    else {
        ifsc.style.borderColor = null;
    }

    if (c.trim() !== d.trim() && c.trim() !== '' && d.trim() !== '') {
        anum.style.borderColor = 'red';
        canum.style.borderColor = 'red';
        ck3.checked = false;
        btn4.disabled = true;
        alert("Account numbers are not matching.");
    }
    else {
        if (c.trim() === '') {
            anum.style.borderColor = 'red';
            ck3.checked = false;
            btn4.disabled = true;
        }
        else {
            anum.style.borderColor = null;
        }

        if (d.trim() === '') {
            canum.style.borderColor = 'red';
            ck3.checked = false;
            btn4.disabled = true;
        }
        else {
            canum.style.borderColor = null;
        }
    }

    if (e.trim() === '') {
        ahol.style.borderColor = 'red';
        ck3.checked = false;
        btn4.disabled = true;
    }
    else {
        ahol.style.borderColor = null;
    }

    if (a.trim() !== '' && b.trim() !== '' && c.trim() !== '' && d.trim() !== '' && c.trim() === d.trim() && e.trim() !== '') {
        container2.style.display = "none";
        container1.style.display = "none";
        container3.style.display = "none";
        container4.style.display = "block";

        url += '&bname=' + encodeURIComponent(a) + '&ifsc=' + encodeURIComponent(b) + '&anum=' + encodeURIComponent(c) + '&canum=' + encodeURIComponent(d) + '&ahol=' + encodeURIComponent(e);

        bname.readOnly = true;
        ifsc.readOnly = true;
        anum.readOnly = true;
        canum.readOnly = true;
        ahol.readOnly = true;

        next3.style.display = "block";
        btn4.style.display = "none";

        ckb3.style.display = "none";
    }
})

next3.addEventListener("click", () => {
    container2.style.display = "none";
    container1.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "block";
})

btn5.addEventListener("click", () => {
    container2.style.display = "block";
    container1.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "none";
})

ck4.addEventListener('change', function () {
    if (ck4.checked) {
        btn6.disabled = false;
    } else {
        btn6.disabled = true;
    }
});

btn6.addEventListener("click", () => {
    var d1 = document.getElementById("coun").value;
    var d2 = document.getElementById("state").value;
    var d3 = document.getElementById("dist").value;
    var d4 = document.getElementById("city").value;
    var d5 = document.getElementById("addr").value;
    var d6 = document.getElementById("landm").value;
    var d7 = document.getElementById("pcode").value;

    if (d1.trim() === '') {
        coun.style.borderColor = 'red';
        ck4.checked = false;
        btn6.disabled = true;
    }
    else {
        coun.style.borderColor = null;
    }

    if (d2.trim() === '') {
        state.style.borderColor = 'red';
        ck4.checked = false;
        btn6.disabled = true;
    }
    else {
        state.style.borderColor = null;
    }

    if (d3.trim() === '') {
        dist.style.borderColor = 'red';
        ck4.checked = false;
        btn6.disabled = true;
    }
    else {
        dist.style.borderColor = null;
    }

    if (d4.trim() === '') {
        city.style.borderColor = 'red';
        ck4.checked = false;
        btn6.disabled = true;
    }
    else {
        city.style.borderColor = null;
    }

    if (d5.trim() === '') {
        addr.style.borderColor = 'red';
        ck4.checked = false;
        btn6.disabled = true;
    }
    else {
        addr.style.borderColor = null;
    }

    if (d6.trim() === '') {
        landm.style.borderColor = 'red';
        ck4.checked = false;
        btn6.disabled = true;
    }
    else {
        landm.style.borderColor = null;
    }

    if (d7.trim() === '') {
        pcode.style.borderColor = 'red';
        ck4.checked = false;
        btn6.disabled = true;
    }
    else {
        pcode.style.borderColor = null;
    }

    if (d1.trim() !== '' && d2.trim() !== '' && d3.trim() !== '' && d4.trim() !== '' && d5.trim() !== '' && d6.trim() !== '' && d7.trim() !== '') {
        container2.style.display = "none";
        container1.style.display = "none";
        container3.style.display = "none";
        container4.style.display = "none";
        suc.style.display="block";

        url += '&coun=' + encodeURIComponent(d1) + '&state=' + encodeURIComponent(d2) + '&dist=' + encodeURIComponent(d3) + '&city=' + encodeURIComponent(d4) + '&addr=' + encodeURIComponent(d5) + '&landm=' + encodeURIComponent(d6) + '&pcode=' + encodeURIComponent(d7);
        console.log(url);
        window.open(url, "_blankl");
    }
})

btn7.addEventListener("click", () => {
    container2.style.display = "none";
    container1.style.display = "none";
    container3.style.display = "block";
    container4.style.display = "none";
})
