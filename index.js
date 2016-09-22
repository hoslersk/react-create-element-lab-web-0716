//Code React element here
// var meInReact = (
  // <div class="me">
  //   <h1>An Awesome Person</h1>
  //   <p>Who is learning React</p>
  //
    // <ul class="me__interests">
    //   <li>JavaScript</li>
    //   <li>React</li>
    //   <li>Movies</li>
    //   <li>Ice cream</li>
    // </ul>
  // </div>
// );
const javaScriptLi = React.createElement('li', {}, 'JavaScript')
const reactLi = React.createElement('li', {}, 'React')
const moviesLi = React.createElement('li', {}, 'Movies')
const iceCreamnLi = React.createElement('li', {}, 'Ice cream')
const myUl = React.createElement('ul', {}, [javaScriptLi, reactLi, moviesLi, iceCreamnLi])
const myP = React.createElement('p', {}, 'Who is learning React')
const myH1 = React.createElement('h1', {}, 'An Awesome Person')
const meInReact = React.createElement('div', {className: "me"}, [myH1, myP, myUl])

ReactDOM.render(
  meInReact,
  document.getElementById('main')
);
// ReactDOM.render(meInReact, document.getElementById('main'));
