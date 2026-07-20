import Child from './Child';
function Parent() {
    return(
        <div>
            <h1>Parent Component</h1>
            <Child greeting="Hello From Parent!"/>
        </div>
    );   
}

export default Parent;
