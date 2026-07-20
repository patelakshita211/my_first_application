function Child(props){
    /*function showGreeting(){
        alert(props.greeting);
    }
    return(
        <button onClick={showGreeting}>show Greeting</button>
    );
}
export default Child;*/
 return(
        <div>
            <h2>Parent Component</h2>
            <Child onClickHandler={handleClick}/>
        </div>
    );
}
