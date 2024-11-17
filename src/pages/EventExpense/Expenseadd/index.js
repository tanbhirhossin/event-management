import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import AdminLayout from '../../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Paymentcount() {
    const userdata = JSON.parse(localStorage.getItem('userdata'));
    const [inputs, setInputs] = useState({ id: '', employee_id: userdata.id, event_id: '', purchase_date: '', vendor_id: '', total: '', discount: '', tax: '', gtotal: '', discountamt: '', taxamt: '', check_date: '', bank_name: '', check_number: '' });
    const [items, setItems] = useState([]);
    const [event, setEvent] = useState([]);
    const [vendors, setVendor] = useState([]);
    const [cartitems, setCartItems] = useState([]);
    const [totalData, setTotalData] = useState({ total: 0, discount: 0, tax: 0, discountAmt: 0, taxAmt: 0, totalQty: 0, finalTotal: 0 });
    const navigate = useNavigate();

    const getProducts = async (e) => {
        let resDatas = [];
        axios.get(`${process.env.REACT_APP_API_URL}/item`).then(function (response) {
            if (response.data) {
                response.data.data?.map((d) => (
                    resDatas.push({ id: d.id, name: d.item_name, price: d.price })
                ))
            }
            setItems(resDatas);
        });
    }
    const getSuppliers = async (e) => {
        axios.get(`${process.env.REACT_APP_API_URL}/vendor`).then(function (response) {
            setVendor(response.data.data);
        });
        axios.get(`${process.env.REACT_APP_API_URL}/event`).then(function (response) {
            setEvent(response.data.data);
        });
    }

    const handleOnSelect = (item) => {
        // the item selected
        setCartItems(val => [...val, item]);
    }

    const formatResult = (item) => {
        console.log(item)
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }


    useEffect(() => {

        getSuppliers();
        getProducts();
        handleTotalcal();
    }, [cartitems]);

    const handleCartChange = (event, data) => {
        const name = event.target.name;
        const value = event.target.value;
        let quantity = data.quantity ?? 0;
        if (name == "quantity") {
            quantity = value;
        }
        let price = data.price
        if (name == "price") {
            price = value;
        }
        let subtotal = quantity * price;
        const newdata = { ...data, ['quantity']: quantity, ['subtotal']: subtotal, ['price']: price }

        setCartItems(prevItems => {
            const itemExists = prevItems.some(item => item.id === newdata.id);
            if (itemExists) {
                return prevItems.map(item =>
                    item.id === newdata.id ? { ...item, ...newdata } : item
                );
            }
        })
    }
    const sumTotal = async (key) => {
        return cartitems.reduce((acc, item) => {
            let sum = acc + (item[key] || 0);
            if (item.children && Array.isArray(item.children)) {
                sum += sumTotal(item.children, key);
            }
            return sum;
        }, 0);
    }
    const handleTotalChange = async (e) => {
        let total = await sumTotal('subtotal');
        let totalQty = await sumTotal('quantity');
        const name = e.target.name;
        const value = e.target.value;
        let finalTotal = 0;
        let tax = totalData.tax ?? 0;
        if (name == "tax") {
            tax = value;
        }

        let discount = totalData.discount
        if (name == "discount") {
            discount = value;
        }
        let discountAmt = (total * (discount / 100));
        finalTotal = total - discountAmt;
        let taxAmt = (finalTotal * (tax / 100));
        finalTotal = finalTotal + taxAmt;

        setTotalData(values => ({ ...values, ['total']: total, ['discount']: discount, ['tax']: tax, ['discountAmt']: discountAmt, ['taxAmt']: taxAmt, ['totalQty']: totalQty, ['finalTotal']: finalTotal }))
    }

    const handleTotalcal = async () => {
        let total = await sumTotal('subtotal');
        let totalQty = await sumTotal('quantity');
        let finalTotal = 0;
        let tax = totalData.tax ?? 0;
        let discount = totalData.discount
        let discountAmt = (total * (discount / 100));
        finalTotal = total - discountAmt;
        let taxAmt = (finalTotal * (tax / 100));
        finalTotal = finalTotal + taxAmt;

        setTotalData(values => ({ ...values, ['total']: total, ['discount']: discount, ['tax']: tax, ['discountAmt']: discountAmt, ['taxAmt']: taxAmt, ['totalQty']: totalQty, ['finalTotal']: finalTotal }))
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let obj = {
            input: inputs,
            cartitems: cartitems,
            totalData: totalData,
        }

        try {
            let apiurl = `/expense/create`;//api from laravel
            let response = await axios({
                method: 'post',
                responsiveTYpe: 'json',
                url: `${process.env.REACT_APP_API_URL}${apiurl}`,
                data: obj
            });
            //console.log(response)
            navigate('/EventExpense');// route from app.js
        }
        catch (e) {
            console.log(e);
        }
    }
    const payType = [
        { id: 1, name: "Cash" },
        { id: 2, name: "Bank" }
    ]

    return (
        <AdminLayout>
            <div className="content-wrapper">
                <div className="container mt-5">
                    <div className="page-title">
                        <div className="row">
                            <div className="col-12 col-md-12 order-md-1 order-last">
                                <br /><h1 style={{ textAlign: 'center' }}>Add New Purchase</h1>
                            </div>

                        </div>
                    </div>

    <section id="basic-vertical-layouts" >
        <div className="row match-height">
            <div className="col-12">
                <div className="card">
                    <div className="card-content">
                        <div className="card-body">
                            <form className="form form-vertical" onSubmit={handleSubmit}>
                                <div className="form-body">
                                    <div className="row" style={{ fontWeight: 'bold' }}>

                                        <div className="col-4">
                                            <div className="form-group">
                                                <label for="event_id">Event</label>
                                                {event.length > 0 &&
                                                    <select className="form-control" id="event_id" name='event_id' defaultValue={inputs.event_id} onChange={handleChange}>
                                                        <option value="">Select Event</option>
                                                        {event.map((d, key) =>
                                                            <option value={d.id}>{d.event_details}</option>
                                                        )}
                                                    </select>
                                                }
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div className="form-group">
                                                <label for="vendor_id">Vendor</label>
                                                {vendors.length > 0 &&
                                                    <select className="form-control" id="vendor_id" name='vendor_id' defaultValue={inputs.vendor_id} onChange={handleChange}>
                                                        <option value="">Select Vendor</option>
                                                        {vendors.map((d, key) =>
                                                            <option value={d.id}>{d.vendor_name}</option>
                                                        )}
                                                    </select>
                                                }
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label htmlFor="purchase_date">date</label>
                                                <input type="date" id="purchase_date" className="form-control" defultValue={inputs.purchase_date} name="purchase_date" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <label for="addproduct"> Products</label>
                                                {items.length > 0 &&
                                                    <ReactSearchAutocomplete
                                                        items={items}
                                                        onSelect={handleOnSelect}
                                                        autoFocus
                                                        formatResult={formatResult}
                                                    />}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <table className='mt-3 table table-bordered' >
                                            <tr style={{ backgroundColor: '#e9ecef', fontWeight: 'bold' }}>
                                                <td>Name</td>
                                                <td>Qty</td>
                                                <td>Price</td>
                                                <td>Total</td>
                                            </tr>
                                            {Object.keys(cartitems).map(k => ({ id: k, ...cartitems[k] })).map(d => (
                                                <tr key={d.id}>
                                                    <td>{d.name}</td>
                                                    <td>
                                                        <input className='form-control' type="text" name="quantity" onChange={(e) => handleCartChange(e, d)} />
                                                    </td>
                                                    <td>
                                                        <input className='form-control' type="text" name="price" defaultValue={d.price} onChange={(e) => handleCartChange(e, d)} />
                                                    </td>
                                                    <td>
                                                        {d.subtotal}
                                                    </td>
                                                </tr>
                                            ))}
                                        </table>
                                    </div>
                                    <div className='row'>
                                        <div className="col-6 offset-6 d-flex justify-content-end">
                                            <table className='my-3 table table-bordered'>
                                                <tr>
                                                    <td style={{ fontWeight: 'bold' }}>Total:</td>
                                                    <td>{totalData.total}</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontWeight: 'bold' }}>Discount:</td>
                                                    <td><input className='form-control' type="text" defaultValue={totalData.discount} name="discount" onChange={(e) => handleTotalChange(e)} /></td>
                                                    <td>{totalData.discountAmt}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontWeight: 'bold' }}>Tax:</td>
                                                    <td><input className='form-control' type="text" defaultValue={totalData.tax} name="tax" onChange={(e) => handleTotalChange(e)} /></td>
                                                    <td>{totalData.taxAmt}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ fontWeight: 'bold' }}>Grand Total:</td>
                                                    <td></td>
                                                    <td>{totalData.finalTotal}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>

                                    <div className='row' style={{ fontWeight: 'bold' }}>
                                        <div className='col-sm-6'>
                                            <div className="form-group">
                                                <label for="pay_type">Pay Type</label>
                                                {payType.length > 0 &&
                                                    <select className="form-control" id="pay_type" name='pay_type' defaultValue={inputs.pay_type} onChange={handleChange}>
                                                        <option value="">Select Pay Type</option>
                                                        {payType.map((d, key) =>
                                                            <option value={d.id}>{d.name}</option>
                                                        )}
                                                    </select>
                                                }
                                            </div>
                                        </div>
                                        <div className='col-sm-6'>
                                            <div className="form-group">
                                                <label for="amount">Amount</label>
                                                <input type="text" id="amount" className="form-control" defultValue={inputs.amount} name="amount" onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row' style={{ fontWeight: 'bold' }}>
                                        <div className='col-sm-4'>
                                            <div className="form-group">
                                                <label for="bank_name">Bank Name</label>
                                                <input type="text" id="bank_name" className="form-control" defultValue={inputs.bank_name} name="bank_name" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className='col-sm-4'>
                                            <div className="form-group">
                                                <label for="check_number">Check Number</label>
                                                <input type="text" id="check_number" className="form-control" defultValue={inputs.check_number} name="check_number" onChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className='col-sm-4'>
                                            <div className="form-group">
                                                <label for="check_date">Check Date</label>
                                                <input type="date" id="check_date" className="form-control" defultValue={inputs.check_date} name="check_date" onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="col-12 d-flex justify-content-end">
                                            <button type="submit" className="btn btn-primary mr-1 mb-1" style={{ backgroundColor: '#007bff', borderColor: '#007bff', borderRadius: '5px' }}>Submit</button>
                                            <button type="reset" className="btn btn-light-secondary mr-1 mb-1" style={{ backgroundColor: '#f8f9fa', borderColor: '#ced4da', borderRadius: '5px' }}>Reset</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
                </div>
            </div>

        </AdminLayout>
    )
}

export default Paymentcount