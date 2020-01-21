
import React, { Component } from 'react';

export default class NotificationsMenuContent extends Component {

    render() {
        return (
            <div id="tab__notifications">
                <span className="tab--title">Notifications</span>

                <div id="list__notifications" className="tab__list">

                    {/* TODO: Make this dynamic */}
                    <div className="list__item">
                        <div className="item--name">John accepted your friend request</div>
                    </div>
                    <div className="list__item">
                        <div className="item--name">Erin accepted your friend request</div>
                    </div>
                    <div className="list__item">
                        <div className="item--name">Jake accepted your friend request</div>
                    </div>

                </div>
            </div>
        );
    }

}
