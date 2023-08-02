const btn = document.querySelector('#detalles')
const lista = document.querySelectorAll('.lista')



btn.addEventListener('click', ()=>{
  lista.forEach((el)=>{
    el.classList.toggle('d-none')
  })
    if(lista[1].className == 'lista overflow-hidden d-none'){
      btn.innerHTML = 'Ver Detalle'
    
    } else {
      btn.innerHTML = 'Ver Menos'
      const typed = new Typed('.escribir', {
        strings : [ `<li class="border-bottom border-dark-subtle">Conciliaciones bancarias.</li>
        <li class="border-bottom  border-primary-subtle">Confección cash flow.</li>
        <li class="border-bottom  border-success-subtle">Árqueos de caja. </li>
        <li class="border-bottom border-danger-subtle">Transferencias.</li>
        <li class="border-bottom  border-white">Emisión de echeq y cheques.</li>
        <li class="border-bottom border-black">Conciliación de cheques.</li>`],
        typeSpeed: 10,
        startDelay: 500
      })
      const typed1 = new Typed('.escribir1', {
        strings : [ `<li class="border-bottom border-danger-subtle">Liquidación de iibb, iva. </li>
        <li class="border-bottom border-white">Proyectación de impuestos.</li>
        <li class="border-bottom border-black">Cancelación de veps. </li>`],
        typeSpeed: 10,
      })
      const typed2 = new Typed('.escribir2', {
        strings : [ `<li class="border-bottom border-dark-subtle">Conciliación ctas corrientes proveedores. </li>
        <li class="border-bottom border-primary-subtle">Conciliación ctas ctes clientes.</li>
        <li class="border-bottom border-success-subtle">Carga de comprobantes de compras. </li>
        <li class="border-bottom border-danger-subtle">Emisión. De comprobantes de ventas.  </li>
        <li class="border-bottom border-white">Pagos de sueldos.</li>
        <li class="border-bottom border-black">Emisión de planillas de Excels. </li>`],
        typeSpeed: 10,
      })
    }

    btn.classList.toggle('heartbeat')
    
   
})



const tema = document.querySelector("#tema")
const claro = document.querySelector("#claro")
const oscuro = document.querySelector("#oscuro")
const body = document.querySelector("body")
const logo = document.querySelector("#logo")
const logoDark = document.querySelector("#logo-dark")
const cambiologo = document.querySelectorAll(".logos-dark")
const cambiologo1 = document.querySelectorAll(".logos-dark1")
const sobreMi = document.querySelector("#sobremi")


tema.addEventListener("click", ()=>{
  oscuro.classList.toggle("d-none")
  claro.classList.toggle("d-none")
  body.classList.toggle("dark")
  tema.classList.toggle("link-dark")
  tema.classList.toggle("link-warning")
  logoDark.classList.toggle("d-none")
  logo.classList.toggle("d-none")
  

  cambiologo.forEach((logo)=>{
    logo.classList.toggle("d-none")
  })
  cambiologo1.forEach((logo)=>{
    logo.classList.toggle("d-none")
  })
  body.classList.contains("dark") ? localStorage.setItem("dark-mode", "true") : localStorage.setItem("dark-mode", "false")
  
})

if(localStorage.getItem("dark-mode") == "true"){
  body.classList.add("dark")
  claro.classList.add("d-none")  
  oscuro.classList.remove("d-none")
  tema.classList.remove("link-dark")
  tema.classList.add("link-warning")
  logoDark.classList.remove("d-none")
  logo.classList.add("d-none")
 
  cambiologo.forEach((logo)=>{
    logo.classList.remove("d-none")
  })
  cambiologo1.forEach((logo)=>{
    logo.classList.add("d-none")
  })
} else {
  body.classList.remove("dark")
  claro.classList.remove("d-none")  
  oscuro.classList.add("d-none")
  tema.classList.add("link-dark")
  tema.classList.remove("link-warning")
  logoDark.classList.add("d-none")
  logo.classList.remvoe("d-none")
  
  cambiologo.forEach((logo)=>{
    logo.classList.add("d-none")
  })
  cambiologo1.forEach((logo)=>{
    logo.classList.remove("d-none")
  })
}