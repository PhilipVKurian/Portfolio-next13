import React, { Children } from 'react'
import {techStackNames, experienceLevel} from '../constants/techStackConstants'

export default function SkillsToolTip(props:any) {

  if(props.children.props.index == undefined){

    return(
      <span className='toolTipContainer toolTipBottom relative md:w-[108px] md:h-[108px] sm:w-[90px] sm:h-[90px]'>

        <span className='toolTip absolute left-[10%] right-[50%] mb-10'>
            <p className='absolute bottom-4 text-center'>{techStackNames[props.index]}</p>
            <p className='absolute text-center'>{experienceLevel[props.index]}</p>
        </span>

        {props.children}       

      </span>

    )  
  }

  return (    
    <span className='toolTipContainer relative md:w-[108px] md:h-[108px] sm:w-[90px] sm:h-[90px]'>

        <span className='toolTip absolute left-[10%] right-[50%]'>
            <p className='absolute bottom-4 text-center'>{techStackNames[props.children.props.index]}</p>
            <p className='absolute text-center'>{experienceLevel[props.children.props.index]}</p>
        </span>

        {props.children}        

    </span>
  )
}
