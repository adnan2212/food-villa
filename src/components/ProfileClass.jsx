import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Dummy Name ",
        created_at: "Dummy Location",
        avatar: "",
      },
    };
    // console.log("Child - constructor" + this.props.name);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/adnan2212");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });

    // console.log("Child - componentDidMount" + this.props.name);
  }

  componentDidUpdate() {
    // this.timer = setInterval(() => {
    //   console.log("Hey, I am from setInterval");
    // }, 1000);
    console.log("COMPONENT DID UPDATE✅");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("❌ COMPONENT UNMOUNT ❌");
  }

  render() {
    // console.log("Child - render" + this.props.name);

    return (
      <>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h3>LoginId: {this.state.userInfo.login}</h3>
        <h3>created_at: {this.state.userInfo.created_at}</h3>
      </>
    );
  }
}

export default Profile;
