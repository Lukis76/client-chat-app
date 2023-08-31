'use client'

import { faker } from '@faker-js/faker'
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/solid'
import { Avatar, Button, Chip, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import { SearchMember } from './search-member'

export const AddRoom = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className='flex flex-row items-center justify-between w-full dark:bg-default-100/50 pl-4 py-2 pr-2 rounded-medium'>
      <div>
        <p className='text-small text-balance'>create a chat room to share your experiences with your friends</p>
      </div>

      <Button
        variant='flat'
        className='rounded-medium hover:opacity-100 opacity-disabled min-w-0 p-0 h-unit-2xl w-unit-3xl dark:bg-default-400/50'
        onPress={onOpen}
      >
        <PlusIcon className='h-10 w-10' />
      </Button>
      <Modal
        backdrop='opaque'
        isOpen={isOpen}
        placement='top'
        size='3xl'
        onOpenChange={onOpenChange}
        className='min-h-[60%]'
        classNames={{
          backdrop: 'bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>Create new room</ModalHeader>
              <ModalBody >
                <div className='flex flex-row gap-8 items-center '>
                  <Input
                    label='Name room'
                    isClearable
                    radius='lg'
                    classNames={{
                      label: 'text-black/50 dark:text-white/90',
                      input: [
                        'bg-transparent',
                        'text-black/90 dark:text-white/90',
                        'placeholder:text-default-700/50 dark:placeholder:text-white/60',
                      ],
                      innerWrapper: 'bg-transparent',
                      inputWrapper: [
                        'shadow-xl',
                        'bg-default-200/50',
                        'dark:bg-default/60',
                        'backdrop-blur-xl',
                        'backdrop-saturate-200',
                        'hover:bg-default-200/70',
                        'dark:hover:bg-default/70',
                        'group-data-[focused=true]:bg-default-200/50',
                        'dark:group-data-[focused=true]:bg-default/60',
                        '!cursor-text',
                      ],
                    }}
                    placeholder='Enter name room'
                    // value={value}
                    // onValueChange={setValue}
                  />
                  <SearchMember />
                    
                </div>
                <div
                  className=' max-h-60 overflow-hidden overflow-y-auto rounded-2xl px-3 py-2
                shadow-xl 
                bg-default-200/50 
                dark:bg-default/60 
                backdrop-blur-xl 
                backdrop-saturate-200 
                hover:bg-default-200/70 
                dark:hover:bg-default/70 
                group-data-[focused=true]:bg-default-200/50 
                dark:group-data-[focused=true]:bg-default/60 
                !cursor-text 
                '
                >
                    <p className='text-black/50 dark:text-white/90 text-tiny font-medium  pb-2'>Members</p>
                  <div className='flex flex-row flex-wrap gap-2'>
                    <Chip
                      variant='bordered'
                      classNames={{
                        closeButton: [
                          'text-red-500/80',
                          'dark:text-red-300/80'
                        ]
                      }}
                      avatar={<Avatar name={faker.person.prefix()} src={ faker.image.avatarGitHub()} />}
                      onClose={() => console.log('close chip')}
                    >
                      {faker.person.firstName()}
                    </Chip>
                    <Chip
                      variant='bordered'
                      classNames={{
                        closeButton: [
                          'text-red-500/80',
                          'dark:text-red-300/80'
                        ]
                      }}
                      avatar={<Avatar name={faker.person.prefix()} src={ faker.image.avatarGitHub()} />}
                      onClose={() => console.log('close chip')}
                    >
                      {faker.person.firstName()}
                    </Chip>
                    <Chip
                      variant='bordered'
                      classNames={{
                        closeButton: [
                          'text-red-500/80',
                          'dark:text-red-300/80'
                        ]
                      }}
                      avatar={<Avatar name={faker.person.prefix()} src={ faker.image.avatarGitHub()} />}
                      onClose={() => console.log('close chip')}
                    >
                      {faker.person.firstName()}
                    </Chip>
                    
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
                <Button color='primary' onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
