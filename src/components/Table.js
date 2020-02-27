import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    }
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeDepName = this.handleChangeDepName.bind(this);
  }

  componentDidMount() {
    this.setState({
      filtered: this.props.employees
    });
  }

  handleChangeFirstName(e) {
    let currentList = [];
    let newList = [];


    if (e.target.value !== "") {
      currentList = this.props.employees;

      newList = currentList.filter(employee => {
        const lc = employee.firstname.toString().toLowerCase();
        const filter = e.target.value.toString().toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.props.employees;
    }
    this.setState({
      filtered: newList
    });
  }

  handleChangeLastName(e) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.props.employees;

      newList = currentList.filter(employee => {
        const lc = employee.lastname.toString().toLowerCase();
        const filter = e.target.value.toString().toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.props.employees;
    }
    this.setState({
      filtered: newList
    });
  }
  
  handleChangeDepName(e) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.props.employees;

      newList = currentList.filter(employee => {
        const lc = employee.department.toString().toLowerCase();
        const filter = e.target.value.toString().toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.props.employees;
    }
    this.setState({
      filtered: newList
    });
  }



  render() {
    return (
      <div>
          <div className="searchBars">
            <input 
                type="text" 
                onChange={this.handleChangeFirstName} 
                placeholder="Search by First Name..." />
            <input 
                type="text" 
                onChange={this.handleChangeLastName} 
                placeholder="Search by Last Name..." />
            <input 
                type="text" 
                onChange={this.handleChangeDepName} 
                placeholder="Search by Department..." />
          </div>
        <table className="tableStyle">
            <div class="tableBody">
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Department</th>
                    </tr>
                </thead>
                    <tbody>
                    {
                        this.state.filtered.map(employee => (
                        <tr>
                            <td>{employee.firstname} {employee.lastname}</td>
                            <td>{employee.department}</td>
                        </tr>
                        ))
                    }
                    </tbody>
            </div>
        </table>
      </div>
    )
  }
}

export default Table;