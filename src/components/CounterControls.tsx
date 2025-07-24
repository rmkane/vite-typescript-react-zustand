import { useActions } from '@store/counterStore'

export default function CounterControls() {
  const { increment, decrement } = useActions()

  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={decrement}
        className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 mr-4"
      >
        -1
      </button>
      <button
        onClick={increment}
        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
      >
        +1
      </button>
    </div>
  )
}
