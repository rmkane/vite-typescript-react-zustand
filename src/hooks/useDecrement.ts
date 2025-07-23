import { useCounterStore } from '@store/counterStore'

const useDecrement = () => useCounterStore((state) => state.decrement)

export default useDecrement
