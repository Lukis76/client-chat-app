'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Input, Spinner } from '@nextui-org/react'
import { ChangeEvent, useState } from 'react'
import { cn } from '../../lib/utils'

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min
}

async function getSEarchResults(query: string) {
  await wait(getRandom(100, 5000))

  return Array.from({ length: 5 }, (_, i) => ({
    id: i,
    name: `${query} ${i}`,
  }))
}

export const SearchMember = () => {
  const [text, setText] = useState<string>('')
  const [showResults, setShowResults] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(-1)
  const [results, setResults] = useState<{ [key: string]: { results: Array<{ id: number; name: string }>; loading: boolean } }>({})

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setText(query)

    if (!query || results[query]) return
    setResults((prev) => ({ ...prev, [query]: { results: [], loading: true } }))
    const newResults = await getSEarchResults(query)
    setResults((prev) => ({ ...prev, [query]: { results: newResults, loading: false } }))
    console.log(newResults)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const currentResults = results[text]?.results
    if (e.code === 'ArrowDown') {
      setCurrentIdx((prev) => Math.min(prev + 1, currentResults.length - 1))
    } else if (e.code === 'ArrowUp') {
      setCurrentIdx((prev) => Math.max(prev - 1, 0))
    } else if (e.code === 'Enter') {
      const newText = currentResults[currentIdx]
      setText(newText?.name)
      setShowResults(false)
      setCurrentIdx(-1)
    }
  }

  const resultsForQuery = results[text]?.results ?? []
  const isLoading = results[text]?.loading ?? false

  return (
    <div className={cn('relative w-full bg-default-200/50 dark:bg-default/60', text && showResults ? 'rounded-t-large' : 'rounded-large')}>
      <Input
        label='Search members'
        value={text}
        onChange={handleChange}
        onFocus={() => setShowResults(true)}
        onBlur={() => setTimeout(() => setShowResults(false), 500)}
        onKeyDown={handleKeyDown}
        autoComplete={'off'}
        classNames={{
          label: 'text-black/50 dark:text-white/90',
          input: cn('bg-transparent text-black/90 dark:text-white/90 placeholder:text-default-700/50 dark:placeholder:text-white/60'),
          mainWrapper: cn(
            'shadow-xl bg-default-200/50 dark:bg-default/60 backdrop-blur-xl backdrop-saturate-200  group-data-[focused=true]:bg-default-200/50 dark:group-data-[focused=true]:bg-default/60 !cursor-text rounded-none z-40 ',
            showResults ? 'rounded-t-large' : 'rounded-large'
          ),
        }}
        placeholder='Type to search...'
        startContent={
          <MagnifyingGlassIcon className='text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0 h-5 w-5' />
        }
      />
      {showResults && (
        <ul
          className={cn(
            'max-h-96 w-full absolute z-10 space-y-2 shadow-xl bg-default-200/50 dark:bg-default/60 backdrop-blur-xl backdrop-saturate-200  group-data-[focused=true]:bg-default-200/50 dark:group-data-[focused=true]:bg-default/60  rounded-b-large',
            !!text.length && 'border-default-300 border-t-1 py-2'
          )}
        >
          {showResults && isLoading && <Spinner size='sm' />}

          {resultsForQuery.map((result: { id: number; name: string }, idx: number) => (
            <li
              key={result.id}
              className={cn('py-2 px-4 rounded-medium ', currentIdx === idx ? 'bg-primary-500/80' : 'bg-primary-500/30')}
              onClick={() => setText(result.name)}
            >
              {result.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
