'use client';

import { useState } from 'react';
import { Button, Modal as BaseModal, ModalProps } from '@mui/base';
import { SpaceAnimation } from './SpaceAnimation';

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="fixed w-screen h-screen top-0 left-0">
        <SpaceAnimation targetScale={open ? 0 : 1} moveRate={0.02} />
      </div>
      <Button
        onClick={() => setOpen(true)}
        className="fixed text-2xl transition-transform duration-500"
        style={{
          left: 'calc(50% - 58vh)',
          top: 'calc(50% - 15vh)',
          transform: `translate(-50%, -50%) scale(${open ? '0%' : '100%'})`
        }}
      >
        projects
      </Button>
      <div
        className="fixed left-[50%] top-[50%] text-8xl leading-tight text-center pointer-events-none transition-transform duration-500"
        style={{
          transform: `translate(-50%, -50%) scale(${open ? '0%' : '100%'})`,
          textShadow:
            '#AC0E3E 0px 0 20px, #AC0E3E 0px 0 30px, purple 0px 0px 10px'
        }}
      >
        Evan <br />
        Thompson
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div>test</div>
      </Modal>
    </main>
  );
}
