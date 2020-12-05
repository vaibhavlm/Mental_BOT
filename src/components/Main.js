import React, { Component } from 'react';
import Bot from './Bot';
import Start from './Start';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import FinalScreen from './FinalScreen';
import ScrollToTop from './ScrollToTop';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Toggle, changeName, changeBotName} from '../store/ActionCreator';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Play from './Play';


const mapStatetoProps = props => {
    return {
        problems: props.problems,
        name: props.name
    }
}

const mapDispatchtoProps = (dispatch) => ({
    Toggle: (problem) => dispatch(Toggle(problem)),
    changeName: (name) => dispatch(changeName(name)),
    changeBotName: (name) => dispatch(changeBotName(name))
})

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <ScrollToTop/>
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={2000}>
                        <Switch>
                            <Route path="/start" component={() => <Start />} />
                            <Route path="/screen1" component={() => <Screen1 changeName={this.props.changeName} changeBotName={this.props.changeBotName} />} />
                            <Route path="/screen2" component={() => <Screen2 problems={this.props.problems} Toggle={this.props.Toggle} />} />
                            <Route path="/Landingpage" component={() => <FinalScreen name={this.props.name} problems={this.props.problems} />} />
                            <Route path="/bot" component={() => <Bot />} />
                            <Route path="/play" component={() => <Play />} />
                            <Redirect to="/start" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </React.Fragment>
        );
    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(Main));