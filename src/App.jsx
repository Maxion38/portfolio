import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Me from './pages/me/Me';
import Home from './pages/home/Home';
import Stage from './pages/stage/Stage';
import Activity from './pages/activity/Activity';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="me" element={<Me />} />
          <Route path="stage" element={<Stage />} />
          <Route path="activity" element={<Activity />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;