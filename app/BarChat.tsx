"use client"
import React from 'react'
import { Card } from '@radix-ui/themes'
import {ResponsiveContainer,Bar,BarChart,XAxis,YAxis} from 'recharts'
interface Props{
    open:number,
    closed:number,
    inProgress:number
}


const BarChat = ({closed,open,inProgress}:Props) => {
    const data=[{label:"Open",value:open},
        {label:"In-Progress",value:inProgress},
        {label:"Closed",value:closed}
    ]
  return (
    <div>
        <Card>
            <ResponsiveContainer width={"100%"} height={300}>
                <BarChart data={data}>
                    <XAxis dataKey={"label"}></XAxis>
                    <YAxis/>
                    <Bar barSize={60} dataKey={"value"} style={{fill:'var(--accent-9)'}}/>
                </BarChart>
            </ResponsiveContainer>
        </Card>
      
    </div>
  )
}

export default BarChat
