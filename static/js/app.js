/*
author:rujia
website:www.rujia.uk
version:1.0
date:04/25/2018
ref: https://github.com/oasislabs/secret-ballot/blob/master/app/javascripts/app.js
*/

import {default as Web3c} from 'web3c';

import ballot_artifacts from '../contracts/AuditTracer.json'

var web3c, account, AuditTracer, contractAddress;

window.runAt = async function(address) {
  console.log("running ballot at ", address);
  AuditTracer = new web3c.oasis.Contract(ballot_artifacts.abi, address, {from: account});
  logsubs(address)
}


window.initParam = function(){
  $("#p1").val(getUrlParameter('p'));
  $("#p2").val(getUrlParameter('p'));
  $("#n1").val(getUrlParameter('n'));
  $("#n2").val(getUrlParameter('n'));
  $("#a1").val(getUrlParameter('a'));
  $("#a2").val(getUrlParameter('a'));
  $("#b1").val(getUrlParameter('b'));
  $("#b2").val(getUrlParameter('b'));
  $("#g1").val(getUrlParameter('g'));
  $("#g2").val(getUrlParameter('g'));
  $("#h1").val(getUrlParameter('h'));
  $("#h2").val(getUrlParameter('h'));
  $("#x").val(getUrlParameter('x'));
  $("#y").val(getUrlParameter('y'));
  $("#gamma").val(getUrlParameter('gamma'));  
  $("#xi").val(getUrlParameter('xi'));   
  $("#z1").val(getUrlParameter('z'));
  $("#z2").val(getUrlParameter('z'));
  
  // tracing.html
  if(checkContractAddress()){
    var errdiv = "<div class='alert alert-danger' style='width: 98%'>Please check your smart contract!!! We can not find your smart contract address</div>"
    $("#smhtml").html(errdiv)
  
    $("#traceIden").css("visibility","hidden");
    $("#traceCred").css("visibility","hidden"); 
  }else{
    var smddrsss = getUrlParameter('contractAddress')
    var smdiv = "<div class='alert alert-success' style='width: 98%'>Your tracing smart address is deployed at <a href = 'https://blockexplorer.oasiscloud.io/address/"+smddrsss+"/transactions' target = '_blank'>"+smddrsss+"</a></div>"
    $("#smhtml").html(smdiv)
    
    $("#xiupsilon").val(getUrlParameter('xiupsilon'))
    $("#zeta_1").val(getUrlParameter('zeta1'))
  }
  
  // get url Param
  
  let param = window.location.search;
  let trace_domain = "http://" + window.location.host;
  if(trace_domain){
    let issue_domain =  trace_domain.substring(0, trace_domain.length-5);
    $("#a_index").attr("href",issue_domain + param);
    $("#a_issuing").attr("href",issue_domain + "/issuing" + param);
    $("#a_verifying").attr("href",issue_domain + "/verifying" + param);
    $("#a_tracing").attr("href",trace_domain + "/tracing.html" + param);
  }
}

window.checkContractAddress = function(){
  return $("#smhtml") && !getUrlParameter('contractAddress')
}


window.getUrlParameter = function(sParam){
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

window.load = function(){
  console.log("window.ethereum = ", window.ethereum);
  if (getUrlParameter('insecureTestingKeys') === '1') {
    console.warn("Using unsecret key manager signing key");
    web3c = new Web3c(window.ethereum, undefined, {
      // This public key corresponds to an insecure key used for local key manager testing.
      keyManagerPublicKey: '0x9d41a874b80e39a40c9644e964f0e4f967100c91654bfd7666435fe906af060f',
    });
  } else {
    web3c = new Web3c(window.ethereum);
  }
  web3c.eth.getAccounts().then((a) => {
    if (!a.length) {
    
    $("#check-status").removeClass();
      $("#check-status").addClass("alert alert-danger");
    $("#check-status").text("Please unlock your wallet, and then reload.");
    $("#check-status").show()

      return;
    }
    account = a[0];
  $("#success-deploy-status").css('display','block');
    $("#success-deploy-status").text(account);
  
    $("#check-status").removeClass();
    $("#check-status").addClass("alert alert-success");
    $("#check-status").show()
  
    $("#ac_addrsss").text(account);
    $("#ac_addrsss").attr("href","https://blockexplorer.oasiscloud.io/address/"+account);
  
    $("#myicon2").removeClass();
    $("#myicon2").addClass("myicon-tick-checked");

    let contractAddress = getUrlParameter('contractAddress');
  
  if(checkContractAddress()){
    return
  }
    
  if (contractAddress == undefined) {
    deploy();
  }else{
    runAt(contractAddress);
  }
  });
}

window.unlock = function(){
  if (window.ethereum) {
    window.ethereum.enable().then(load).catch((e) => {
      console.error(e);
      $("#error-deploy-status").css('display','block');
      $("#error-deploy-status").text("Error: " + e);
    });
  } else {
    $("#error-deploy-status").css('display','block');
    $("#error-deploy-status").text("Error: Newer version of metamask needed!");
  }
}

window.trimStr = function(str){
  return str.replace(/(^\s*)|(\s*$)/g,"");
}

$(function(){
  initParam();
  Web3c.Promise.then(unlock);
})