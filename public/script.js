
document.getElementById('formPesquisa').addEventListener('submit', async (e) => {

  
  e.preventDefault();

     

    const ncnh = document.getElementById("cnh").value;
    const tempo_cnh = document.getElementById("tempo").value;
    const inseg_est = document.getElementById("inseguranca").value;
    const sit_dif = document.getElementById("situacao").value;    
    const info_tel = document.getElementById("tel").value;
    const email = document.getElementById("e_mail").value;
    const coment_motivo = document.getElementById("motivo").value;

    const form = e.target;  

    
   

// ===== Validação ao enviar =====

 // const telefone = document.getElementById('tel');
  //const email = document.getElementById("email").value;

 

  const res = await fetch('http://localhost:3100/salvar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ncnh, tempo_cnh, inseg_est, sit_dif, coment_motivo, info_tel, email })
      });

  const data = await res.json();
      document.getElementById('status').innerText = 'Obrigado pela participação!' //data.id;  
      form.reset();
});


fetch('Coment.txt')
    .then(response => response.text())
    
    .then(data => {

      // const data_I = data.replaceAll(".", ".\n");

          const elemento = document.getElementById('mensg');
        //  console.log(data_I);
       let i = 0;
   
        function maquinaEscrever(){
            
          if (i < data.length) {
            
         //var data_I = data.replaceAll('.', '.\n');
               elemento.innerHTML += data.charAt(i);
                i++;
               setTimeout(maquinaEscrever, 50); // Velocidade (ms)
            }

        }   
         maquinaEscrever();
     
    });

    

// Aguarda a página carregar
window.onload = function() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    // Abre o modal
    modal.style.display = "block";

    // Fecha ao clicar no (x)
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Fecha ao clicar fora do modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

tel.addEventListener('input', function (e) {

    
    let valor = e.target.value.replace(/\D/g, '');

    if (valor.length > 11) valor = valor.slice(0, 11);

    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
    valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');

    e.target.value = valor;
  });

 

  function formatarEmail(campo) {
    // 1. Pega o valor e remove espaços nas pontas
    let valor = campo.value.trim();
    
    // 2. Transforma tudo em minúsculas
    valor = valor.toLowerCase();
    
    // 3. Atualiza o campo com o valor formatado
    campo.value = valor;
}
  


