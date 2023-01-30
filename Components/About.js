import { Outlet } from "react-router-dom";

const About = ()=>{
    return (
        <div className="m-4">
            <h2>Welcome to the online food delivery world!</h2>
            <p>We offer different cuisines that are available all over
                the globe at your doorstep. 
                Visit us and experience the taste of delicious food.
            </p>
            <Outlet />
        </div>
    )
}

export default About;