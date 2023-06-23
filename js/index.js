const submit = document.querySelector('#submit');

submit.addEventListener('click', ()=>{
    Swal.fire(
        'Email Enviado',
        'Te contestare en breve',
        'success'
      )
})