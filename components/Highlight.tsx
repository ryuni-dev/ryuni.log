'use client'

const Highlight = ({ children }) => {
  return (
    <span
      style={{
        backgroundColor: '#00D959',
        color: '#000000',
        padding: '0.2rem',
        fontWeight: 'bold',
      }}
    >
      {children}
    </span>
  )
}

export default Highlight
