var colorspans = document.querySelectorAll(".colors>span")
var containerH1 = document.querySelector(".container>h1")
var containerP = document.querySelector(".container>p")
var animate = "animate__animated animate__fadeIn"
var cogs = document.querySelector(".icon>.fa-gear")
var settings = document.querySelector(".settings")
var cogsBool = true


const colors = {
    color0:"royalblue",
    color1:"rgb(10,113,254)",
    color2:"#000",
    color3:"#fff",

}

cogs.addEventListener("click",function(e){
    e.preventDefault()
    if(cogsBool){
        settings.style.right = "-40px"
        cogsBool = false
    }else{
        settings.style.right = "0px"
        cogsBool = true
    }
})

colorspans.forEach(colorspan=>{
    colorspan.addEventListener("click",function(e){
        e.preventDefault()
        containerH1.className = animate
        containerP.className = animate
        setTimeout(() => {
            containerH1.className = ""
            containerP.className = ""          
        }, 1000);
        var color = getComputedStyle(colorspan).backgroundColor
        if(color=="rgb(65, 105, 225)"){
            setColors(colors.color2,colors.color0,colors.color3)    
        }else if(color=="rgb(0, 0, 0)"){
            setColors(colors.color3,colors.color2,colors.color2)   
        }else if(color == "rgb(255, 255, 255)"){
            setColors(colors.color2,colors.color3,colors.color3)            
        }else if(color == "rgb(10, 113, 254)"){
            setColors(colors.color3,colors.color1,colors.color3)
        }
        cogs.click()
    })
})



function setColors(bg,sifir,shadow){
    document.documentElement.style.setProperty("--color-bg",bg)            
    document.documentElement.style.setProperty("--color-0",sifir)            
    document.documentElement.style.setProperty("--dark-shadow",shadow)   
}