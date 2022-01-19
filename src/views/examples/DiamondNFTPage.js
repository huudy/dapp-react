/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ListGroupItem,
  ListGroup,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

import Footer from "components/Footer/Footer.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { ethers } from "ethers";
import { store } from "react-notifications-component";
import DiamondNFT from "../../artifacts/contracts/DiamondNFT.sol/DiamondNFT.json";
const address = process.env.REACT_APP_DIAMONDNFT_ADDRESS;
const ipfsDoc = "bafybeieqru73pway26wrvfbtbk5i7mtjss5oqknmqhtd5kdptww4e5nrqq";
const metaipgs = "bafybeiencuicik7ly3t2io75ybmx5x2ybbwo7f5nohajehvs5rvf7v5bx4";
const token_base_uri =
  "https://bafybeiencuicik7ly3t2io75ybmx5x2ybbwo7f5nohajehvs5rvf7v5bx4.ipfs.dweb.link/metadata/";
export default function DiamondNFTPage() {
  const [metadataLink, setMetadataLink] = useState("");
  const [accounts, setAccounts] = useState({});
  const notification = {
    container: "center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
      showIcon: true,
    },
  };

  useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  async function requestAccount() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts);
    setAccounts(accounts);
    store.addNotification({
      title: "Success !",
      message: "Wallet connected. Enjoy!",
      type: "success",
      ...notification,
    });
    // await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  //candidate that is fetchet from smart contract is an array so we taking out first three items

  const handleError = (error) => {
    const REVERT = "revert";
    let message = "";

    console.log(error);
    if (error.data) {
      const index = error.data.message.indexOf(REVERT) + REVERT.length;
      message = error.data.message.substring(index);
    } else {
      message = error.message;
    }

    store.addNotification({
      title: "Error !",
      message: message,
      type: "danger",
      ...notification,
    });
  };

  const getUri = async () => {
    if (typeof window.ethereum !== "undefiend") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(address, DiamondNFT.abi, signer);
      try {
        console.log("trying ot get base uri");
        const baseUri = await contract.getBaseTokenURI();
        setMetadataLink(baseUri);
        // await baseUri.wait();
        console.log("Should be ok ");
        console.log(baseUri);
        store.addNotification({
          title: "Success !",
          message: "Got BASE URI",
          type: "success",
          ...notification,
        });
      } catch (err) {
        handleError(err);
      }
    }
  };

  const setUri = async () => {
    if (typeof window.ethereum !== "undefiend") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(address, DiamondNFT.abi, signer);
      try {
        console.log("Trying to set token uri");
        const setBaseTokenRes = await contract.setBaseTokenURI(token_base_uri);
        await setBaseTokenRes.wait();
        console.log("Should be done now");

        store.addNotification({
          title: "Success !",
          message: "Setting base URI for toek successful!",
          type: "success",
          ...notification,
        });
      } catch (err) {
        handleError(err);
      }
    }
  };

  const mint = async () => {
    if (typeof window.ethereum !== "undefiend") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(address, DiamondNFT.abi, signer);
      try {
        const mintTransaction = await contract.mintTo(accounts[0], {
          value: ethers.utils.parseEther("0.08"),
        });
        await mintTransaction.wait();

        store.addNotification({
          title: "Success !",
          message: "Vote successfully saved",
          type: "success",
          ...notification,
        });
      } catch (err) {
        handleError(err);
      }
    }
  };
  return (
    <>
      <IndexNavbar />

      <div className="wrapper">
        <div className="page-header">
          <img alt="..." className="path" src={require("assets/img/blob.png").default} />
          <img alt="..." className="path2" src={require("assets/img/path2.png").default} />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png").default}
          />
          <img alt="..." className="shapes wave" src={require("assets/img/waves.png").default} />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png").default}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  We keep your vote <br />
                  <span className="text-white">secured</span>
                </h1>
                <p className="text-white mb-3">
                  We make sure Your vote will never dissaper nor it will change, or even gets
                  deleted. Most importantly no vote can be fake.
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">Choose your candidate right now</p>
                  <a className="btn-link" color="success" href="#candidates" size="sm">
                    <i className="tim-icons icon-minimal-right" />
                  </a>
                </div>
              </Col>
              <Col lg="6" md="6">
                <img
                  alt="..."
                  // className="img-fluid"
                  src={require("assets/svg/vote.svg").default}
                />
              </Col>
            </Row>
          </div>
        </div>

        <section id="candidates" className="section section-lg section-coins">
          <img alt="..." className="path" src={require("assets/img/path3.png").default} />
          <Container>
            <Row>
              <Col md="6">
                <hr className="line-info" />
                <h1>
                  Choose the <span className="text-info"> tokenized investment</span>
                </h1>
              </Col>
            </Row>

            <Row>
              <Col lg="6" md="6">
                <h1 className="text-white">
                  We keep your coin <br />
                  <span className="text-white">secured</span>
                </h1>
                <p className="text-white mb-3">
                  A wonderful serenity has taken possession of my entire soul, like these sweet
                  mornings of spring which I enjoy with my whole heart. I am alone, and feel...
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">From 9.99%/mo</p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button className="btn-simple" onClick={() => mint()} color="primary">
                      MINT DIAMON COIN
                    </Button>
                    <Button className="btn-simple" onClick={() => requestAccount()} color="primary">
                      connect wallet
                    </Button>
                    <Button className="btn-simple" onClick={() => setUri()} color="primary">
                      SetUri
                    </Button>
                    <Button className="btn-simple" onClick={() => getUri()} color="primary">
                      GET URI
                    </Button>
                    <a href={metadataLink} target="_blank">
                      {metadataLink}
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="5">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/etherum.png").default}
                />
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
