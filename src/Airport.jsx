import React from "react";
import "./Airport.css";
import Dropdown from "./component/common/Dropdown";
import IR_Flag from "./IR.png";
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
    };
  }

  openSearch = () => {
    if (this.state.display == "none") {
      this.setState({
        display: "block",
      });
    }
    if (this.state.display == "block") {
      this.setState({
        display: "none",
      });
    }
  };
  openMenu = () => {
    this.setState({
      navwidth: "100%",
    });
  };

  closeMenu = () => {
    this.setState({
      navwidth: "0px",
    });
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
      <div class="container display-flex display-column">
        <div class="header display-flex">
          <div class="header-left-side display-flex">
            <Dropdown
              class="header-dropdown"
              area1="فارسی"
              area2="English"
              area3="Arabic"
            />
            <img
              class="IR-Flag"
              src={IR_Flag}
              alt="Iran"
              width="20px"
              height="20px;"
            />
            <div class="fas header-user-email">
              <span>programmer1376@gmail.com</span>
              &#xf2bd;
            </div>
          </div>
          <div>دنیارو</div>
        </div>

        <div class="main display-flex">
          <div class="section display-flex display-column">
            <Form
              FormContainer="display-flex display-column"
              OpenNav={this.openMenu}
            />
            <Search
              search_container="search"
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
            menu_class="menu display-flex display-column"
            menu_style={{ width: this.state.navwidth }}
            menu_dir="rtl"
            close_menu_class="close-menu"
            close_menu_onClick={this.closeMenu}
            close_menu_value="&times;"
          />
        </div>
      </div>
    );
  }
}
export default Airport;
