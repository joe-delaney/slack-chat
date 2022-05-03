import React from "react";
import AllDMsItem from "./all_dms_item";

export default class AllDMs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-dashboard-center-main">
                <div className="user-dashboard-center-main-feed">
                    <div className="all-dms-container">
                        <ul className="all-dms-items">
                            {this.props.groups.map((group, idx) => (
                                <AllDMsItem group={group} key={idx}/>
                            ))}
                        </ul>
                    </div>
                    <div className="all-dms-search-bar">
                        <span className="all-dms-search-bar-label">To: </span>
                        <input className="all-dms-search-bar-input" type="text" placeholder="@somebody" />
                    </div>
                </div>
            </div>
        )
    }
}