import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import CancelOutlinedIcon  from "@material-ui/icons/CancelOutlined";
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useStyles } from "./styles.js";

import DropZone from "../../components/DropZone";

import { api } from "../../services/api";
import axios from "axios";

const API_URL = "http://10.20.6.199:8080/";

const CreateNFT = () => {
  const classes = useStyles();
  const history = useHistory();

  const account = useSelector((state) => state.allNft.account);
  const { user } = useSelector((state) => state.auth);
  
  const artTokenContract = useSelector(
    (state) => state.allNft.artTokenContract
  );

  const [selectedFile, setSelectedFile] = useState();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  function handleInputChange(event) {
    let { name, value } = event.target;
    // if(name === 'image'){
    //   value = event.target.files[0];
    // }
    setFormData({ ...formData, [name]: value });
  }

  async function createNFT(event) {
    event.preventDefault();
    const { title, description,price } = formData;

    console.log("title: " + title);

    const data = new FormData();
    data.append("name", title);
    data.append("description", description);
    data.append("price", price);

    if(selectedFile){
      data.append('file', selectedFile);
      //data.append('img', selectedFile);
      console.log("slectedFile: ", selectedFile);
    }
    
    try {
      const totalSupply = await artTokenContract.methods.totalSupply().call();
      //data.append("tokenId", Number(totalSupply) + 1);

      // const response = await api.post("/tokens", data, {
      //   headers: {
      //     "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      //   },
      // });
      
      const response = await axios.post(API_URL+"create", data, {
        headers: {
          "Authorization": "Bearer "+user.accessToken,
        },
      });

      console.log(response);

      mint(response.data.message);
    } catch (error) {
      console.log(error);
      // error.response.data
    }
  }

  async function mint(tokenMetadataURL) {
    try {
      const receipt = await artTokenContract.methods
        .mint(tokenMetadataURL)
        .send({from: account,gas:3000000 });
      console.log(receipt);
      console.log(receipt.events.Transfer.returnValues.tokenId);
      // setItems(items => [...items, {
      //   tokenId: receipt.events.Transfer.returnValues.tokenId,
      //   creator: accounts[0],
      //   owner: accounts[0],
      //   uri: tokenMetadataURL,
      //   isForSale: false,
      //   saleId: null,
      //   price: 0,
      //   isSold: null
      // }]);
      history.push('/');
    } catch (error) {
      console.error("Error, minting: ", error);
      alert("Error while minting!");
    }
  }

  return (
    <div className={classes.pageCreateNft}>
      <form onSubmit={createNFT}>
        <div className={classes.formHeader}>
          <h1>Create collectible</h1>
          <Link to="/">
            <CancelOutlinedIcon fontSize="large" />
          </Link>
        </div>
        <div className={classes.content}>
          <div className={classes.dropzone}>
            <DropZone onFileUploaded={setSelectedFile} />
          </div>
          <fieldset>
            <TextField
              label="Title"
              name="title"
              variant="filled"
              required
              value={formData.title}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              label="Description"
              name="description"
              variant="filled"
              required
              value={formData.description}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="price"
              name="price"
              variant="filled"
              value={formData.price}
              onChange={handleInputChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">ETH</InputAdornment>,
              }}
              fullWidth
            />

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default CreateNFT;
