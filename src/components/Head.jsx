import React from 'react'

export default function Head(Props) {
  return (
    <div>
      <div className="text-center my-3 py-4">
        <h2 className={`text-${Props.color} font-weight-bold`}>{Props.title}</h2>
        <p className={`py-2 text-${Props.text} letter-spacing`}>{Props.des}</p>
      </div>
    </div>
  )
}
Head.deafaultProps = {
  color: 'warning',
  category: 'light'

}

