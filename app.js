/**
 *
 *         <div id="parent">
 *              <div id="child">
 *                   <h1>I'm an H1 tag</h1>
 *                   <h2>I'm an H2 tag</h2>
 *               </div>
 *              <div id="child2">
 *                   <h1>I'm an H1 tag</h1>
 *                   <h2>I'm an H2 tag</h2>
 *               </div>
 *         </div>
 *
 *
 *
 *
 *
 * */

const div=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement('div',{id:'child1'},
    [React.createElement('h1',{},'Im an H1 Tag'),React.createElement('h2',{},'Im an h2 tag')]), React.createElement('div',{id:'child2f'},
    [React.createElement('h1',{},'Im an H1 Tag'),React.createElement('h2',{},'Im an h2 tag')])]);

    const roots=ReactDOM.createRoot(document.getElementById('root'));
    roots.render(div);

//  const heading = React.createElement(
// 	"h1",
// 	{ id: "raam", color: "red" },
// 	"Jai Shree Raam From React !!!"
// );

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
