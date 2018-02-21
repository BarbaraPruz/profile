var portfolio = [
  { link: 'https://codepen.io/barbarap/full/xpwaBv/',
    img:  'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1253438.xpwaBv.small.5b5f3276-f259-4883-aaa3-fa6f723ea72a.png', 
    alt: 'FCC Simon Game Project (on CodePen)',
    caption: 'Simon Game'},
  { link: 'https://codepen.io/barbarap/full/RjdqEd/',
    img: 'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1253438.RjdqEd.small.4feec4e6-47d4-4d45-9322-8e6c4cc2eb48.png',
    alt: 'FCC Tic-Tac-Toe Project',
    caption: 'Tic Tac Toe'}, 
  { link: 'https://codepen.io/barbarap/full/gXopqJ/',
    img: 'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1253438.gXopqJ.small.6e9f24e7-446c-4b5e-87b8-82735386fa59.png',
    alt: 'FCC Pomodoro Clock Project',
    caption: 'Pomodoro Clock - observer pattern, animation'},
  { link: 'https://codepen.io/barbarap/full/qVZmyJ/',
    img: 'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1253438.qVZmyJ.small.a873fc74-c621-4979-acf6-0676204dd4f7.png',
    alt: 'FCC Calculator Project on CodePen',
    caption: 'Calculator - singleton pattern'},         
  { link: 'https://codepen.io/barbarap/full/rzNedy/',
    img: 'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1253438.rzNedy.small.40685dd3-a064-4b1d-b9ce-b0e0a7a9d887.png',
    alt: 'FCC Local Weather app on CodePen',
    caption: 'Local Weather - Ajax'},
  { link: 'https://codepen.io/barbarap/full/EXGvQB/',
    img: 'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1253438.EXGvQB.small.9c36015e-3e47-4f37-b537-e5ed3b0cad9e.png',
    alt: 'FCC Random Quote Project',
    caption: 'Random Quote Generator - Ajax'},
  { link: 'https://codepen.io/barbarap/full/eEJbER/',
    img: 'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1253438.eEJbER.small.62b1f5ef-78d2-446f-882f-9f863ecee88b.png',
    alt: 'FCC Wikipedia Viewer Project',
    caption: 'Wikipedia Viewer'},
  { link: 'https://codepen.io/barbarap/full/gGeGMb/',
    img: 'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1253438.gGeGMb.small.2014b2d9-dff7-4aa0-af54-5e91bb47c224.png',
    alt: 'FCC Twitch TV Project',
    caption: 'Twitch TV Status'},
  { link: 'https://codepen.io/barbarap/full/gWKrdN/',
    img:  'https://s3-us-west-2.amazonaws.com/i.cdpn.io/1253438.gWKrdN.small.5b33b6be-6a46-4599-960a-7be6b2b7ea55.png', 
    alt: 'FCC Tribute Page Project (on CodePen)',
    caption: 'Tribute Page - static HTML'}
];

function generatePortfolio() {
  var html='';
  for (let i=0; i<portfolio.length; ++i) {
    html += '<div class="entry"><a href="' + portfolio[i].link + '" target="_blank">' +
        '<img src="' + portfolio[i].img + '" alt="' + portfolio[i].alt + '">' +
        '<p class="caption">' + portfolio[i].caption + '</p></div>'; 
  }
  console.log(html);
  $('#portfolio').html(html);
}

$(document).ready(function() {
  generatePortfolio();
});