import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () =>(
    <>
        <Outlet />
        <div>About page</div>
{/* 
        add link if rq , otherwise we can add hit url /about/nested1 manualy as well how we did it */}
        {/* <Link to="nested1">Go to Nested 1</Link> |{" "}
        <Link to="nested2">Go to Nested 2</Link> */}
    </>
)

export default About;