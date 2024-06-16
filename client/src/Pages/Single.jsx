import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import edit from "../assets/edit.png";
import moment from "moment"
import dlt from "../assets/delete.png";
import Menu from "../Components/Menu";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";



const Single = () => {

  const navigate = useNavigate()

  const [post, setPost] = useState([]);

  const {currentUser} = useContext(AuthContext)

  const location = useLocation()

  const postId = location.pathname.split("/")[2]

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPosts();
  }, [postId]);


  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/")
    } 
    
    catch (err) {
      console.log(err);
    }
  };



  return (
    <div className="single">
      <div className="content">
        <img
          src={post.img} alt=""
        />

        <div className="user">
          {post.userImg && <img
            src={post.userImg}
            alt=""
          />}

          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>

          {currentUser.username === post.username && <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={edit} alt="edit" />
            </Link>
            <img onClick={handleDelete} src={dlt} alt="delete" />
          </div>}
        </div>

        <h1>{post.title}</h1>
        {post.desc}   

      </div>

      <Menu />
    </div>
  );
};

export default Single;
