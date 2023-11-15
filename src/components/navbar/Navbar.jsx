"use client"
 
import Link from 'next/link';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure } from '@chakra-ui/react';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Abstraction achieved through custom Hook

  return (
    <>
      <Button onClick={onOpen}  className="btn btn-1" style={{backgroundColor:'#7928CA' , margin:'12px' ,   color:'black', width:'30px',display:'flex' , flexDirection:'column'}}>
       <div id="nav-menu">
       <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
       </div>
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link href="/">Home</Link>
              <Link href="/posts">Posts</Link>
              <Link href="/dashboard">Dashboard (SSR)</Link>
              <Link href="/login">CSR</Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Existing Navbar Links (Can be hidden or kept as per design choice) */}
      <div className='navbar' style={{ display: 'flex', gap: '20px' , border:'2px solid black', borderWidth:'auto' ,fontWeight:'bold' , fontSize:'30px' }}>
        <Link href="/" style={{marginLeft:'30%'}}>Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/dashboard">Dashboard (SSR)</Link>
        <Link href="/login">CSR</Link>
      </div>
    </>
  );
}
