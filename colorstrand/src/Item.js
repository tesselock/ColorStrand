
function Item(props){
    
    return(
        <div>
        <input type= "checkbox"/>
        <p style = {{color: props.email ? "red" : "black"}}> Name: {props.name}</p>
        <p style = {{display: props.email ? "block" : "none"}}> Email: {props.email}</p>
        
        {/* if it doesnt exist, have it not display */}
        </div>
        //props: pass in data within html ?? 
    )
}
export default Item