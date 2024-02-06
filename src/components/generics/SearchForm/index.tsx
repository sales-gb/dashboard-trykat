import { Search } from '@mui/icons-material'
import {
  Button,
  createTheme,
  InputAdornment,
  TextField,
  ThemeProvider,
} from '@mui/material'
import { green } from '@mui/material/colors'
import { useContext, useState } from 'react'

import { TransactionsContext } from '../../../context/TransactionContext'
import * as S from './styles'

const theme = createTheme({
  palette: {
    primary: {
      main: green[400],
    },
  },
})

export function SearchForm() {
  const { transactions, setTransactions, fetchTransactions } =
    useContext(TransactionsContext)
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
    if (event.target.value === '') {
      fetchTransactions()
    } else {
      const filteredTransactions = transactions.filter((transaction) =>
        Object.values(transaction).some((value) =>
          value
            .toString()
            .toLowerCase()
            .includes(event.target.value.toLowerCase()),
        ),
      )
      setTransactions(filteredTransactions)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <S.SearchFormContainer>
        <TextField
          value={searchQuery}
          onChange={handleSearch}
          label="Pesquisar"
          variant="standard"
          fullWidth
          InputProps={{
            style: {
              color: '#E1E1E6',
              fontSize: '14px',
            },
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: '#E1E1E6' }} />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            style: { color: '#E1E1E6' },
          }}
        />

        <Button
          className="confirmButton"
          variant="contained"
          type="button"
          startIcon={<Search sx={{ color: '#202024' }} />}
        />
      </S.SearchFormContainer>
    </ThemeProvider>
  )
}
