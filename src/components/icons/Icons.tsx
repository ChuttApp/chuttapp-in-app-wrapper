import { FiUsers,  } from 'react-icons/fi'
import { GoHome } from 'react-icons/go'


const s = 18;
const c = "var(--gray100)"

export const IconHome = ({ color = c, size = s }) => <GoHome color={color} size={size} />
export const IconAccounts = ({ color = c, size = s }) => <FiUsers color={color} size={size} />
export const IconBack = ({ color = c, size = s }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} color={color} fill={"none"}>
      <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );