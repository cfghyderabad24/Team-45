import React, { useState } from 'react';
import axios from 'axios';
import './PaymentForm.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PaymentForm = () => {
    const [paymentData, setPaymentData] = useState({
        name: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        amount: ''
    });

    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentData({
            ...paymentData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/payment', paymentData);
            alert(response.data.message);
            setPaymentSuccess(true);
        } catch (error) {
            alert('Payment failed');
        }
    };

    const handleDownloadPDF = () => {
        if (paymentSuccess) {
            const input = document.getElementById('payment-form');

            html2canvas(input)
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF();
                    const imgWidth = 210;
                    const pageHeight = 295;
                    const imgHeight = (canvas.height * imgWidth) / canvas.width;
                    let heightLeft = imgHeight;
                    let position = 0;

                    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;

                    while (heightLeft >= 0) {
                        position = heightLeft - imgHeight;
                        pdf.addPage();
                        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                        heightLeft -= pageHeight;
                    }

                    pdf.save('payment_details.pdf');
                });
        } else {
            alert('Please complete the payment to download the PDF.');
        }
    };

    return (
        <div className="pay-container">
            <h1>Payment Module</h1>
            <form id="payment-form" className="payment-form" onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={paymentData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Card Number:</label>
                    <input type="text" name="cardNumber" value={paymentData.cardNumber} onChange={handleChange} required />
                </div>
                <div>
                    <label>Expiry Date:</label>
                    <input type="text" name="expiryDate" value={paymentData.expiryDate} onChange={handleChange} required />
                </div>
                <div>
                    <label>CVV:</label>
                    <input type="text" name="cvv" value={paymentData.cvv} onChange={handleChange} required />
                </div>
                <div>
                    <label>Amount:</label>
                    <input type="number" name="amount" value={paymentData.amount} onChange={handleChange} required />
                </div>
                <button type="submit">Pay Now</button>
                <div className="spacer"></div>
                <button onClick={handleDownloadPDF} disabled={!paymentSuccess}>Download as PDF</button>
            </form>
        </div>
    );
};

export default PaymentForm;