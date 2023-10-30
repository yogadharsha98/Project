import React, { useContext, useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Forum.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddBoxIcon from "@mui/icons-material/AddBox";
import useFetch from "../../hooks/useFetch";

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    marginTop: 30,
  },
  idCell: {
    width: "10px",
  },
});

const Forum = () => {
  const history = useNavigate();

  const [showForum, setShowForum] = useState(false);
  const [selectedForum, setSelectedForum] = useState(null);
  const [commentInput, setCommentInput] = useState("");
  const [selectedCommentContent, setSelectedCommentContent] = useState(""); // New state variable

  const [details, setDetails] = useState([]);
  const { user } = useContext(AuthContext);
  const [input, setInput] = useState({
    content: "",
    author: user.username,
  });

  const { data } = useFetch(
    "https://project-crud.onrender.com/api/forum" // Use the flight ID in the API endpoint
  );
  useEffect(() => {
    if (data) {
      setDetails(data);
    }
  }, [data]);

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleForum = () => {
    setShowForum(!showForum);
  };

  const sendRequest = async () => {
    try {
      await axios.post("https://project-crud.onrender.com/api/forum", {
        content: input.content,
        author: user.username,
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/forum"));
    window.alert("Forum added successfully!");
  };

  const classes = useStyles();

  const handleRowClick = async (forum) => {
    setSelectedForum(forum);
    setSelectedCommentContent(""); 

    if (forum.comments.length > 0) {
      
      const selectedComment = forum.comments[0]; 

      setSelectedCommentContent(
        `${selectedComment.author}: ${selectedComment.content}`
      );
    }
  };

  const handleCommentChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleAddComment = async (e) => {
    e.preventDefault();

    const newComment = {
      content: commentInput,
      author: user.username,
    };

    try {
      const updatedForum = {
        ...selectedForum,
        comments: [...selectedForum.comments, newComment],
      };

      await axios.put(
        `https://project-crud.onrender.com/api/forum/${selectedForum._id}`,
        updatedForum
      );
      
      setDetails((prevDetails) =>
        prevDetails.map((forum) =>
          forum._id === updatedForum._id ? updatedForum : forum
        )
      );

      setCommentInput("");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      <NavBar />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth={1000}
        alignContent="center"
        alignSelf="center"
        marginLeft="auto"
        marginRight="auto"
        marginTop={8}
      >
        <AddBoxIcon
          style={{ fontSize: "44px", marginLeft: "900px" }}
          onClick={handleForum}
        />
        <h2>Traveler Community Forum</h2>
        <p style={{ marginTop: "30px", color: "#3a6bac" }}>
          If your have anything to discuss share with your friends & share your
          experience
        </p>
        {showForum && (
          <div className="container">
            <AccountCircleIcon style={{ fontSize: "44px" }} />
            <p style={{ marginRight: "20px" }}>{user.username}</p>
            <form onSubmit={handleSubmit}>
              <TextField
                name="content"
                value={input.content}
                variant="outlined"
                style={{
                  marginRight: "10px",
                  width: "600px",
                  height: "30px",
                  fontSize: "24px",
                }}
                onChange={handleChange}
              />
              <Button type="submit">SEND</Button>
            </form>
          </div>
        )}
        {selectedForum && (
          <div>
            <h4>Add Comment</h4>
            <p>
              {selectedForum.author} - {selectedForum.content}
            </p>

            {selectedCommentContent && (
              <p style={{ color: "#2abe37" }}>{selectedCommentContent}</p>
            )}
            <div className="container">
              <form onSubmit={handleAddComment}>
                <p style={{ color: "#3a6bac" }}>{user.username}</p>
                <TextField
                  value={commentInput}
                  onChange={handleCommentChange}
                  variant="outlined"
                  placeholder="Enter your comment"
                  style={{
                    marginRight: "10px",
                    width: "600px",
                    height: "30px",
                    fontSize: "24px",
                  }}
                />
                <Button type="submit">Add Comment</Button>
              </form>
            </div>
          </div>
        )}

        {/* <TextField
        variant="outlined"
        style={{
          marginTop: '20px',
          marginLeft: '300px',
          width: '500px',
          height: '50px',
          fontSize: '24px',
        }}
      />
      <div style={{ marginTop: '20px', marginLeft: '700px', color: '#3a6bac' }}>
        <ThumbUpIcon style={{ marginRight: '10px' }} />
        <MessageIcon />
      </div> */}

        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={classes.idCell}>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Content</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell>Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {details.map((row) => (
                <TableRow key={row._id} onClick={() => handleRowClick(row)}>
                  <TableCell className={classes.idCell}>{row._id}</TableCell>
                  <TableCell>{row.author}</TableCell>
                  <TableCell>{row.content}</TableCell>
                  <TableCell>{row.comments.length}</TableCell>
                  <TableCell>{row.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Forum;
