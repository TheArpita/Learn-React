import {Outlet} from "react-router-dom";
import ProfileFunctionalComp from "./Profile";
import Profile from "./ProfileClassbased";


import {Component} from "react";

// const About = () => {
//     return(
//         <div>
//             <h1>This is About Us page</h1>
//             <ProfileFunctionalComp name="abc"/>
//             <Profile name="abc - into class"/>
//             {/* or,
//             <Outlet/> */}
//         </div>
//     )
// };

class About extends Component {
    constructor(props){
        super(props);
        this.state={

        }
        console.log('parent constructor -1');
    }
    componentDidMount(){
        console.log('parent didmount -6');
    }
    render(){
        console.log('parent render -2');
        return(
                    <div>
                        <h1>This is About Us page</h1>
                        <ProfileFunctionalComp name="abc"/>
                        <Profile name="1st child"/>
                        {/* or,
                        <Outlet/> */}
                        <Profile name="2nd child"/>
                    </div>
                )
    }
}
/**
 * o/p while having 2 children-
 * parent constructor
 * parent render
 * (react batch the render part)
 * ..........
 *      1st child constructor
 *      1st child render
 * 
 *      2nd child constructor
 *      2nd child render
 * (now dom is updated for children)
 * ..........
 * 
 * commit phase-
 *      1st child didmount
 *      2nd child didmount
 * parent didmount
 */



/**
 * o/p while having 1 children having async didmount with an api call-
 * 
 * MOUNTING----
 * 1. render phase:
 * parent constructor
 * parent render
 *      child constructor
 *      child render
 * 
 * 2. commit phase:
 *      (dom updated)
 * parent didmount (it's called before making an api call)
 *      child didmount
 * 
 * UPDATING-----
 *      (api call then setState)
 *      re-render child
 *      (update dom)
 *      componentDidUpdate
 * 
 * UNMOUNTING-----
 *      componentWillUnmount
 */

export default About;