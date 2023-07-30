const btn = document.querySelector('#detalles')
const lista = document.querySelectorAll('.lista')



btn.addEventListener('click', ()=>{
    lista.forEach((el)=>{
      el.classList.toggle('d-none')
    })
    if(lista[1].className == 'lista d-none'){
      btn.innerHTML = 'Ver Detalle'
    } else {
      btn.innerHTML = 'Ver Menos'
    }
    const typed = new Typed('.escribir', {
      strings : [ `<li class="border-bottom border-dark-subtle">Conciliaciones bancarias.</li>
      <li class="border-bottom  border-primary-subtle">Confección cash flow.</li>
      <li class="border-bottom  border-success-subtle">Árqueos de caja. </li>
      <li class="border-bottom border-danger-subtle">Transferencias.</li>
      <li class="border-bottom  border-white">Emisión de echeq y cheques.</li>
      <li class="border-bottom border-black">Conciliacion de cheques.</li>`],
      typeSpeed: 10,
      startDelay: 500
    })
    const typed1 = new Typed('.escribir1', {
      strings : [ `<li class="border-bottom border-danger-subtle">Liquidación de iibb, iva. </li>
      <li class="border-bottom border-white">Proyectacion de impuestos.</li>
      <li class="border-bottom border-black">Cancelación de veps. </li>`],
      typeSpeed: 10,
    })
    const typed2 = new Typed('.escribir2', {
      strings : [ `<li class="border-bottom border-dark-subtle">Conciliacion ctas corrientes proveedores. </li>
      <li class="border-bottom border-primary-subtle">Conciliacion ctas ctes clientes.</li>
      <li class="border-bottom border-success-subtle">Carga de comprobantes de compras. </li>
      <li class="border-bottom border-danger-subtle">Emision. De comprobantes de ventas.  </li>
      <li class="border-bottom border-white">Pagos de sueldos.</li>
      <li class="border-bottom border-black">Emisión de planillas de Excels. </li>`],
      typeSpeed: 10,
    })
})





