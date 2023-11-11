/* eslint-disable react/prop-types */
const ArrowNext = ({ isDisable }) => (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {
        isDisable
          ? <rect x='1' y='1' width="54" height="54" rx="27" stroke="#17345F" strokeWidth="2" />
          : <rect x='1' y='1' width="54" height="54" rx="27" fill="#17345F" />
      }
      <path d="M28 16L25.885 18.115L34.255 26.5H16V29.5H34.255L25.885 37.885L28 40L40 28L28 16Z" fill={isDisable ? '#17345F' : "white"} />
    </svg>
  )
  
  const ArrowPrev = ({ isDisable }) => (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      {
        isDisable
          ? <rect x='1' y='1' width="54" height="54" rx="27" stroke="#17345F" strokeWidth="2" />
          : <rect x='1' y='1' width="54" height="54" rx="27" fill="#17345F" />
      }
      <path d="M40 26.5H21.745L30.13 18.115L28 16L16 28L28 40L30.115 37.885L21.745 29.5H40V26.5Z" fill={isDisable ? '#17345F' : "white"} />
    </svg>
  )
  
  export {
    ArrowNext,
    ArrowPrev
  }