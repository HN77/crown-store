import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import Signin from './routes/SignIn/SignIn';

const Shop = () => {
    return <div>I'm Shop page!'</div>;
};

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="signin" element={<Signin />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
