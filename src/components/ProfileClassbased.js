import {Component, useEffect} from "react";

class Profile extends Component{

    constructor(props){
        //1st constructor
        super(props);

        this.state = {
            count: 0,
            count2: 0, //don't ctreate other state variable
            userInfo: {
                name: 'dummy name',
                location: 'dummy address'
            }

        };
        console.log(this.props.name+'child constructor -3');
    }

    //can make async
    async componentDidMount() {
        //3rd - after initial render
        //best place to make api call

        //console.log(this.props.name+'child didmount -5');

        // const data = await fetch("");
        // const jsonData = await data.json();
        // this.setState({
        //     userInfo: jsonData
        // })


        this.timer = setInterval(()=>{}, 1000);
        //as it's a SPA - everytime user open this page it'll create a new interval along with the pre-existing ones and never stop; that way code could be break or there will be a huge performance lag
    }

    componentDidUpdate(prevProps, prevState){
        //will be called after every rerender


        /*class based code similar to
        useEffect(()=>{
            //....
        }, [count, count2])
        is------*/

        if((this.state.count !== prevState.count) || (this.state.count2 !== prevState.count2)){
            //.....
        }
    }

    componentWillUnmount(){
        //just before unmount from DOM
        clearInterval(this.timer);
    }

    render(){
        //2. render
        console.log(this.props.name+'child render -4');
        const {count, count2} = this.state;
        return(
            <div>
                <h2>Profile page (class-based component)</h2>
                <p>{this.props?.name}</p>
                <h3>count: {count}</h3>
                <button onClick={()=>{
                    //don't do: this.state.count=1
                    this.setState({
                        //all state variables can be updated together
                        //for updating only 1 stae variable we can set only 1, other will remail same
                        count: 1,
                        count2: 2
                    })
                }}>counts++</button>
                <h3>count2: {count2}</h3>
            </div>
        )
    }
}

export default Profile;