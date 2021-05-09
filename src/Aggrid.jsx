import React, { useState } from "react";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import axios from 'axios';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Aggrid() {
    const [rowData, setRowData] = useState(null);
    const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=10";
    
    const fetchData = async () => {
        const response = await axios.get(apiURL)
        setRowData(response.data) 
        console.log(JSON.stringify(response))
      }

    return (
        <div className="Agrrid">
            <h1>Game of Thrones Books</h1>
            <h2>Fetch a list from an API and display it</h2>
            <div>
                <button className="button" onClick={fetchData}>
                 Getdata
                </button>
                <br />
            </div>

            <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
                <AgGridReact
                    rowData={rowData}>
                    <AgGridColumn field="name"></AgGridColumn>
                    <AgGridColumn field="isbn"></AgGridColumn>
                    <AgGridColumn field="authors"></AgGridColumn>
                </AgGridReact>
            </div>
        </div>
    );
}

export default Aggrid;