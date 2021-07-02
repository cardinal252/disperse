const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
  }
  
 const mountScript= () => {
    window.onload = () => {
      addScript("/assets/js/jquery-2.2.3.min.js")
      addScript("/assets/js/plugins.js")
      addScript("/assets/js/bootstrap.min.js")
      addScript("/assets/js/custom.min.js")      
     
    }
  }