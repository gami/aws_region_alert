const in_ri_purchase = ()=>{
  return location.hash.match(/^#ReservedInstance/) || location.hash.match(/^#reserved-instance/) 
}

const curret_region_name = ()=>{
　return document.getElementById("nav-regionMenu").textContent
}

const button_ri_purchase = ()=>{
  return document.getElementById("gwt-debug-button-ri-purchase") 
}

const button_ri_purchase_rds = ()=>{
  //return document.getElementById("rds-reserved-instances-create-btn") 
}

const add_alert = (elm, txt)=>{
  if (!elm) {
    return
  }
  elm.innerText += "（"
  elm.innerText += txt
  elm.innerText += "）"
}
const process = ()=> {
  if (!in_ri_purchase()) {
    return
  }
  const region_name = curret_region_name()

  add_alert(button_ri_purchase(), region_name)
  add_alert(button_ri_purchase_rds(), region_name)

  var iv = setInterval(()=>{
    const nbs = document.getElementsByTagName("button")
    if (nbs.length < 1){
        return
    }
    for(var i=0; i<nbs.length; i++) {
      const elm = nbs.item(i)
      if(elm.textContent.trim()=="購入"){
        add_alert(elm, region_name)
      }
    }
  }, 1000)
}

setTimeout(()=>{
    process()
}, 2000)
