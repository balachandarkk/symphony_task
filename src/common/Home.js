import React from 'react';
import { Link } from 'react-router-dom';
import './common.css';

const Home = () => {

    return (<>
        <div className="menu">
            <Link to="/file_with_class">File Upload 1 </Link>
            <Link to="/file_with_hooks">File Upload 2 </Link>
        </div>        
      </>
    )
}

export default Home;