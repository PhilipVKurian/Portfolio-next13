import React, { Children } from 'react'
import {techStackNames, experienceLevel} from '../constants/techStackConstants'

export default function SkillsToolTip(props:any) {
  return (    
    <span className='toolTipContainer relative w-[108px] h-[108px]'>

        <span className='toolTip absolute left-[10%] right-[50%]'>
            <p className='absolute bottom-4 text-center'>{techStackNames[props.children.props.index]}</p>
            <p className='absolute text-center'>{experienceLevel[props.children.props.index]}</p>
        </span>

        {props.children}        

    </span>
  )
}
