import { FC } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export const Menu = () => {
  return (
    <div className='bg-default-100/50 p-2 rounded-medium'>
      <Dropdown>
      <DropdownTrigger>
        <Button 
            variant="flat"
          className='p-0 w-10 h-10 min-w-0 bg-default-300/50'  
        >
          <Bars3Icon className='h-6 w-6'/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Action event example" 
        onAction={(key) => alert(key)}
      >
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>


    </div>
  )
}