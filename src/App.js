import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './routes/Authentication/Authentication';
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';

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
                    <Route path="auth" element={<Authentication />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
