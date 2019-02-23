import React from 'react'
import image from '../images/391833.pdf'
import './bankdetails.css'

var tablestyle = {
  border: '0px solid black',
  color: 'red',
  backgroundColor: '#f1f1c1',
  borderCollapse: 'collapse',
  width: '100%',
}
var tdstyle = {
  border: '0.5px solid black',
  padding: '15px',
  borderCollapse: 'collapse',
  textAlign: 'justify',
}
var thstyle = {
  border: '0.5px solid black',
  borderCollapse: 'collapse',
  padding: '15px',
  textAlign: 'center',
}
class Bankdetails extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <div className="bankcontainer">
        <div className="internal">
          <table style={tablestyle} >
            <tbody>
              <tr>
                <th colSpan={2} style={thstyle}>
                  Bank Details
                </th>
              </tr>
              <tr style={tablestyle}>
                <td style={tdstyle}>Bank Name</td>
                <td style={tdstyle}>Indian overseas Bank </td>
              </tr>
              <tr style={tablestyle}>
                <td style={tdstyle}>Account Name</td>
                <td style={tdstyle}>Malarum Mottugal Manithaneya Amaipu </td>
              </tr>
              <tr>
                <td style={tdstyle}>Account Number</td>
                <td style={tdstyle}>307002000000038 </td>
              </tr>
              <tr>
                <td style={tdstyle}>Branch Name</td>
                <td style={tdstyle}>PanchamaDevi </td>
              </tr>

              <tr>
                <td style={tdstyle}>IFSC Code</td>
                <td style={tdstyle}>IOBA0003070</td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <a href={image}>download</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Bankdetails
