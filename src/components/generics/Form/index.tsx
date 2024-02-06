/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from '@hookform/resolvers/zod'
import { AttachMoney } from '@mui/icons-material'
import {
  Button,
  createTheme,
  InputAdornment,
  TextField,
  ThemeProvider,
} from '@mui/material'
import { green } from '@mui/material/colors'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { TransactionsContext } from '../../../context/TransactionContext'
import * as S from './styles'

const theme = createTheme({
  palette: {
    primary: {
      main: green[400],
    },
  },
})

const newTransactionSchema = z.object({
  date: z.string().refine(
    (date) => {
      const currentDate = new Date()
      const inputDate = new Date(date)
      return inputDate >= new Date(2024, 0, 0) && inputDate <= currentDate
    },
    {
      message:
        'A data deve ser maior ou igual a 01/01/2024 e menor ou igual à data atual',
    },
  ),
  category: z.string().min(1, 'A categoria é obrigatória'),
  value: z.string().min(1, 'O valor é obrigatório'),
})

type TNewTransactionInputs = z.infer<typeof newTransactionSchema>

interface ITransaction {
  id: number
  date: string
  value: string
  category: string
}

interface IFormProps {
  transactionToEdit?: ITransaction | null
  handleCloseModal?: () => void | null
}

export function Form({ transactionToEdit, handleCloseModal }: IFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TNewTransactionInputs>({
    resolver: zodResolver(newTransactionSchema),
  })

  const { createTransaction, updateTransaction } =
    useContext(TransactionsContext)

  const handleCreateTransaction = async (data: TNewTransactionInputs) => {
    if (transactionToEdit) {
      await updateTransaction({ id: transactionToEdit.id, ...data })
    } else {
      await createTransaction(data)
    }

    if (handleCloseModal) {
      handleCloseModal()
    }
    reset()
  }

  return (
    <ThemeProvider theme={theme}>
      <S.ContainerForm>
        {transactionToEdit ? (
          <h2>Editar transação</h2>
        ) : (
          <h2>Adicionar transação</h2>
        )}
        <S.FormNewCategoryController
          onSubmit={handleSubmit(handleCreateTransaction)}
        >
          <TextField
            className="inputField"
            fullWidth
            {...register('category', {
              value: transactionToEdit?.category,
            })}
            label="Categoria"
            error={!!errors.category}
            helperText={errors.category?.message}
            variant="outlined"
            InputProps={{
              style: { color: '#fff', fontSize: '14px' },
            }}
          />

          <div className="doubleInput">
            <TextField
              className="inputField"
              fullWidth
              {...register('value', {
                value: transactionToEdit?.value,
              })}
              type="number"
              label="Valor"
              error={!!errors.value}
              helperText={errors.value?.message}
              variant="outlined"
              InputProps={{
                style: { color: '#fff', fontSize: '14px' },
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoney sx={{ color: '#fff' }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className="inputField"
              {...register('date', {
                value: transactionToEdit?.date,
              })}
              type="date"
              error={!!errors.date}
              helperText={errors.date?.message}
              variant="outlined"
              InputProps={{
                style: { color: '#fff', fontSize: '14px' },
              }}
            />
          </div>

          <Button
            className="confirmButton"
            fullWidth
            size="large"
            variant="contained"
            type="submit"
          >
            Confirmar
          </Button>
        </S.FormNewCategoryController>
      </S.ContainerForm>
    </ThemeProvider>
  )
}
