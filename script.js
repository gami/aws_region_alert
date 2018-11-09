const in_ri_purchase = ()=>{
  return location.hash.match(/^#ReservedInstance/)
}

const curret_region_name = ()=>{
　return document.getElementById("nav-regionMenu").textContent
}

const button_ri_purchase = ()=>{
  return document.getElementById("gwt-debug-button-ri-purchase")
}

const add_alert = (elm, txt)=>{
  elm.innerText += "（"
  elm.innerText += txt
  elm.innerText += "）"
}
const process = ()=> {
  if (!in_ri_purchase()) {
    return
  }
  const region_name = curret_region_name()
  const btn = button_ri_purchase()
  add_alert(btn, region_name)

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
