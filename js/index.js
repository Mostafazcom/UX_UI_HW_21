const list = document.querySelectorAll('.arrayList');
const buttonOne = document.querySelector('.toggle-one')
const buttonTwo = document.querySelector('.toggle-two')

const array = Array.from(list)
const firstThree = array.slice(0, 3)
const lastThree = array.slice(3, 6)



buttonOne.addEventListener('click', function () {

   firstThree.forEach(res => {
       res.style.display = 'inline-block'
   })

   lastThree.forEach(res => {
       res.style.display = 'none'
   })

   buttonOne.style.background = '#0057FF'
   buttonOne.style.color = 'white'
   buttonOne.style.transition = '500ms'
   buttonTwo.style.background = 'white'
   buttonTwo.style.color = 'black'

})

buttonTwo.addEventListener('click', function () {

   firstThree.forEach(res => {
       res.style.display = 'none'
   })

   lastThree.forEach(res => {
       res.style.display = 'inline-block'
   })

   buttonTwo.style.background = '#0057FF'
   buttonTwo.style.color = 'white'
   buttonTwo.style.transition = '500ms'
   buttonOne.style.background = 'white'
   buttonOne.style.color = 'black'

})