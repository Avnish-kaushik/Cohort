import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatDate = (date) => {
    
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const dayName = days[date.getDay()]
    const monthName = months[date.getMonth()]
    const day = date.getDate()

    let hours = date.getHours()
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hours = hours % 12
    hours = hours ? hours : 12

    return `${dayName} ${monthName} ${day} ${hours}:${minutes} ${ampm}`
  }

  return (
    <p>{formatDate(now)}</p>
  )
}

export default DateTime