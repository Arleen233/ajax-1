
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET",'./2.js')
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {}
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET","./style.css")
    request.onload = () => {
        const style = document.createElement("style")
        style.innerHTML = request.response
        document.body.appendChild(style)
    }
    request.onerror = () => {}
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET","./3.html")
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {}
    request.send()
}


getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET","./4.xml")
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            const dom = request.responseXML
            console.log(dom.getElementsByTagName("warning")[0])
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET","./5.json")
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response)
            console.log(typeof request.response)
            console.log('-------')
            const bool = JSON.parse(request.response)
            console.log(bool)
            console.log(typeof bool)
        }
    }
    request.send()
}

let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET",`/page${n+1}`)
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            const arr = JSON.parse(request.response)
            arr.forEach(item => {
                const li = document.createElement("li")
                li.textContent = item.id;
                xxx.appendChild(li);
            })
            n+=1
        }
    }

    request.send()
}