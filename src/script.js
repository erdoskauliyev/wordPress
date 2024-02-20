const spanDelet = document.querySelectorAll('span'),
      addTitleBig = document.querySelector('.title_big'),
      waitDivider = document.querySelector('.waiting_divider'),
      moreImg = document.querySelector('.more_img'),
      addCoursWrapperUl = document.querySelector('.cours_wrapper');




spanDelet.forEach(span => {
    span.remove();
})

addTitleBig.textContent = ' это очень просто';


waitDivider.style.cssText = 'background-color: red';
moreImg.style.cssText = 'cursor: pointer';


const ul = document.createElement('ul');
ul.classList.add('cours_list_2');

const timeValue = ['18m', '15m', '1y', '6m', '26m', '5y'];
timeValue.forEach(timeValue => {
    const li = document.createElement('li');
    li.classList.add('cours_item');
    li.textContent = timeValue;
    ul.appendChild(li);
})

addCoursWrapperUl.appendChild(ul);

addCoursWrapperUl.style.cssText = 'display: flex; justify-content: space-around;'