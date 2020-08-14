import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Card, CardTitle } from "react-materialize";
import Spinner from "../layout/Spinner";

class UserProfile extends Component {
  render() {
    const { profile } = this.props;
    console.log(profile);

    if (profile && profile.isEmpty) return <Spinner />;

    return (
      <div className="container">
        <Row style={{ marginTop: "15px" }}>
          <Col s={12} m={3} className="offset-m1">
            <Card
              className="z-depth-3 center"
              header={<CardTitle image={profile.imageUrl}></CardTitle>}
            >
              <p className="grey-text">
                User Initials:
                <span
                  className="flow-text cyan-text"
                  style={{ paddingLeft: "5px" }}
                >
                  {profile.initials}
                </span>
              </p>
            </Card>
          </Col>

          <Col s={12} m={8} className="left-align">
            <form>
              <div className="input-field">
                <p className="grey-text">Username</p>
                <input
                  type="text"
                  id="user-name"
                  defaultValue={profile.userName}
                />
              </div>

              <div className="input-field">
                <p className="grey-text">First Name</p>
                <input
                  type="text"
                  id="firstname"
                  defaultValue={profile.firstName}
                />
              </div>

              <div className="input-field">
                <p className="grey-text">Last Name</p>
                <input
                  type="text"
                  id="lastname"
                  defaultValue={profile.lastName}
                />
              </div>

              <div className="input-field">
                <p className="grey-text">Phone Number</p>
                <input
                  type="text"
                  id="phone-number"
                  defaultValue={profile.phoneNumber}
                />
              </div>

              <div className="input-field">
                <p className="grey-text">Address</p>
                <input
                  type="text"
                  id="address"
                  defaultValue={profile.address}
                />
              </div>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    // console.log(state.firebase)
  return {
    profile: state.firebase.profile,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

export default connect(mapStateToProps)(UserProfile);
