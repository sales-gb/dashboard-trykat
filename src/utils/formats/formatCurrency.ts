export const maskCurrency = (
  value: number | null | undefined | string,
): string => {
  if (!value) return 'R$ 0,00'

  const masked = Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return masked
}
