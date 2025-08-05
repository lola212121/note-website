const saveBtn = document.querySelector(".save-btn");
const noteContainer = document.querySelector(".note-history");
const textPart = document.getElementById("writing-area")
const clearBtn = document.querySelector(".clear-btn") 
const headline = document.querySelector(".notes-headline-writing-tag")
const body = document.body
const clearAll = document.querySelector(".history-clear-btn")



// creating div on history section so it saves on click 
saveBtn.addEventListener('click', () => {

    // alert 
    if( !textPart.value || !headline.value){
        // creating alert div
        const alertDiv = document.createElement('div')
        alertDiv.classList.add("alert-div")
        body.appendChild(alertDiv)


        // alert text
        const alertText= document.createElement("p")
        alertText.classList.add("alert-text")
        alertText.textContent = "please fill both the headline and note before saving"

        alertDiv.appendChild(alertText)

        // alert button for closing div
        const alertButton = document.createElement("button")
        alertButton.classList.add("alert-button")
        alertButton.innerHTML = 'close'

        alertButton.addEventListener('click' , () => {
            alertDiv.classList.add("hide")
        })



        alertDiv.appendChild(alertButton)
        



        return
    }


    // creating div 
    const noteDiv = document.createElement('div')

    noteDiv.classList.add('note-div')

    noteContainer.appendChild(noteDiv)


    // this is for healine 
    const textHeadline = document.createElement('p')
    textHeadline.classList.add('headline-text')
    textHeadline.innerHTML = headline.value

    noteDiv.appendChild(textHeadline)




    // creating deleate button
    const delBtn = document.createElement('button')

    delBtn.textContent = "delete"
    delBtn.classList.add('del-btn')

    noteDiv.appendChild(delBtn)


    delBtn.addEventListener('click', () => {
        noteDiv.remove()
    })



    
    // this is for generating random collors 
    function changeColor(){
        const colors = ["#ff4545" , "#00ff9988" , "#006aff" , "#ff0095"]
        const randomColor = Math.floor(Math.random() * colors.length)
        noteDiv.style.backgroundColor = colors[randomColor]
    }

    changeColor()


    // this is for after  you click text and headline to desapear
        textPart.value = ''
        headline.value = ''



})


// this is for clear button so when clicked it clears text 
clearBtn.addEventListener("click" , () => {
    textPart.value = '';
})

// this is for clearing all notes by one click on btn
clearAll.addEventListener("click", () => {
    // this is so when we click to create new div 
    const delDiv = document.createElement("div")
    delDiv.classList.add("del-div")
    body.appendChild(delDiv)


    // this is text in div
    const divText = document.createElement("p")
    divText.innerHTML = "Are you sure you want to delete all notes. This action cannot be undone."
    divText.classList.add("del-text")
    delDiv.appendChild(divText)


    // creating yes and no button 
    const yesBtn = document.createElement("button")
    const noBtn = document.createElement("button")


    yesBtn.classList.add("yes-button")
    yesBtn.innerHTML = 'yes'
    noBtn.classList.add("no-button")
    noBtn.innerHTML = 'no'


    yesBtn.addEventListener('click', () => {
        noteContainer.innerHTML = ''
        delDiv.classList.add("hide")
    })

    noBtn.addEventListener('click', () => {
        delDiv.classList.add("hide")    
    })


    delDiv.appendChild(yesBtn)


    delDiv.appendChild(noBtn)


})




