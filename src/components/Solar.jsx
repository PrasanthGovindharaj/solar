import React from 'react'
import './Solar.css'

const Solar = () => {
  return (
    <>
        <div class="orbit neptune-orbit">
            <div class="planet neptune"></div>
        </div>
        <div class="orbit uranus-orbit">
            <div class="planet uranus"></div>
        </div>
        <div class="orbit saturn-orbit">
            <div class="planet saturn"></div>
        </div>
        <div class="orbit jupiter-orbit">
            <div class="planet jupiter"></div>
        </div>
        <div class="orbit mars-orbit">
            <div class="planet mars"></div>
        </div>
        <div class="orbit earth-orbit">
            <div class="planet earth"></div>
        </div>
        <div class="orbit venus-orbit">
            <div class="planet venus"></div>
        </div>
        <div class="orbit mercury-orbit">
            <div class="planet mercury"></div>
        </div>
        <div class="planet sun"></div>
    </>
  )
}

export default Solar