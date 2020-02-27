import React, { Component } from 'react';
import Table from './Table';
import {  } from '../App.css';

class Employees extends Component {

  constructor(props) {
    super(props);

    this.state = {
      employees: [
        {
          "firstname": "Oriana",
          "lastname": "Dentici",
          "department": "Advertising"
        },
        {
          "firstname": "Scott",
          "lastname": "Kumor",
          "department": "Accounting"
        },
        {
          "firstname": "Izzy",
          "lastname": "Edson",
          "department": "Human Resources"
        },
        {
          "firstname": "Tony",
          "lastname": "Vester",
          "department": "Accounting"
        },
        {
          "firstname": "Eric",
          "lastname": "Noll",
          "department": "Sales"
        },
        {
          "firstname": "Hannah",
          "lastname": "Chamorro",
          "department": "Public Relations"
        },
        {
          "firstname": "Abby",
          "lastname": "Blachman",
          "department": "Human Resources"
        },
        {
          "firstname": "Robert",
          "lastname": "Wojciechowski",
          "department": "Marketing"
        },
        {
          "firstname": "Joanna",
          "lastname": "Sowa",
          "department": "Public Relations"
        },
        {
          "firstname": "Drew",
          "lastname": "Russell",
          "department": "Sales"
        },
        {
          "firstname": "Rachael",
          "lastname": "Homann",
          "department": "Advertising"
        },
        {
          "firstname": "Katie",
          "lastname": "McBride",
          "department": "Marketing"
        },
        {
          "firstname": "Elizabeth",
          "lastname": "Benson",
          "department": "Sales"
        },
        {
          "firstname": "Gabriel",
          "lastname": "Patacky",
          "department": "Human Resources"
        },
        {
          "firstname": "Scott",
          "lastname": "Brunswig",
          "department": "Chief Executive Officer"
        }
      ]
    };
  }

  render() {
    return (
      <>
        <h1 className="headerStyle">Employee Directory</h1>
        <Table employees={this.state.employees} />
      </>
    );
  }
}

export default Employees;