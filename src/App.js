import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Nav from './Components/Nav';
import Shop from './Shop';
import Cart from './Cart';

const App = () => {
    const [cartState, setCartState] = useState([]);
    const [total, setTotal] = useState(0);


    return(
        <div>
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route path='/shopping-cart/home' exact component={Home}/>
                    <Route path='/shopping-cart/shop' render={props => (<Shop {...props} 
                    totalState={total} setTotal={setTotal} cartState={cartState} setCartState={setCartState}/>)} />
                    <Route path='/shopping-cart/cart' render={props => (<Cart {...props}
                    totalState={total} setTotal={setTotal} cartState={cartState} setCartState={setCartState}/>)}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App;