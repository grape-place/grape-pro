import { useEffect, useRef } from 'react'
import Icon from './Icon'

export default function ContactDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if (open && !dialog.current?.open) dialog.current?.showModal()
    if (!open && dialog.current?.open) dialog.current.close()
  }, [open])

  return <dialog ref={dialog} className="contact-dialog" aria-labelledby="contact-heading" aria-describedby="contact-description" onClose={onClose} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close() }}>
    <div className="dialog-content">
      <button className="dialog-close" type="button" aria-label="Close contact" onClick={() => dialog.current?.close()}><Icon name="close" /></button>
      <p className="eyebrow">Get in touch</p>
      <h2 id="contact-heading">Contact Grape</h2>
      <p id="contact-description">Our contact form is coming soon.</p>
      <button className="button" type="button" onClick={() => dialog.current?.close()}>Back to Grape <Icon name="arrow" /></button>
    </div>
  </dialog>
}
