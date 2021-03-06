import React from "react";
import "./Airport.css";
import Dropdown from "./component/common/Dropdown";
import IR_Flag from "./IR.png";
import Donyaro_logo from "./Logo/Donyaro_Logo.png";
import HiddenEmail from "./component/common/HiddenEmail";
import Menu from "./component/common/Menu";
import Search from "./component/common/Search";
import "./component/common/BreakPoin.css";
import Table from "./component/common/Table";
import Form from "./component/common/Form";
class Airport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navwidth: 0,
      display: "none",
      TableList: [],
      overflow_y: "auto",
      visibility: "hidden",
      search_icon: "keyboard_arrow_up",
    };
  }

  openSearch = () => {
    if (this.state.display == "none") {
      this.setState({
        display: "block",
        search_icon: "keyboard_arrow_down",
      });
    }
    if (this.state.display == "block") {
      this.setState({
        display: "none",
        search_icon: "keyboard_arrow_up",
      });
    }
  };
  openMenu = () => {
    this.setState({
      navwidth: "100%",
      overflow_y: "hidden",
    });
  };

  closeMenu = () => {
    this.setState({
      navwidth: "0",
      overflow_y: "auto",
    });
  };

  ShowUserEmail = () => {
    if (this.state.visibility == "hidden") {
      this.setState({
        visibility: "visible",
      });
    }
    if (this.state.visibility == "visible") {
      this.setState({
        visibility: "hidden",
      });
    }
  };
  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({ TableList: res.data });
      });
  }

  render() {
    return (
      <main
        class="container display-flex display-column"
        style={{ overflowY: this.state.overflow_y }}
      >
        <div class="header display-flex">
          <div class="header-left-side display-flex">
            <Dropdown
              class="header-dropdown"
              area1="??????????"
              area2="English"
              area3="Arabic"
            />
            <img
              class="IR-Flag"
              src={IR_Flag}
              alt="Iran_Flag"
              width="20rem"
              height="20rem"
            />
            <div class="fas header-user-email">
              <span class="user-email">programmer1376@gmail.com</span>
              <HiddenEmail
                onClick={this.ShowUserEmail}
                hidden_style={{ visibility: this.state.visibility }}
              />
            </div>
          </div>

          <img
            src={Donyaro_logo}
            alt="Donyaro_Logo"
            width="100rem"
            height="25rem"
          />
        </div>

        <div class="main display-flex">
          <div class="section display-flex display-column">
            <Form
              FormContainer="display-flex display-column"
              OpenNav={this.openMenu}
            />
            <Search
              search_icon={this.state.search_icon}
              search_container="search_container"
              openSearch={this.openSearch}
              hidden_container_style={{ display: this.state.display }}
              hidden_class="hidden-search"
              search_btn_container="search-btn"
            />

            <Table
              ContainerClass="table display-flex display-column"
              GridClass="grid"
              Table_map={this.state.TableList.map((item, index) => {
                return [
                  <div class="">{item.id}</div>,
                  <div class="">{item.last_name}</div>,
                  <div class="">{item.first_name}</div>,
                  <div class="">{item.email}</div>,
                ];
              })}
            />
          </div>
          <Menu
            menu_class="menu display-flex display-column "
            menu_style={{ width: this.state.navwidth }}
            close_menu_class="close-menu"
            close_menu_onClick={this.closeMenu}
            close_menu_value="&times;"
          />
        </div>
      </main>
    );
  }
}
export default Airport;
