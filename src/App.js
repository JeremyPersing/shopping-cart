import React, {useState} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Nav from './Components/Nav';
import Shop from './Shop';
import Cart from './Cart';

const App = () => {
    const [cartState, setCartState] = useState([]);
    const [total, setTotal] = useState(0);


    return(
        <div>
            <HashRouter>
                <Nav />
                <Switch>  
                    <Route path='/' exact component={Home}/>
                    <Route path='/shop' render={props => (<Shop {...props} 
                    totalState={total} setTotal={setTotal} cartState={cartState} setCartState={setCartState}/>)} />
                    <Route path='/cart' render={props => (<Cart {...props}
                    totalState={total} setTotal={setTotal} cartState={cartState} setCartState={setCartState}/>)}/>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default App;