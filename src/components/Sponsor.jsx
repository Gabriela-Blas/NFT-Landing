import React from 'react'

const Sponsor = () => {
  return (
    <section className='flex flex-wrap gap-2 md:gap-6 justify-center w-full max-w-screen-lg px-2'>
                <div className='w-1/3 md:w-1/6'>
                    <img className='' src='img/logo_metamask.png' />
                </div>
                <div className='w-1/3 md:w-1/6'>
                    <img className='' src='img/logo_bitgo.png' />
                </div>
                <div className='w-1/3 md:w-1/6'>
                    <img className='' src='img/logo_coinbase.png' />
                </div>
                <div className='w-1/3 md:w-1/6'>
                    <img className='' src='img/logo_exodus.png' />
                </div>
                <div className='w-1/3 md:w-1/6'>
                    <img className='' src='img/logo_wallet.png' />
                </div>
            </section>
  )
}

export default Sponsor