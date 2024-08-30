import { FiUsers,  } from 'react-icons/fi'
import { GoHome } from 'react-icons/go'


const s = 18;
const c = "var(--gray100)"

export const IconHome = ({ color = c, size = s }) => <GoHome color={color} size={size} />
export const IconAccounts = ({ color = c, size = s }) => <FiUsers color={color} size={size} />
export const IconBack = ({ color = c, size = s }) => <FiUsers color={color} size={size} />
