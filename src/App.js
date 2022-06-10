import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProjectDetail1 from './Pages/Home/ProjectsDetail/ProjectDetail1';
import ProjectDetail2 from './Pages/Home/ProjectsDetail/ProjectDetail2';
import ProjectDetail3 from './Pages/Home/ProjectsDetail/ProjectDetail3';


function App() {
  return (
    <div className="w-full">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/project1" element={<ProjectDetail1></ProjectDetail1>}></Route>
        <Route path="/project2" element={<ProjectDetail2></ProjectDetail2>}></Route>
        <Route path="/project3" element={<ProjectDetail3></ProjectDetail3>}></Route>
      </Routes>
    </div>
  );
}

export default App;
