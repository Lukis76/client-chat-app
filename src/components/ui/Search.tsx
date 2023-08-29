"use client"

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Button, Input, Kbd, Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react'
import { FC } from 'react'
import { CardLastMessage } from './CardLastMessage'
import { CardName } from './CardName'
import { CardRoom } from './CardRoom'

interface SearchProps {}

export const Search: FC<SearchProps> = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return (
        <>
            <div className='bg-default-100/50 p-2 rounded-medium w-full max-w-lg'>
                <Button variant='flat' className='w-full flex flex-row items-center justify-between bg-default-300/50' onClick={onOpen}>
                    <div className='flex flex-row w-full items-center justify-start'>
                        <MagnifyingGlassIcon className='h-6 w-6' />
                        <p className='truncate'>Quick Search...</p>
                    </div>
                    <Kbd className='bg-background' keys={['command', 'ctrl']}>
                        K
                    </Kbd>
                </Button>
            </div>

            <Modal backdrop={'blur'} isOpen={isOpen} onOpenChange={onOpenChange} placement='top'>
                <ModalContent className='w-full max-w-2xl'>
                    {(onClose) => (
                        <>
                            <ModalHeader className='flex flex-col gap-1 text-lg font-medium'>Search room</ModalHeader>
                            <ModalBody>
                                <form
                                    className='
                                            shadow-xl 
                                            bg-default-200/50 
                                            dark:bg-default-300/50 
                                            backdrop-blur-xl 
                                            backdrop-saturate-200 
                                            hover:bg-default-200/70 
                                            dark:hover:bg-default/70 
                                            group-data-[focused=true]:bg-default-200/50 
                                            dark:group-data-[focused=true]:bg-default-100/50  
                                            !cursor-text 
                                            mb-4 
                                            rounded-medium'
                                >
                                    <Input
                                        radius='lg'
                                        variant='flat'
                                        classNames={{
                                            input: [
                                                'text-lg',
                                                'dark:bg-transparent',
                                                'text-black/90 dark:text-white/90',
                                                'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                                            ],
                                            inputWrapper: [
                                                '1',
                                                'dark:bg-transparent',
                                                'focus:bg-blue-500',
                                                'active:bg-blue-500',
                                                'focus-within:bg-blue-500',
                                                'group-data-[focus=true]:bg-default-300/50',
                                                'group-data-[focus=true]:rounded-none',
                                                'group-data-[focus=true]:rounded-t-lg',
                                            ],
                                            innerWrapper: ['dark:bg-transparent'],
                                            mainWrapper: ['dark:bg-transparent'],
                                            base: ['dark:bg-transparent'],
                                        }}
                                        placeholder='Type to search...'
                                        startContent={
                                            <button className='text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0'>
                                                <MagnifyingGlassIcon className='h-6 w-6' />
                                            </button>
                                        }
                                    />
                                    <div className='flex flex-col w-full max-h-96 p-1 bg-transparent'>
                                        <CardRoom image='https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg'>
                                            <CardName name='John Doe' time='11:30' />
                                            <CardLastMessage message='Lorem ipsum dolor sit amet, consectetur elit.' count={5} />
                                        </CardRoom>
                                    </div>
                                </form>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
