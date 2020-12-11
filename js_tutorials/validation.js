const name= document.getElementById("name")
const password= document.getElementById("password")
//const email= document.getElementById("email")
//const age= document.getElementById("age")
const form= document.getElementById("form")
const errorElement = document.getElementById('error')

form.addEventListener('submit',(e) => )
{
    let messages =[]

    if (name.value === '' || name.value == null)
    {
        messages.push("name is required")
    }
    if ( password.value.length <= 6)
    {
        messages.push('password must be longer than 6 characters')
    }
    if (messages.length>0)
    {
        e.preventDefault()
        errerElemnet.innerText = messages.join(', ')
    }
}
