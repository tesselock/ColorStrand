
function Item(props){
    
    return(
        <div>
        <input type= "checkbox"/>
        <p style = {{color: props.lastname ? "red" : "black"}}> first p {props.name}</p>
        <p style = {{display: props.lastname ? "block" : "none"}}> second p {props.lastname}</p>
        {/* if it doesnt exist, have it not display */}
        </div>
        //props: pass in data within html ?? 
    )
}
export default Item