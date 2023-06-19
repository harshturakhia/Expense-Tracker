import React from 'react'
import { ListItem, ListItemText, styled, ListItemIcon } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const List = styled(ListItem)({
    display: 'flex',
    marginTop: '10px',
    border: '1px solid #F6F6F6',
})


const Transaction = ({ transaction, deleteTransaction }) => {

    const sign = transaction.amount >= 0 ? '$' : '-$';
    const amount = sign + Math.abs(transaction.amount)
    const color = transaction.amount >= 0 ? 'green' : 'red';

    return (

        <List style={{ color }}>
            <ListItemIcon>
                <DeleteIcon onClick={() => deleteTransaction(transaction.id)} style={{ cursor: 'pointer' }} />
            </ListItemIcon>
            <ListItemText primary={transaction.text} />
            <ListItemText primary={amount} />
        </List>

    )
}

export default Transaction
