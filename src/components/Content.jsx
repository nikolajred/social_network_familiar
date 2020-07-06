import React from 'react';
import './Content.css';
import nastol from './../images/nastol.png';

const Content = () => {
  return (
    <div className="main_content">
      <div>
      <img src={nastol}/>
      </div>
      <div>ava + discription</div>
      <div>my post</div>
      <div>
        new post
        <div>post1</div>
        <div>post2</div>
      </div>
    </div>
  );
};

export default Content;
