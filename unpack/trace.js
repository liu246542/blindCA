
import {default as Web3c} from 'web3c';
import ballot_artifacts from '../contracts/AuditTracer.json';
var web3c, account, AuditTracer, contractAddress;

window.identity_tracing = async function () {
  try {

  let zeta1 = getUrlParameter('zeta1');
  let xiupsilon = getUrlParameter('xiupsilon');
  
  let zeta1_gx = zeta1.substring(1,zeta1.indexOf(","))
  let zeta1_gy = zeta1.substring(zeta1.indexOf(",")+2, zeta1.length-1)
  
  let identity = AuditTracer.methods.identity_calculating(zeta1_gx,zeta1_gy);
  await  identity.send();
  
  let identity_xiupsilon = await AuditTracer.methods.identity_tracing().call();
  
  $("#credential_xiupsilon").val("["+identity_xiupsilon[0]+","+identity_xiupsilon[1]+"]")
  
  } catch (err) {
    $("#vote-status-alert").text("Error: " + err);
    console.log(err);
  }
}

window.credential_tracing = async function () {
  try { 

  //let xi = getUrlParameter('xi');
  let upsilon = getUrlParameter('upsilon');
  let zeta1 = getUrlParameter('zeta1');
  let xiupsilon = getUrlParameter('xiupsilon');
  
    let xiupsilon_gx = xiupsilon.substring(1,xiupsilon.indexOf(","))
  let xiupsilon_gy = trimStr(xiupsilon.substring(xiupsilon.indexOf(",")+1, xiupsilon.length-1))

  let credential = AuditTracer.methods.credential_calculating(xiupsilon_gx,xiupsilon_gy);
  await  credential.send();
  
    let credential_zeta1 = await AuditTracer.methods.credential_tracing().call();
  $("#res_zeta_1").val("["+credential_zeta1[0]+","+credential_zeta1[1]+"]")

  } catch (err) {
    $("#vote-status-alert").text("Error: " + err);
    console.log(err);
  }
}
