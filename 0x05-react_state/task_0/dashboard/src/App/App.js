import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { displayDrawer: false };

		this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
		this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
  ];

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
			if (e.ctrlKey && e.key === 'h') {
				alert('Logging you out');
				this.props.logOut();
			}
		});
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', (e) => {
			if (e.ctrlKey && e.key === 'h') {
				alert('Logging you out');
				this.props.logOut();
			}
		});
	}

	handleDisplayDrawer() {
		this.setState({ displayDrawer: true });
	}

	handleHideDrawer() {
		this.setState({ displayDrawer: false });
	}

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.main, styles.small)}>
          <div className="heading-section">
            <Notifications 
            listNotifications={this.listNotifications}
            displayDrawer={this.state.displayDrawer}
						handleDisplayDrawer={this.handleDisplayDrawer}
						handleHideDrawer={this.handleHideDrawer}
            />
            <Header />
          </div>
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the school">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo ipsa
              iste vero dolor voluptates.
            </p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
		justifyContent: "space-between",
  },
  small: {
		"@media (max-width: 900px)": {
			display: "grid",
			justifyContent: "center",
    }
  }
});

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  },
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
