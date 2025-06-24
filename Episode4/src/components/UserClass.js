import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Anonomous",
        location: "Defalut",
        avatar_url: "https://dummy-photo.com",
      },
    };
    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "child component did mount");

    const data = await fetch("https://api.github.com/users/bibhusitabehera98");
    const jsonData = await data.json();

    this.setState({
      userInfo: jsonData,
    });

    console.log(jsonData);
  }

  render() {
    // console.log(this.props.name + "child component renderd");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: bibhusitabehera@gmail.com</h4>
        <img src={avatar_url} style={{ height: "150px" }} />
      </div>
    );
  }
}

export default UserClass;
