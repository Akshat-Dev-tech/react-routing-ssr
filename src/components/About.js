import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () =>(
    <>

        {/* Use this when you want to render child component with about component 
        Now we added like route with index so it will go to /about/nested1 without rendering /about conent */}
        {/* <Outlet /> */}
        <div>About page</div>
{/* 
        add link if rq , otherwise we can add hit url /about/nested1 manualy as well how we did it */}
        {/* <Link to="nested1">Go to Nested 1</Link> |{" "}
        <Link to="nested2">Go to Nested 2</Link> */}
    </>
)

export default About;