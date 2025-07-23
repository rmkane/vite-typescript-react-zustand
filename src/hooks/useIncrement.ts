import { useCounterStore } from '@store/counterStore'

const useIncrement = () => useCounterStore((state) => state.increment)

export default useIncrement
