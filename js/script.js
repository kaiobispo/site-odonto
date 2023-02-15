
//sidenav
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
      direction: 'left'
    });
  });

  //btn
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'top',
      hoverEnabled: false
    });
  });
// Slider 
const slider = window.document.querySelector('.slider')
M.Slider.init(slider, {
    indicators: false,
    height: 760,
    transition: 1000,
    interval: 6000,
})
//
var btn = window.document.querySelector('.btn')
btn.addEventListener('click', function(){
  event.preventDefault()
    var nome = window.document.getElementById('NOME')
    var sobrenome = window.document.getElementById('sobrenome')
    var Email = window.document.getElementById('Email')
    var senha = window.document.getElementById('senha')
    var homem = window.document.getElementById('homem')
    var mulher = window.document.getElementById('mulher')
    var dia = new Date()
    var hora = dia.getHours()
    var idade = window.document.getElementById('idade')
    var res = window.document.getElementById('res')

  var doutor = window.document.getElementById('doutor')
  var tipo = window.document.getElementById('tipo')

  if(NOME.value == '' || sobrenome.value == '' || Email.value == '' || senha.value == ''){
    window.alert('preencha todos os campos')
  }else{
    res.innerText = `olá ${nome.value} sua Consulta está marcada para as ${hora} horas com o(a) ${doutor.value} e a consulta ${tipo.value} verifique seu email e confirme o código.`
    res.style.background = '#3CB371'
    res.style.border = '1px solid black'
    res.style.width = '350px'
    res.style.textAlign = 'center'
    res.style.margin = '20px auto'
    res.style.padding = '20px'
    res.style.borderRadius = '15px'

    //gênero
    if(homem.checked){
      window.alert('identificamos um homem')
    }else if(mulher.checked){
      window.alert('identificamos uma mulher')
    }

    //idade
    if(idade.value <= 17){
      window.alert(`você é de menor e não pode passar por uma consulta a não ser acompanhado do seu responsável`)
      res.innerText = `Sua consulta não será marcada pois você é de menor`
      res.style.background = 'red'
      res.style.border = '1px solid black'
      res.style.width = '500px'
      res.style.textAlign = 'center'
      res.style.margin = '20px auto'
      res.style.padding = '20px'
      res.style.borderRadius = '15px'
    }else if(idade.value >= 18){
      window.alert(`você tem  ${idade.value} anos`)
    }else{
      
    }




    
}
})