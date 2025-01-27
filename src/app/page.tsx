'use client';

import { useState } from 'react';
import { Button, Modal as BaseModal, ModalProps } from '@mui/base';
import { SpaceAnimation } from './SpaceAnimation';
import Image from 'next/image';

const Modal = (props: ModalProps) => (
  <BaseModal
    {...props}
    onClick={() => props.onClose && props.onClose({}, 'backdropClick')}
  >
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#AC0E3EDD] rounded-lg shadow-xl p-4 w-3/4 h-3/4">
        Hi
      </div>
    </div>
  </BaseModal>
);

export default function Home() {
  const [open, setOpen] = useState(true);
  const [openPage, setOpenPage] = useState('');

  const handleClose = () => {
    setOpen(false);
    setOpenPage('');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="fixed w-screen h-screen top-0 left-0"
        onClick={handleClose}
      >
        <SpaceAnimation
          centerScale={open ? 0 : 1}
          backdropScale={openPage === 'about' ? 1 : 0}
          moveRate={0.02}
        />
      </div>
      {/*
      <Button
        onClick={() => {
          setOpen(true);
          setOpenPage('about');
        }}
        className="fixed text-2xl transition-transform duration-500"
        style={{
          left: 'calc(50% + 58vh)',
          top: 'calc(50% - 15vh)',
          transform: `translate(-50%, -50%) scale(${open ? '0%' : '100%'})`,
          textShadow: 'black 0px 0 20px, black 0px 0 30px, black 0px 0px 10px'
        }}
      >
        me
      </Button>
      <Button
        onClick={() => {
          setOpen(true);
          setOpenPage('asd');
        }}
        className="fixed text-2xl transition-transform duration-500"
        style={{
          left: 'calc(50% - 58vh)',
          top: 'calc(50% - 15vh)',
          transform: `translate(-50%, -50%) scale(${open ? '0%' : '100%'})`,
          textShadow: 'black 0px 0 20px, black 0px 0 30px, black 0px 0px 10px'
        }}
      >
        projects
      </Button>
      */}
      <div
        className="fixed left-[50%] top-[50%] flex flex-col items-center w-max"
        style={{
          transform: `translate(-50%, -50%)`
        }}
      >
        <div className="flex items-center gap-[100px]">
          <div className="flex flex-col gap-[100px] w-[150px] items-center">
            <Button
              onClick={() => {
                setOpen(true);
                setOpenPage('about');
              }}
              className="text-2xl"
              style={{
                textShadow:
                  'black 0px 0 20px, black 0px 0 30px, black 0px 0px 10px'
              }}
            >
              about
            </Button>
            <Button
              onClick={() => {
                setOpen(true);
                setOpenPage('asd');
              }}
              className="text-2xl"
              style={{
                textShadow:
                  'black 0px 0 20px, black 0px 0 30px, black 0px 0px 10px'
              }}
            >
              projects
            </Button>
          </div>
          <img
            alt=""
            src="/img/me3.gif"
            style={{
              height: '48vh',
              width: '48vh',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow:
                '#AC0E3E 0px 0 20px, #AC0E3E 0px 0 30px, purple 0px 0px 10px'
            }}
          />
          <div className="flex flex-col gap-[100px] w-[150px] items-center">
            <Button
              onClick={() => {
                setOpen(true);
                setOpenPage('asd');
              }}
              className="text-2xl"
              style={{
                textShadow:
                  'black 0px 0 20px, black 0px 0 30px, black 0px 0px 10px'
              }}
            >
              blog
            </Button>
            <Button
              onClick={() => {
                setOpen(true);
                setOpenPage('asd');
              }}
              className="text-2xl"
              style={{
                textShadow:
                  'black 0px 0 20px, black 0px 0 30px, black 0px 0px 10px'
              }}
            >
              music
            </Button>
          </div>
        </div>
        <div
          className="mt-8 text-6xl leading-tight text-center pointer-events-none"
          style={{
            textShadow:
              '#AC0E3E 0px 0 20px, #AC0E3E 0px 0 30px, purple 0px 0px 10px'
          }}
        >
          Evan
          <br />
          Thompson
        </div>
      </div>
      <div
        className="fixed left-[50%] top-[50%] text-8xl pointer-events-none transition-transform duration-500"
        style={{
          transform: `translate(-50%, -50%) scale(${
            openPage === 'about' ? '100%' : '0%'
          })`
        }}
      ></div>
      <Modal open={open && openPage !== 'about'} onClose={handleClose}>
        <div>test</div>
      </Modal>
    </main>
  );
}
