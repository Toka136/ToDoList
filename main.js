function addtask()
{
    let input=document.getElementById("inp").value;
    if(input=="")
    {
        document.getElementById("inp").placeholder="Please Enter Your Task";
    }
    else{
    let mydiv=document.createElement("div");
    mydiv.classList.add("maindiv");
    let mydiv2=document.createElement("div");
    mydiv2.classList.add("div2");
    let icon=document.createElement("div");
    icon.innerHTML='<i class="fa-regular fa-circle-check check"></i>';
    icon.classList.add("true");
    let icondele=document.createElement("button");
    icondele.classList.add("dele");
    let p=document.createElement("p");
    p.innerHTML=input;
    mydiv2.append(icon);
    mydiv2.append(p);
    mydiv.append(mydiv2);
    mydiv.append(icondele);
    icondele.innerHTML='<i class="fa-solid fa-xmark"></i>';
    document.getElementById("bigcontainer").append(mydiv);
    document.getElementById("inp").value="";
    }
    deletediv();
    done();
}
function deletediv()
{
    let buttons=document.querySelectorAll("button.dele");
    for(var i=0;i<buttons.length;i++)
    {
        buttons[i].onclick=function()
        {
            let classes =this.parentNode;
            classes.classList.add("hide");
        }
    }
    
}
function done()
{
    let all_p = document.querySelectorAll("div.div2");
    for(var i=0;i<all_p.length;i++)
    {
        all_p[i].onclick=function()
        {
            let child2=this.children[1];
            if(child2.classList.contains("line"))
            {
                child2.classList.remove("line");
            }
            else
            {
                child2.classList.add("line"); 
            }
            let child1=this.children[0];
            if(child1.classList.contains("sign"))
            {
                child1.classList.remove("sign");
            }
            else
            {
                child1.classList.add("sign"); 
            }
            
        }
    }
    
}
setInterval(deletediv(),1000);
setInterval(done(),1000);