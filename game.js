let score =0
function myfunc()
{
    let get = document.getElementById("get").value
    // document.getElementById("show").innerHTML = a

    let r = Math.floor(Math.random() * 20 ) + 1;
    document.getElementById("mr").innerHTML = r
    if(get==r)
    {
        score++;
        document.getElementById("show").innerHTML = "Win "+score 
    }
    else
    {
        document.getElementById("show").innerHTML = "Loss"
    }

    
}