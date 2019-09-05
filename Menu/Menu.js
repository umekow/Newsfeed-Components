/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

//create html elements
const createMenu = ( menuArray) => {
  const menu_div = document.createElement('div'); 
  menu_div.classList.add('menu'); 
  const unorder_list = document.createElement('ul'); 

   menuArray.forEach(item => {
     //create a list item
     //add content
     //append to to unorder_list
     let current_li = document.createElement('li');
     current_li.textContent = item; 
     unorder_list.appendChild(current_li); 
     
   }); 

  //append unorder_list
  menu_div.appendChild(unorder_list); 
  //select menu buttom 

  const menu_button = document.querySelector('.menu-button');
  menu_button.addEventListener('click', () =>{
    menu_div.classList.toggle('menu--open');
    console.log(menuArray);
  });
  return menu_div;
}






document.querySelector('.header').prepend(createMenu(menuItems)); 

 