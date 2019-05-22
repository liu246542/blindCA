/*
$(function(){
  $('#setup').on('click', ()=>{
    $.post('setup', {'L': 256, 'N': 40}, (res)=>{
      console.log(res);
    });    
  });
})
*/


window.onload = ()=>{
  $('#setup').on('click', ()=>{
    $.post('setup', {'L': 192}, (res)=>{
      jdict = JSON.parse(res);
      $('#p1').val(jdict.p);
      $('#p2').val(jdict.p);
      $('#g1').val(jdict.g);
      $('#h1').val(jdict.h);
      $('#g2').val(jdict.g);
      $('#h2').val(jdict.h);      
      // console.log(res);
    })
  });

  $('#issuerkey').on('click', ()=>{
    $.post('issuerkey', {}, (res)=>{
      jdict = JSON.parse(res);
      $('#x').val(jdict.x);  
      $('#y').val(jdict.y);
      $('#z1').val(jdict.z);
    })
  });

  $('#userkey').on('click', ()=>{
    $.post('userkey', {}, (res)=>{
      jdict = JSON.parse(res);
      $('#gamma').val(jdict.gamma);
      $('#xi').val(jdict.xi);
      $('#z2').val(jdict.z);
    })
  });
}