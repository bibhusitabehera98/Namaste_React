import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent construtor called");
  }

  componentDidMount() {
    // console.log("parent component did mount");
  }

  render() {
    // console.log("parent renderd");

    return (
      <div>
        <h1>About class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is namaste React web series</h2>
        {/* <User name="Bibhusita Behera(function)" location="Cuttack" /> */}
        <UserClass
          name="Bibhusita Behera(Class)"
          location="Bhubaneswar class"
        />
        <UserClass name="rita (Class)" location="USA class" />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is namaste React web series</h2>
//       {/* <User name="Bibhusita Behera(function)" location="Cuttack" /> */}
//       <UserClass name="Bibhusita Behera(Class)" location="Bhubaneswar class" />
//     </div>
//   );
// };

export default About;
