const saveBtn = document.querySelector(".save-btn");
const noteContainer = document.querySelector(".note-history");
const textPart = document.getElementById("writing-area")
const clearBtn = document.querySelector(".clear-btn") 
const headline = document.querySelector(".notes-headline-writing-tag")




// creating div on history section so it saves on click 
saveBtn.addEventListener('click', () => {

    // alert 
    if( !textPart.value || !headline.value){
        alert('please fill both the headline and note before saving')
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



    // this is for after  you click text and headline to desapear
        textPart.value = ''
        headline.value = ''



})


// this is for clear button so when clicked it clears text 
clearBtn.addEventListener("click" , () => {
    textPart.value = '';
})