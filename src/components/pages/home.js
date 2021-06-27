import React, { Component } from 'react';
import {Link,withRouter} from'react-router-dom';
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            load:false,
        }
    }
    componentDidMount(){
        document.title = "Home";
        if(this.props.data ==null){
            this.props.history.push('/login')
        }
    }
        render() {
            return (
            <main id="main">
                <section class="breadcrumbs">
                <div class="container">

                    <div class="d-flex justify-content-between align-items-center">
                    <h2>Home</h2>
                    </div>

                </div>
                </section>
                {this.props.data!=null ?
                <section class="inner-page">
                <div class="container">
                    <h3>Schedule Your Emails</h3>
                    <div className="form-container">
                            <p id="message"></p>
                            <form onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                    <input type="email" class="form-control" onChange={this.handleChange} id="sendTo" placeholder="Send To" required />
                                    <small id="UsernameError" class="form-text text-muted text-red">
                                    </small>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" onChange={this.handleChange} id="CC" placeholder='CC (Multiple mail saperated by ";")' required />
                                    <small id="ccError" class="form-text text-muted text-red">
                                    </small>
                                </div>
                                <div class="form-group">
                                    <input type="text" onChange={this.handleChange} id="subject" placeholder="Subject" class="form-control" required />
                                    <small id="passwordError" class="form-text text-muted text-red"></small>
                                </div>
                                <div class="form-group">
                                <select className="form-control" onChange={this.handleChange}
                                id="scheduleType" required>
                                    <option selected>Recurring</option>
                                    <option>Daily</option>
                                    <option>Weekly</option>
                                    <option>Monthly</option>
                                    <option>Yearly</option>
                                </select>
                                </div>
                                {this.state.scheduleType=="Recurring" &&
                                    <div className="form-group row">
                                    <div className="col-sm-5">
                                        <select className="form-control" onChange={this.scheduleChange}
                                        id="RecurringValue" required>
                                            <option selected>20</option>
                                            <option>30</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-5">
                                        <select className="form-control" onChange={this.scheduleChange}
                                        id="RecurringTime" required>
                                            <option>second</option>
                                            <option selected>minute</option>
                                        </select>
                                    </div>
                                    <small id="scheduleError" class="form-text text-muted text-red">
                                    </small>
                                </div>
                                }
                                {this.state.scheduleType=="Daily" &&
                                    <div className="form-group row">
                                    <div className="col-sm-5">
                                        <input type="number" min="0" max="23" placeholder="Hour (00-23)" className="form-control hrs" onChange={this.scheduleChange}
                                        id="Hr" required />                          
                                    </div>
                                    :
                                    <div className="col-sm-5">
                                        <input type="number" min="0" max="59" placeholder="Minute (00-59)" className="form-control mins" onChange={this.scheduleChange}
                                        id="Min" required />
                                    </div>
                                    <small id="scheduleError" class="form-text text-muted text-red">
                                    </small>
                                </div>
                                }
                                {this.state.scheduleType=="Weekly" &&
                                    <div className="form-group row">
                                    <div className="col-sm-3">
                                        <select className="form-control" onChange={this.scheduleChange}
                                        id="days" required>
                                            <option value="0" selected>Sunday</option>
                                            <option value="1">Monday</option>
                                            <option value="2">Tuesday</option>
                                            <option value="3">Wednesday</option>
                                            <option value="4">Thursday</option>
                                            <option value="5">Friday</option>
                                            <option value="6">Saturday</option>
                                        </select>                          
                                    </div>
                                    <div className="col-sm-3">
                                        <input type="number" min="0" max="23" placeholder="Hour (00-23)" className="form-control hrs" onChange={this.scheduleChange}
                                        id="Hr" required />                          
                                    </div>
                                    :
                                    <div className="col-sm-3">
                                        <input type="number" min="0" max="59" placeholder="Minute (00-59)" className="form-control mins" onChange={this.scheduleChange}
                                        id="Min" required />
                                    </div>
                                    <small id="scheduleError" class="form-text text-muted text-red">
                                    </small>
                                </div>
                                }
                                {this.state.scheduleType=="Monthly" &&
                                    <div className="form-group row">
                                    <div className="col-sm-3">
                                    <input type="number" min="1" max="31" placeholder="Date (1-31)" className="form-control date" onChange={this.scheduleChange}
                                        id="Date" required />                          
                                    </div>
                                    <div className="col-sm-3">
                                        <input type="number" min="0" max="23" placeholder="Hour (00-23)" className="form-control hrs" onChange={this.scheduleChange}
                                        id="Hr" required />                          
                                    </div>
                                    :
                                    <div className="col-sm-3">
                                        <input type="number" min="0" max="59" placeholder="Minute (00-59)" className="form-control mins" onChange={this.scheduleChange}
                                        id="Min" required />
                                    </div>
                                    <small id="scheduleError" class="form-text text-muted text-red">
                                    </small>
                                </div>
                                }
                                {this.state.scheduleType=="Yearly" &&
                                    <div className="form-group row">
                                    <div className="col-sm-3">
                                    <select className="form-control" onChange={this.scheduleChange}
                                        id="month" required>
                                            <option value="0" selected>January</option>
                                            <option value="1">February</option>
                                            <option value="2">March</option>
                                            <option value="3">April</option>
                                            <option value="4">May</option>
                                            <option value="5">June</option>
                                            <option value="6">July</option>
                                            <option value="7">Auguest</option>
                                            <option value="8">September</option>
                                            <option value="9">October</option>
                                            <option value="10">November</option>
                                            <option value="11">December</option>
                                        </select>                          
                                    </div>
                                    <div className="col-sm-3">
                                    <input type="number" min="1" max="31" placeholder="Date (1-31)" className="form-control date" onChange={this.scheduleChange}
                                        id="Date" required />                          
                                    </div>
                                    <div className="col-sm-3">
                                        <input type="number" min="0" max="23" placeholder="Hour (00-23)" className="form-control hrs" onChange={this.scheduleChange}
                                        id="Hr" required />                          
                                    </div>
                                    :
                                    <div className="col-sm-3">
                                        <input type="number" min="0" max="59" placeholder="Minute (00-59)" className="form-control mins" onChange={this.scheduleChange}
                                        id="Min" required />
                                    </div>
                                    <small id="scheduleError" class="form-text text-muted text-red">
                                    </small>
                                </div>
                                }
                                <div class="form-group">
                                    <label for="body">You can use HTML tags to customise your Email Body.</label>
                                    <textarea class="form-control" onChange={this.handleChange} id="body" rows="5"></textarea>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" onChange={this.handleHTML} type="checkbox" value="" id="html" />
                                    <label class="form-check-label" for="html">
                                        HTML Body
                                    </label>
                                </div>
                                <br />
                                <button type="submit" id="submit" onClick={this.handleSubmit} class="btn btn-primary">Send Mail</button>
                            </form>
                        <hr />
                        </div>
                </div>
                </section>
                :
                <section class="inner-page">
                <div class="container">
                    <p>Logged Out</p>
                </div>
                </section>}
            </main>
        )}
}
export default withRouter(Home)