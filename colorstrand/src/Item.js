
function Item(props){
    console.log(props)
    return(
        <div>
        <input type= "checkbox"/>
        <p>same lull {props.name}</p>
        {/* props.name took in the data that was passed in (pretty much ar
            bituary variables that u declare in app.js
            and pasted it here) */}
        </div>
        //props: pass in data within html ?? 
    )
}
export default Item