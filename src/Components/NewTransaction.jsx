import React from 'react'
import { Box, Typography, TextField, Button, styled } from '@mui/material'
import { useState } from 'react'

const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',

    '& > h5 ,   & > div , & > button': {
        marginTop: '15px'
    }
})

const StyledButtonNow = styled(Button)({
    backgroud: '#445A6F',
    color: '#FFF',

})

const NewTransaction = ({ addTransaction }) => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const newTransaction = e => {
        const transaction = {
            id: (Math.floor(Math.random() * 1000000)),
            text: text,
            amount: +amount,
        }
        addTransaction(transaction);
    }

    return (
        <Container>
            <Typography variant='h5'>New Transaction</Typography>
            <TextField value={text} label='Enter expense' onChange={(e) => setText(e.target.value)} />
            <TextField value={amount} label='Enter amount' onChange={(e) => setAmount(e.target.value)} />
            <StyledButtonNow variant='contained' onClick={newTransaction} >Add Transaction</StyledButtonNow>
        </Container>
    )
}

export default NewTransaction
