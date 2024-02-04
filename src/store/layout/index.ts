import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type StateProps = {
  isOpen: boolean
}

type ActionsProps = {
  setOpen: (value: boolean) => void
}

export const useLayoutStore = create(
  persist<StateProps & ActionsProps>(
    (set) => ({
      isOpen: true,
      setOpen: (value) => set(() => ({ isOpen: value })),
    }),
    {
      name: 'layout-store',
    },
  ),
)
