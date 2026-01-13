import React from 'react'

function Loader() {
  return (
    <div className='flex w-full h-dvh items-center justify-center bg-(--main-color)'>
                                <div className="text-loading">
                            <span data-text-preloader="k" className="letters-loading">
                                k
                            </span>
                            <span data-text-preloader="i" className="letters-loading">
                                i
                            </span>
                            <span data-text-preloader="d" className="letters-loading">
                                d
                            </span>
                            <span data-text-preloader="d" className="letters-loading">
                                d
                            </span>
                            <span data-text-preloader="e" className="letters-loading">
                                e
                            </span>
                            <span data-text-preloader="x" className="letters-loading">
                                x
                            </span>
                        </div>
    </div>
  )
}

export default Loader