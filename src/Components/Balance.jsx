import React from 'react'
import { Box, Typography, styled } from '@mui/material'


const BalanceText = styled(Typography)({
    fontSize: '25px',
    marginBottom: '20px',

})

const Balance = ({ transactions }) => {

    const amount = transactions.map(transaction => transaction.amount)
    const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2)

    return (
        <Box>
            <BalanceText>Balance : ${total}</BalanceText>
        </Box>
    )
}

export default Balance
