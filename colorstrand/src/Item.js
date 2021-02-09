import React from "react"
// function Item(props){
    
//     return(
//         <div>
//         <input type= "checkbox" checked = {props.checked}/>
//         <p style = {{color: props.email ? "red" : "black"}}> Name: {props.name}</p>
//         <p style = {{display: props.email ? "block" : "none"}}> Email: {props.email}</p>
        
//         {/* if it doesnt exist, have it not display */}
//         </div>
//         //props: pass in data within html ?? 
//     )
// }

class Item extends React.Component{
    render() {
        return(
            <div>
            <input type= "checkbox" checked = {this.props.checked}/>
            <p style = {{color: this.props.email ? "red" : "black"}}> Name: {this.props.name}</p>
            <p style = {{display: this.props.email ? "block" : "none"}}> Email: {this.props.email}</p>
            
            {/* if it doesnt exist, have it not display */}
            </div>
            //props: pass in data within html ?? 
        )
    }
}
export default Item