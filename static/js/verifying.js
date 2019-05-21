window.onload = ()=>{
  $('#verifyCred').on('click', ()=>{
    $.post('verifyCred', {}, (res)=>{
      jdict = JSON.parse(res);
      $('#omegadelta').val(jdict.omdelta);
      $('#hashresult').val(jdict.hashres);
      $("#res").html("&#969; + &#948;  = hashresult. <br> The credential is verified successfully.");
    });
  });
}