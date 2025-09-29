import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import HeaderComponent from "./src/components/HeaderComponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ErrorHandler from "./src/components/ErrorHandler";
import RestaurantMenu from "./src/components/RestaurantMenu";
// import Bringo from "./src/components/Bringo";
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

// const div=React.createElement(
//     "div",
//     {id:"parent"},
//     [React.createElement('div',{id:'child1'},
//     [React.createElement('h1',{},'Im an H1 Tag'),React.createElement('h2',{},'Im an h2 tag')]), React.createElement('div',{id:'child2f'},
//     [React.createElement('h1',{},'Im an H1 Tag'),React.createElement('h2',{},'Im an h2 tag')])]);

//     const roots=ReactDOM.createRoot(document.getElementById('root'));
//     roots.render(div);

//  const heading = React.createElement(
// 	"h1",
// 	{ id: "raam", color: "red" },
// 	"Jai Shree Raam From React !!!"
// );

// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// now we are ging to use JSX as creating the elements using react.createElement is heavy and not easy to understand
// JSX is a syntactic sugar of react.createElement
//JSX is not directly understood by the browser so we need to use babel to convert JSX to readable React code i.e react.cerateElement which the react core that is understood by the browser
//JSX is faster than react.createElement as it uses the virtual DOM
//JSX is not a string or HTML it is a combination of both
//JSX is an object
//JSX is type of expression
//JSX can have only one parent element
//JSX attributes are written in camelCase
//JSX uses className instead of class
//JSX is not same as HTML
//JSX can contain JavaScript expressions inside {}
//JSX can be nested inside other JSX
// const jsxHeading=(<h1 class="heading" tabIndex="5">Namasthe React From JSX!!!</h1>);
// console.log(jsxHeading);
// const rootElement=ReactDOM.createRoot(document.getElementById("root"));
// rootElement.render(jsxHeading);

// const HeadingComponent = function ()  {
// 	return (
// 		<div>

// 			<h1>Jai Shree Raam !!! </h1>

// 		</div>
// 	);
// };

// const RaamComponent = (
//     <div>
// 	<h1>This is Functional Component</h1>
//     <HeadingComponent></HeadingComponent>
//     <HeadingComponent />
//     {HeadingComponent()}
//     </div>
// );

// const mainRoot = ReactDOM.createRoot(document.getElementById("root"));
// mainRoot.render(RaamComponent);

/**
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search Bar
 *  -Restaurant Container
 *    -Restaurant card
 *       - Image
 *       -Name
 * 	     -Rating
 *       -cuisines
 *       -etc
 * -Footer
 *   -Links
 *    -Copyright
 * 	  -Address
 *    -Contact
 *
 *
 */

// const RestaurantCard = ( {resName,cuisines,rating} ) => {

	// const Bringo=lazy(()=>import("./src/components/Bringo")); when i am writing this lazy loading is not happening, below
	// may be the src is the major problem,remove src above you may see it working... 
	const Bringo=React.lazy(()=>import("./src/components/Bringo"));

const AppLayout = function () {
	return (
		<div className="app">
			<HeaderComponent />
			<Outlet />
		</div>
	);
};

const appRoute = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path:"/restaurant/:resId",
				element:<RestaurantMenu/>,
			}
			,
			{
				path:"/bringo",
				element: <Suspense fallback={ <h1>Suspensing SUS</h1> }> <Bringo/></Suspense>,
			}
		],
		errorElement: <ErrorHandler />,
	},
	
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
