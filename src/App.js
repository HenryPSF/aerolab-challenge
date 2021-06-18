import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/home'
import RedeemCoins from './pages/coins'
import NavBar from './components/navbar';
import Header from './components/header'

import { UserProvider } from './context/UserContext'
import { FilterProvider } from './context/FilterContext'
import { ProductsListProvider } from './context/ProductsListContext';

function App()
{
  return (
    <BrowserRouter>
      <UserProvider>
        <ProductsListProvider>
          <FilterProvider>
            <NavBar />
            <Header />
            <Switch>
              <Route exact path="/" >
                <Home />
              </Route>
              <Route>
                <RedeemCoins path="/redeemcoins" component={RedeemCoins}/>
              </Route>
            </Switch>
          </FilterProvider>
        </ProductsListProvider>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App;
