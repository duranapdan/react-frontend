import React, {Component} from 'react';
import LoginView from './LoginView';
import SignUpView from './SignUpView';
import PasswordReset from './PasswordReset';

class AuthView extends Component {
   constructor(){
        super();
        this.state = {
            currentView:1
        }
    }

    changeView(newView){
        this.setState({
            currentView : newView
        })  
    }

    render(){
        return this.state.currentView ===1 
                    ?   <LoginView onViewChange={this.changeView.bind(this)}/>
                    :    this.state.currentView ===2
                    ?   <SignUpView  onViewChange2={this.changeView.bind(this)}/>
                    :   <PasswordReset onViewChange3={this.changeView.bind(this)}/>

    }
}

export default AuthView;