const container=document.querySelector('.container');


function setGrid(container){
    container.innerHTML='';
    let num=prompt("Enter number of grids(less than 100): ");
    if(num>=100 || num<10)
    {
        alert("Enter a value more than 10 and less than 100");
        setGrid(container);
    }
    else{
        for(let i=0;i<num*num;i++)
        {
            let newDiv = document.createElement("div");
            newDiv.style.height=`calc(600px/${num})`;
            newDiv.style.width=`calc(600px/${num})`;
            newDiv.style.backgroundColor = 'aquamarine';
            container.append(newDiv);
        }
        
    }
    hover('black');
}

function hover(color){
    const clrdiv=document.querySelectorAll('.container div');
    clrdiv.forEach(div => {
    div.addEventListener('mouseover',()=>{
    div.style.backgroundColor=color;
    });
});
}
const newgridBtn=document.querySelector('#new');
newgridBtn.addEventListener('click',()=>{
    setGrid(container);
})

const eraseBtn=document.querySelector('#eraser');
eraseBtn.addEventListener('click',()=>{
    hover('aquamarine')
})

const penBtn=document.querySelector('#pen');
penBtn.addEventListener('click',()=>{
    hover('black')
})


setGrid(container);

