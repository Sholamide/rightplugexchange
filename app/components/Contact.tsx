'use client'

const Contact = () => {

    const handleWhatsAppButtonClick = () => {
        const phoneNumber = '+2348132206437';
        const message = encodeURIComponent('I want to sell my gift card or bitcoin.');
      
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');
      };

  return (
    <div onClick={handleWhatsAppButtonClick} className='absolute animate-bounce bottom-20 right-6'>
        <div className='rounded-full bg-green p-4'>
            
                <img src="/whatsapp.svg" alt="whatsapp-icon" className='w-12 h-12' />
        </div>
    </div>
  )
}

export default Contact