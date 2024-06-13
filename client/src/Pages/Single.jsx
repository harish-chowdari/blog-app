import React from "react";
import { Link } from "react-router-dom";
import edit from "../assets/edit.png";

import dlt from "../assets/delete.png";
import Menu from "../Components/Menu";



const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />

        <div className="user">
          <img
            src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />

          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={edit} alt="edit" />
            </Link>
            <img src={dlt} alt="delete" />
          </div>
        </div>

        <h1>lorwm epsussj jhg</h1>
        <p>
          sd sdty ysdtcf tydsfc ytscf tydfs yfzc sd sdty ysdtcf tydsfc ytscf sd sdty ysdtcf tydsfc ytscf tydfs yfzc sd sdty ysdtcf tydsfc ytscf sd sdty ysdtcf tydsfc ytscf tydfs yfzc sd sdty ysdtcf tydsfc ytscf sd sdty ysdtcf tydsfc ytscf tydfs yfzc sd sdty ysdtcf tydsfc ytscf sd sdty ysdtcf tydsfc ytscf tydfs yfzc sd sdty ysdtcf tydsfc ytscf sd sdty ysdtcf tydsfc ytscf sd sdty ysdtcf tydsfc ytscf tydfs yfzc sd sdty ysdtcf tydsfc ytscf
          tydfs yfzc sd sdty ysdtcf tydsfc ytscf tydfs yfzc sd sdty ysdtcf sd sdty ysdtcf tydsfc ytscf sd sdty ysdtcf tydsfc ytscf tydfs yfzc sd sdty ysdtcf tydsfc ytscf
          tydfs yfzc sd sdty ysdtcf tydsfc ytscf tydfs yfzc sd sdty ysdtcf sd sdty ysdtcf tydsfc ytscf sd sdty ysdtcf tydsfc ytscf tydfs yfzc sd sdty ysdtcf tydsfc ytscf
          tydfs yfzc sd sdty ysdtcf tydsfc ytscf tydfs yfzc sd sdty ysdtcf sd sdty ysdtcf tydsfc ytscf sd sdty ysdtcf tydsfc ytscf tydfs yfzc sd sdty ysdtcf tydsfc ytscf
          tydfs yfzc sd sdty ysdtcf tydsfc ytscf tydfs yfzc sd sdty ysdtcf
          tydfs yfzc sd sdty ysdtcf tydsfc ytscf tydfs yfzc sd sdty ysdtcf
          tydsfc ytscf tydfs yfzc sd sdty ysdtcf tydsfc ytscf tydfs yfzc sd sdty
          ysdtcf tydsfc ytscf tydfs yfzc sd sdty ysdtcf tydsfc ytscf tydfs yfzc
          sd sdty ysdtcf tydsfc ytscf tydfs yfzc
        </p>

      </div>

      <Menu />
    </div>
  );
};

export default Single;
