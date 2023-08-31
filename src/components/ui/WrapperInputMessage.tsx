'use Client'

import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { Button, Textarea } from '@nextui-org/react'
import { FormEvent, useRef, useState } from 'react'
import { PikerEmoji } from './PikerEmoji'

export const WrapperInputMessage = () => {
    const [value, setValue] = useState('');
    console.log("🚀 ~ file: WrapperInputMessage.tsx:11 ~ WrapperInputMessage ~ value:", value)
    const inputRef = useRef<any>()

    

    function handleEmojiClick(emoji: string) {
        const input: any = inputRef.current
    
        if (input) {
          const selectionStart = input.selectionStart;
          const selectionEnd = input.selectionEnd;
    
          setValue(
            value.substring(0, selectionStart) +
              emoji +
              value.substring(selectionEnd)
          );
    
          // Move the cursor to the end of the inserted emoji
          input.selectionStart = input.selectionEnd = selectionStart + 1;
        }
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setValue('')
        inputRef.current.focus()
    }
    
    

    return (
        <div className=' w-full absolute bottom-1 px-20 z-10'>
            <form className='flex justify-center items-center w-full relative'
                onSubmit={handleSubmit}
            >
                <PikerEmoji onEmojiSelect={handleEmojiClick } />
                <Textarea
                    ref={inputRef}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder='Enter your message...'
                    // {...method.register('message')}
                    fullWidth={true}
                    classNames={{
                        innerWrapper: ['1'],
                        input: ['2', 'overflow-hidden'],
                        inputWrapper: ['px-14', 'py-2'],
                        mainWrapper: ['4'],
                    }}
                    minRows={1}
                    maxRows={4}
                />
                <Button
                    type='submit'
                    variant='flat'
                    className='absolute right-2 z-10 flex justify-center items-center p-0 rounded-medium min-w-0 min-h-0 h-unit-9 w-unit-11 bg-default-300/80'
                >
                    <PaperAirplaneIcon className='text-default-foreground/50' />
                </Button>
            </form>
        </div>
    )
}
