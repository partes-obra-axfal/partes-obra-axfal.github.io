// Dirección del programa de Google (la URL que acaba en /exec).
// Para cambiarla: en GitHub abre este archivo, pulsa el lápiz, pega la nueva entre las comillas y «Commit changes».
const API_URL = "https://script.google.com/macros/s/AKfycbzLryhGW6ah702GukVZNs6MNELljUnZ8w_hGYJC33yiR8NkCOu5mEkoBymeG6TeEWJcaA/exec";

// LETRA GRANDE para que los encargados lo vean bien (24-11-2026).
// Para hacerla aún más grande o más pequeña, cambia los números de «font-size».
(function () {
  var css = [
  "html,body{font-size:19px;line-height:1.4}",
  "input,textarea{font-size:19px;padding:12px 14px}",
  ".barra img{height:34px}",
  ".barra .t{font-size:25px}",
  ".barra .q{font-size:16px}",
  ".lnk{font-size:17px}",
  ".prueba div{font-size:16px}",
  "main{padding-bottom:170px}",
  "h2{font-size:23px}",
  "h2 small{font-size:16px}",
  ".nota{font-size:17px}",
  ".volver{font-size:19px;padding:8px 0}",
  ".obra-cab b{font-size:33px}",
  ".obra-cab span{font-size:17px}",
  ".btn{padding:13px 16px}",
  ".go{font-size:24px;padding:15px 16px}",
  ".peligro-lnk{font-size:17px}",
  "label.f{font-size:16px}",
  ".item .n{font-size:24px}",
  ".item .d{font-size:16px}",
  ".item .flecha{font-size:28px}",
  ".item .acc .btn{font-size:16px;padding:10px 14px}",
  ".sync{font-size:17px}",
  ".estado{font-size:14px}",
  ".res{grid-template-columns:repeat(auto-fit,minmax(100px,1fr))}",
  ".res b{font-size:27px}",
  ".res span{font-size:15px}",
  ".chips{gap:10px}",
  ".chip{font-size:18px;padding:10px 16px}",
  ".pers .p span{font-size:18px}",
  ".pers .p small{font-size:15px}",
  ".step button{width:46px;height:46px;font-size:26px}",
  ".step .v{font-size:22px;min-width:64px}",
  ".step .v input{width:58px}",
  ".pers .p .step .v{font-size:22px;font-weight:700}",
  ".pers .p.sp2 .step .v{min-width:82px}",
  ".maq{padding:11px 12px;min-height:72px}",
  ".maq .nm{font-size:16.5px}",
  ".maq .u{font-size:14.5px}",
  ".maq .mas{font-size:21px}",
  ".maq.on .step button{width:40px;height:40px}",
  ".maq.on .step .v{min-width:0;font-size:20px}",
  ".maq .tin input{font-size:22px}",
  ".tira{width:46px;height:46px}",
  ".maq .tira{width:36px;height:36px}",
  ".maq.on .nm{padding-right:42px;min-height:36px}",
  ".espesor{font-size:17px}",
  ".pie .msg{font-size:16px;min-height:22px}",
  ".pin h1{font-size:32px}",
  ".pin .caja{max-width:360px}",
  ".teclado{grid-template-columns:repeat(3,84px);gap:14px}",
  ".teclado button{height:66px;font-size:32px}",
  ".teclado button.peq{font-size:17px}",
  ".aviso{font-size:17px}",
  ".toast{font-size:17px;bottom:125px}",
  ".toast .deshacer{font-size:17px;padding:8px 14px}",
  ".resumen-dia{font-size:18px}",
  ".casilla{width:32px;height:32px;font-size:19px}"
  ].join("\n");
  var s = document.createElement("style");
  s.id = "letraGrande";
  s.textContent = css;
  document.head.appendChild(s);
})();
