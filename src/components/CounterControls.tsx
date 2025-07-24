import { useActions } from '@store/counterStore'

export default function CounterControls() {
  const { increment, decrement } = useActions()

  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={decrement}
        className="mr-4 transform rounded-lg bg-red-500 px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-red-600 hover:shadow-lg active:scale-95"
      >
        -1
      </button>
      <button
        onClick={increment}
        className="transform rounded-lg bg-green-500 px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-green-600 hover:shadow-lg active:scale-95"
      >
        +1
      </button>
    </div>
  )
}
