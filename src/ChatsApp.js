import React, { Component } from 'react';
import firebase from './db';
import image from './image/logo.png'
import { Container, Row, Col, Button, } from 'react-bootstrap'
import './ChatApp.css';
// import { randomBytes } from 'crypto';

const db = firebase.firestore();
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            flag: false,
            messages: []
        }
    }

    Send = () => {
        const { text, flag, messages } = this.state;
        let obj = {
            name: flag ? 'you' : 'wasi',
            message: text
        };
        messages.push(obj);
        db.collection('msg').add(obj)

        this.setState({ messages: messages, flag: !flag })
        console.log(flag)
    }
    render() {
        const { text, messages } = this.state;
        // console.log('Text', text)
        return (
            <Container fluid className="Cont">
                <Row className="main-div">
                    <Col lg={6} md={6} sm={12} xs={12} className="h2">
                        <h2>Welcome to LiveChat</h2>
                    </Col>
                </Row>

                <Row className="main">
                    <Col lg={6} md={6} sm={6} xs={12} className="colinput">
                        {
                            messages.map(item => {
                                return item.name === 'you' ?
                                    <p>
                                        <div className="input2">{item.message}</div>
                                    </p> :
                                    <p>
                                        <div className="input1">{item.message}</div>
                                    </p>

                            })

                        }
                    </Col>
                </Row>


                <Row className="coluser">
                    <Col lg={6} md={6} sm={6} xs={12} className="col" >
                        <div className="userdiv" >
                            <div className="inputdiv" >
                                <input className="usermessage" type="text" placeholder="Type your message here..." value={text}
                                    onChange={(e) => this.setState({ text: e.target.value })} />
                                <img className="sendImage" src={image} onClick={() => this.Send()} />
                            </div>
                        </div>
                        {/* <Button className="sendbtn">Send</Button> */}
                    </Col>
                </Row>



            </Container>
        );
    }
}

export default Chat;