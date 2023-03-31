const getBtn = document.getElementById("get-btn")
const colorPicker = document.getElementById("color-picker")
const colorScheme = document.getElementById("color-scheme")
const colorPallet = document.querySelector(".pallet")
const container = document.getElementById("container")

let hexWithNoHash = '000000'
let hex = ''
let colorMode = ''

colorPicker.addEventListener("change", function(){
    hex = colorPicker.value
    hexWithNoHash = hex.slice(1)
})

colorScheme.addEventListener("input", function(){
    colorMode = colorScheme.value.toLowerCase()
    
})

renderColorHtml()
getBtn.addEventListener("click", renderColorHtml)

function renderColorHtml(){
    let html = ''

    fetch(`https://www.thecolorapi.com/scheme?hex=${hexWithNoHash}&mode=${colorMode}&count=5`)
        .then((res) => res.json())
        .then((data) => {
        
            data.colors.forEach(function (color){
                let hexValue = color.hex.value
                let nameValue = color.name.value

                html += `
                <div class=pallet-container>
                <div class="pallet" style="background-color:${hexValue}">
                </div>
                <div class="color-info">
                <p class="hex">${hexValue}</p>
                <p class="color-name">${nameValue}</p>
                </div>
                </div>

            `
            })
            container.innerHTML = html
        })
 }
