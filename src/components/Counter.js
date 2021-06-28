import classes from './Counter.module.css';
import React, { Component }  from 'react';
import { connect } from 'react-redux';

// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

class Counter extends Component {
 incrementHandler  = ()=>{
 this.props.Increment();
}
incrementHandlerBy5  = ()=>{
  this.props.Increment5();
 }
 decrementHandler  = ()=>{
  this.props.Decrement();
}
toggleCounterHandler = () => {};
render(){
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{this.props.counter} </div>
      <button onClick={this.incrementHandlerBy5 }>increase by 5</button><br/>
      <button onClick={()=>this.props.reset() }>Reset</button>
      <button onClick={this.incrementHandler}> Increment</button>
      <button onClick={this.decrementHandler}> Decrement</button>
    </main>
  )
  
}
};
const mapStateToProps = state =>{
  return{
    counter: state.counter ,
  }
}
const mapDispatchToProps = dispatch=>{
  return {
    Increment :()=> dispatch({type:'INCREMENT'}),
    Decrement :()=>  dispatch({type:'DECREMENT'}),
    Increment5 : ()=> dispatch({type:'INCREMENTBY5'}),
    reset : ()=> dispatch({type:'RESET'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
