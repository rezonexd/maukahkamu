// ===== AMBIL ELEMENT (WAJIB BIAR GAK ERROR) =====
var teksnimasi = document.getElementById("teksnimasi");
var initom = document.getElementById("initom");
var Tombol = document.getElementById("Tombol");
var TombolWA = document.getElementById("TombolWA");
var iniakhir = document.getElementById("iniakhir");
var stikerakhir = document.getElementById("stikerakhir");
var stikerakhir2 = document.getElementById("stikerakhir2");
var judulakhir = document.getElementById("judulakhir");
var kalimatakhir = document.getElementById("kalimatakhir");
var palingakhir = document.getElementById("palingakhir");
var first_stiker = document.getElementById("first_stiker");
var audio = document.getElementById("linkmp3");

// ===== WATERMARK =====
var date = new Date();
var days = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
var months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

var watermark = document.createElement("div");
watermark.textContent = days[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
watermark.style = "color:white;opacity:.5;font-size:10px;position:fixed;bottom:25px;left:25px;z-index:150";
document.body.appendChild(watermark);

// ===== TEKS ANIMASI =====
var initeksnimasi = teksnimasi.innerHTML;
teksnimasi.innerHTML="";

function katateksnimasi(){
  new TypeIt("#teksnimasi", {
    strings: [initeksnimasi],
    speed: 55,
    cursor: true,
    afterComplete: function(){
      teksnimasi.innerHTML = initeksnimasi;
      setTimeout(smn,200);
    }
  }).go();
}

// ===== CONTROL =====
var fungsi=0, fungsiklik=0, skrg=1;

function tes(){
  if(fungsi==0){
    playaud();
    initom.style="opacity:0;bottom:0;";
    window.scrollBy({top: tinggi,behavior:'smooth'});
    fungsi=1;
    skrg++;

    if(skrg<=2) setTimeout(smn,700);
    if(skrg==3) setTimeout(katateksnimasi,500);
    if(skrg==4) setTimeout(muncultombol,1200);
  }
}

function smn(){fungsi=0;initom.style="";}

function muncultombol(){
  Tombol.style="opacity:1;transform:scale(1)";
}

// ===== AKHIR =====
function aksiakhir(){
  if(fungsiklik==0){
    fungsiklik=1;
    setTimeout(katajudul,100);
  }
}

function katajudul(){
  new TypeIt("#judulakhir", {
    strings: [teksjudulakhir],
    speed: 50,
    cursor: true,
    afterComplete: function(){
      judulakhir.innerHTML = teksjudulakhir;
      setTimeout(katakata,400);
    }
  }).go();
}

function katakata(){
  new TypeIt("#kalimatakhir", {
    strings: [tekskalimatakhir],
    speed: 48,
    cursor: true,
    afterComplete: function(){
      kalimatakhir.innerHTML = tekskalimatakhir;
      setTimeout(muncultombol2,500);
    }
  }).go();
}

function muncultombol2(){
  TombolWA.style="opacity:1;transform:scale(1)";
}

// ===== WA =====
function menuju(){
  window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;
}

// ===== AUDIO =====
var fungsiAud=0;
function playaud(){
  if(fungsiAud==0){
    fungsiAud=1;
    audio.play().catch(()=>{});
  }
}

// ===== TINGGI =====
var tinggi = iniakhir.offsetHeight;
setInterval(()=>{tinggi = iniakhir.offsetHeight;},200);

// ===== LOAD =====
window.addEventListener("load", ()=>{
  window.scrollTo(0,0);

  document.querySelector(".overlay").style.display="none";
  initom.style="";

  if(first_stiker){
    first_stiker.style="opacity:1;transition:all 2s ease";
  }

  ScrollReveal().reveal(".title",{duration:2000});
  ScrollReveal().reveal(".fade-in",{delay:200,duration:2000});
  ScrollReveal().reveal(".slide-right",{origin:"left",distance:"200px"});
  ScrollReveal().reveal(".slide-up",{origin:"bottom",distance:"100px"});

  document.addEventListener("scroll", ()=>{
    let bottom = window.scrollY + window.innerHeight;
    if(bottom > document.body.scrollHeight - 200){
      initom.style="opacity:0;bottom:0";
      aksiakhir();
    }
  });

});

// ===== AUTO START (BIAR GAK STUCK) =====
setTimeout(()=>{tes()},1500);