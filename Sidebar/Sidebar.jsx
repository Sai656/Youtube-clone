import React from 'react';
import './Sidebar.css';
import home from '../../assets/home.png';
import search from '../../assets/search.png';
import library from '../../assets/library.png';
import gaming from '../../assets/game_icon.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import entertainment from '../../assets/entertainment.png';
import sports from '../../assets/sports.png';
import automobiles from '../../assets/automobiles.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? '' : 'Small-Sidebar'}`}>
      <div className="shortcut-links">
        <div className="side-link">
          <img src={home} alt="home" /><p>home</p>
        </div>
        <div className={`side-link ${category === 0 ? 'active' : ''}`} onClick={() => setCategory(0)}>
          <img src={search} alt="search" /><p>search</p>
        </div>
        <div className={`side-link ${category === 27 ? 'active' : ''}`} onClick={() => setCategory(27)}>
          <img src={library} alt="library" /><p>library</p>
        </div>
        <div className={`side-link ${category === 20 ? 'active' : ''}`} onClick={() => setCategory(20)}>
          <img src={gaming} alt="gaming" /><p>game_icon</p>
        </div>
        <div className={`side-link ${category === 28 ? 'active' : ''}`} onClick={() => setCategory(28)}>
          <img src={tech} alt="tech" /><p>tech</p>
        </div>
        <div className={`side-link ${category === 26 ? 'active' : ''}`} onClick={() => setCategory(26)}>
          <img src={music} alt="music" /><p>music</p>
        </div>
        <div className={`side-link ${category === 22 ? 'active' : ''}`} onClick={() => setCategory(22)}>
          <img src={blogs} alt="blogs" /><p>blogs</p>
        </div>
        <div className={`side-link ${category === 34 ? 'active' : ''}`} onClick={() => setCategory(34)}>
          <img src={automobiles} alt="automobiles" /><p>automobiles</p>
        </div>
        <div className={`side-link ${category === 24 ? 'active' : ''}`} onClick={() => setCategory(24)}>
          <img src={entertainment} alt="entertainment" /><p>entertainment</p>
        </div>
        <div className={`side-link ${category === 36 ? 'active' : ''}`} onClick={() => setCategory(18)}>
          <img src={sports} alt="sports" /><p>sports</p>
        </div>
        <div className={`side-link ${category === 41 ? 'active' : ''}`} onClick={() => setCategory(41)}>
          <img src={news} alt="news" /><p>news</p>
        </div>
        <hr />
      </div>
      <div className="Subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="jack" /><p>Sai kiran</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="simon" /><p>Evado</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="tom" /><p>Susiiiiii</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="megan" /><p>Akhil</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="cameron" /><p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
