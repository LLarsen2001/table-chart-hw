import React from "react"
import { Table } from "react-bootstrap"


const TableShow = () => {


    const dataRow = [
        { id: 1, firstName: 'Jimmy', email: 'jimmy@test.com', phone: '3217833287' },
        { id: 2, firstName: 'Ethan', email: 'ethan@test.com', phone: '3212333287' },
        { id: 3, firstName: 'Timmy', email: 'timmy@test.com', phone: '3212343487' },
        { id: 4, firstName: 'Apirl', email: 'apirl@test.com', phone: '3867833287' },
        { id: 5, firstName: 'Walter', email: 'walterW@test.com', phone: '3217836787' },
        { id: 6, firstName: 'Steven', email: 'steven@test.com', phone: '3217836575' }
    ]

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            {dataRow.map((r) => (
                <tbody>
                    <tr key={r.id}>
                        <td>{r.id}</td>
                        <td>{r.firstName}</td>
                        <td>{r.email}</td>
                        <td>{r.phone}</td>
                    </tr>
                </tbody>
            ))}
        </Table>

    )
}
export default TableShow