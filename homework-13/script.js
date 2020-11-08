// Exercise 1:
const sum = () => {
  const firstNum = document.getElementById("first-num")
  const secondNum = document.getElementById("second-num");
  const sumValue = Number(firstNum.value) + Number(secondNum.value);
  document.getElementById('sum-line').innerHTML = "a + b = " + sumValue;
}
// Exercise 2:
const changeColor = () => {
  const color = document.getElementById('box');
  if (color.style.backgroundColor === 'red') color.style.backgroundColor = 'green';
  else color.style.backgroundColor = 'red';
}
// Exercise 3:
const displayProduct = () => {
  const product = document.getElementById('product-select');
  for (let index = 0; index < product.length; index++) {
    if (product.options[index].value === 'Laptop') document.getElementById("laptop-brand-list").style.display = 'none';
    else if (product.options[index].value === 'Mobile') document.getElementById("mobile-brand-list").style.display = 'none';
    else document.getElementById("TV-brand-list").style.display = 'none';
  }
  if (product.options[product.selectedIndex].value === 'Laptop') document.getElementById("laptop-brand-list").style.display = 'block';
  else if (product.options[product.selectedIndex].value === 'Mobile') document.getElementById("mobile-brand-list").style.display = 'block';
  else document.getElementById("TV-brand-list").style.display = 'block';
}
// Exercise 4:
const menu = [
  {
    name: 'Home',
    children: [
      {
        name: 'Home 1',
        children: [
          {
            name: 'Home 1.1',
            children: [
              { name: 'Home 1.1.1' }
            ]
          },
          {
            name: 'Home 1.2',
            children: [
              { name: 'Home 1.2.1' }
            ]
          }
        ]
      },
      {
        name: 'Home 2',
        children: [
          {
            name: 'Home 2.1'
          }
        ]
      },
      {
        name: 'Home 3',
        children: [
          {
            name: 'Home 3.1'
          }
        ]
      }
    ]
  },
  {
    name: 'About',
    children: [
      {
        name: 'About 1',
        children: [
          {
            name: 'About 1.1',
            children: [
              { name: 'About 1.1.1' }
            ]
          },
          {
            name: 'About 1.2',
            children: [
              {
                name: 'About 1.2.1',
                children: [
                  { name: 'About 1.2.1.1' },
                  { name: 'About 1.2.1.2' },
                  { name: 'About 1.2.1.3' }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'Home 2',
        children: [
          {
            name: 'Home 2.1'
          }
        ]
      }
    ]
  }
]


