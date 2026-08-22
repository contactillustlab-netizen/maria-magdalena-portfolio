import { useState } from 'react';
import { Send, X } from 'lucide-react';
import LogoMark from './icons/LogoMark';
import WhatsAppIcon from './icons/WhatsAppIcon';
import { useMountTransition } from '../lib/useMountTransition';

const WHATSAPP_NUMBER = '40751170738';

function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const { mounted, visible } = useMountTransition(open);
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(trimmed)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setMessage('');
    setOpen(false);
  };

  return (
    <>
      {mounted ? (
        <div className={`whatsapp-widget__panel${visible ? ' is-open' : ''}`} role="dialog" aria-label="WhatsApp chat">
          <div className="whatsapp-widget__header">
            <span className="whatsapp-widget__avatar"><LogoMark size={22} /></span>
            <div className="whatsapp-widget__header-text">
              <p className="whatsapp-widget__name">Magda</p>
              <p className="whatsapp-widget__status">Usually replies within a day</p>
            </div>
            <button type="button" className="whatsapp-widget__close" onClick={() => setOpen(false)} aria-label="Close chat">
              <X size={18} />
            </button>
          </div>
          <div className="whatsapp-widget__body">
            <p className="whatsapp-widget__bubble">Hi, I’m Magda! Send me a message here and I’ll get back to you personally.</p>
          </div>
          <form className="whatsapp-widget__form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Type a message..."
              aria-label="Message"
              autoFocus
            />
            <button type="submit" className="whatsapp-widget__send" aria-label="Send on WhatsApp">
              <Send size={18} />
            </button>
          </form>
        </div>
      ) : null}
      <button
        type="button"
        className="whatsapp-widget__toggle"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? 'Close WhatsApp chat' : 'Chat on WhatsApp'}
      >
        <WhatsAppIcon size={28} />
      </button>
    </>
  );
}

export default WhatsAppWidget;
