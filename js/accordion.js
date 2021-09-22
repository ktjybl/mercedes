const lists=document.querySelector('.feature-sub');
const btns=document.querySelectorAll('.feature__link');

btns.forEach((btnItem, index)=>{
    btnItem.addEventListener('click',()=>{
      btns.forEach((btnItem)=>{
         btnItem.classList.remove('feature__link_active')
       })
       btnItem.classList.add('feature__link_active')
        
      lists.forEach((listItem)=>{
         listsItem.classList.add('hidden')
       })
       listItem[index].classList.remove('hidden')
    })
})

