import React from "react";
// import data from "./data";

const Tabledata = ({data}) => {

    return(
            <div>
                <table>
                    <tbody>
                       {
                            data.length >0 &&
                            data.map((currency) =>(
                                <tr className="table-row">
                                    <td><img src={currency.image} alt={currency.name} width={25} /></td>
                                    <td>{currency.name}</td>
                                    <td>{currency.symbol.toUpperCase()}</td>
                                    <td>{"$" + currency.current_price}</td>
                                    <td>{"$"+ currency.total_volume.toLocaleString('en-US')}</td>
                                    <td style={{color:currency.price_change_percentage_24h > 0 ? "green" : "red"}}>{currency.price_change_percentage_24h.toFixed(2) + '%'}</td>
                                    <td>{'Mkt Cap : $' + currency.market_cap.toLocaleString('en-US')}</td>
                                </tr>
                            ))
                       }
                    </tbody>
                </table>
            </div>
    )
}

export default Tabledata;




/* 
 tabledata.length >1 &&
                            tabledata.map((currency)=> (
                                <tr>
                                    <td><img src={currency.image}></img></td>
                                    <td>{currency.name}</td>
                                    <td>{currency.symbol.toUppercase()}</td>
                                    <td>{currency.current_price}</td>
                                    <td></td>
                                </tr>

*/