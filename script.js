function validate()
{
    var name = document.getElementById('name').value 
    var email = document.getElementById('email').value 
    var pass = document.getElementById('pass').value 
    var cpass = document.getElementById('cpass').value

    vname(name)
    vemail(email)
    vpass(pass)
    vcpass(cpass,pass)
}

function vname(name)
{
    if(name.length > 7)
    {
        document.getElementById('name').classList.add('success')
        document.getElementById('name').classList.replace('error','success')
        document.getElementById('name_e').innerHTML=""
    }
    else
    {
        document.getElementById('name').classList.add('error')
        document.getElementById('name').classList.replace('success','error')
        document.getElementById('name_e').innerHTML="Username must be 8 letters long"
    }
}

function vemail(email)
{
    if(email.length > 7 && email.includes('@gmail.com'))
    {
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('email_e').innerHTML=""
    }
    else
    {
        document.getElementById('email').classList.add('error')
        document.getElementById('email').classList.replace('success','error')
        document.getElementById('email_e').innerHTML="Email must 8 letters long and must conatin @gmail.com"
    }
}

function vpass(pass)
{
    if(pass.length > 7)
    {
        document.getElementById('pass').classList.add('success')
        document.getElementById('pass').classList.replace('error','success')
        document.getElementById('pass_e').innerHTML=""
    }
    else
    {
        document.getElementById('pass').classList.add('error')
        document.getElementById('pass').classList.replace('success','error')
        document.getElementById('pass_e').innerHTML="Password must be 8 letters long"
    }
}

function vcpass(cpass,pass)
{
    if(cpass == pass && cpass.length > 7)
    {
        document.getElementById('cpass').classList.add('success')
        document.getElementById('cpass').classList.replace('error','success')
        document.getElementById('cpass_e').innerHTML=""
    }
    else
    {
        document.getElementById('cpass').classList.add('error')
        document.getElementById('cpass').classList.replace('success','error')
        document.getElementById('cpass_e').innerHTML="Password does not match"
    }
}