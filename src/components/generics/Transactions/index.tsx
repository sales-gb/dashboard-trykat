import { Delete, Edit } from '@mui/icons-material'
import { Box, Button, createTheme, Modal, ThemeProvider } from '@mui/material'
import { green, red } from '@mui/material/colors'
import { useContext, useState } from 'react'
import { BeatLoader } from 'react-spinners'

import { TransactionsContext } from '../../../context/TransactionContext'
import { formatDate, maskCurrency } from '../../../utils'
import { Form } from '..'
import * as S from './styles'

const theme = createTheme({
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: red[300],
    },
  },
})

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#161616',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

  h1: {
    fontSize: '20px',
    color: '#fff',
    marginBottom: '15px',
  },
}

interface ITransaction {
  id: number
  date: string
  value: string
  category: string
}

export function TransactionsList() {
  const { transactions, deleteTransaction, isLoading } =
    useContext(TransactionsContext)
  const [modalOpen, setModalOpen] = useState(false)
  const [transactionToDelete, setTransactionToDelete] = useState<number | null>(
    null,
  )
  const [isEdit, setEdit] = useState<boolean>(false)
  const [transactionToEdit, setTransactionToEdit] =
    useState<ITransaction | null>(null)

  const handleDelete = () => {
    if (transactionToDelete !== null) {
      setTimeout(() => {
        deleteTransaction(transactionToDelete)
        setModalOpen(false)
      }, 2000)
    }
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setEdit(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <S.TransactionsContainer>
        <h2>Transações</h2>
        {isLoading ? (
          <div className="loadingDiv">
            <BeatLoader size={15} color="#00B37E" />
          </div>
        ) : transactions.length === 0 ? (
          <div className="loadingDiv">
            <BeatLoader size={15} color="#00B37E" />
          </div>
        ) : (
          <S.TransactionsList>
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                <div className="leftBox">
                  <p>{transaction.category}</p>
                  <p>{maskCurrency(transaction.value)}</p>
                </div>

                <div className="rightBox">
                  <div className="buttonsBox">
                    <Button
                      className="actionButton"
                      variant="contained"
                      color="primary"
                      endIcon={<Edit />}
                      onClick={() => {
                        setModalOpen(!modalOpen)
                        setEdit(!isEdit)
                        setTransactionToEdit(transaction)
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      type="button"
                      className="actionButton"
                      variant="contained"
                      color="secondary"
                      endIcon={<Delete />}
                      onClick={() => {
                        setModalOpen(!modalOpen)
                        setTransactionToDelete(transaction.id)
                      }}
                    >
                      Excluir
                    </Button>
                  </div>
                  <p>{formatDate(transaction.date)}</p>
                </div>

                <Modal open={modalOpen} onClose={handleCloseModal}>
                  <Box sx={style}>
                    {isEdit ? (
                      <Form
                        transactionToEdit={transactionToEdit}
                        handleCloseModal={handleCloseModal}
                      />
                    ) : (
                      <>
                        <h1>Você realmente deseja excluir essa transação?</h1>
                        <Button
                          type="button"
                          className="actionButton"
                          variant="contained"
                          color="secondary"
                          endIcon={<Delete />}
                          onClick={handleDelete}
                        >
                          Excluir
                        </Button>
                      </>
                    )}
                  </Box>
                </Modal>
              </li>
            ))}
          </S.TransactionsList>
        )}
      </S.TransactionsContainer>
    </ThemeProvider>
  )
}
