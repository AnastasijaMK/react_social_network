import React from 'react';
import classes from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    // Локальный state
    state = {
        editStatusMode: false,
        status: this.props.status
    }

    activateEditStatusMode () {
        this.setState({
            editStatusMode: true
        });
    }

    deactivateEditStatusMode () {
        this.setState({
            editStatusMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange(e) {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div className={classes.user_status}>
                {!this.state.editStatusMode &&
                <div className={classes.user_status__text}>
                    <span onDoubleClick={this.activateEditStatusMode.bind(this)}>
                        {this.props.status || 'No status'}
                    </span>
                </div>
                }
                {this.state.editStatusMode &&
                <div className={classes.user_status__field}>
                    <input type="text"
                           value={this.state.status}
                           autoFocus
                           onChange={this.onStatusChange.bind(this)}/>
                    <button onClick={this.deactivateEditStatusMode.bind(this)}></button>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;