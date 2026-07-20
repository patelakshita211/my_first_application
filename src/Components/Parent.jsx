import Child from './Child';
/*function Parent() {
    return(
        <div>
            <h1>Parent Component</h1>
            <Child greeting="Hello From Parent!"/>
        </div>
    );   
}

export default Parent;*/

function Parent() {
    const handleClick = () =>{
        alert("Button clicked in Child Component");
    };
    return(
        <div>
            <h2>Parent Component</h2>
            <Child onClickHandler={handleClick}/>
        </div>
    );
}
