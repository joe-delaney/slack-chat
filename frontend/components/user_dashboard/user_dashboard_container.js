import { connect } from "react-redux";
import UserDashboard from "./user_dashboard";
import { searchUsers, clearSearchResults } from "../../actions/search_actions";

const mapStateToProps = (state, ownProps) => ({
    userSearchResults: Object.values(state.entities.searchResults.users)
})

const mapDispatchToProps = dispatch => ({
    searchUsers: query => dispatch(searchUsers(query)),
    clearSearchResults: () => dispatch(clearSearchResults())
})

const UserDashboardContainer = connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
export default UserDashboardContainer;