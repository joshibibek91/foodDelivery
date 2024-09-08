import React from "react"
// import Delete from '@material-ui/icons/Delete'
// import DeleteIcon from '@mui/icons-material/Delete';
// import trash from "../trash.svg"
import { useCart, useDispatchCart } from "../components/ContextReducer";
import Delete from "@mui/icons-material/Delete";
export default function Cart({ onSuccessCheckout }) {
    let data = useCart();
    let dispatch = useDispatchCart();

    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem("userEmail");
        let response = await fetch("http://localhost:5000/api/orderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_data: data,
                email: userEmail,
                order_date: new Date().toDateString()
            })
        }
        );
        console.log("Order Response:", response)
        if (response.status === 200) {
            onSuccessCheckout()
            dispatch({ type: "DROP" })
        }
    }
    let totalPrice = data.reduce((total, food) => total + food.price, 0)

    return (


        <div className='container bg-white m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
            <table className='table table-hover '>
                <thead className=' text-success fs-4'>
                    <tr>
                        <th scope='col' >#</th>
                        <th scope='col' >Name</th>
                        <th scope='col' >Quantity</th>
                        <th scope='col' >Option</th>
                        <th scope='col' >Amount</th>
                        <th scope='col' ></th>
                    </tr>
                </thead>
                <tbody>
                    {data.length ? data.map((food, index) => (
                        <tr>
                            <th scope='row' >{index + 1}</th>
                            <td >{food.name}</td>
                            <td>{food.qty}</td>
                            <td>{food.size}</td>
                            <td>{food.price}</td>
                            {/* <td ><button type="button" className="btn p-0"><img src={trash} alt='delete' onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr> */}
                            {/* <td ><button type="button" className="btn p-0"><img src={""} alt='delete' onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td> */}
                            <td ><button type="button" className="btn p-0"><Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td>

                        </tr>
                    )) : <tr><th>Data is empty</th></tr>}
                </tbody>
            </table>
            <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
            <div>
                <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
            </div>
        </div>




    )
}

