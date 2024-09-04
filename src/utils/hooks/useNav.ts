import { generatePath, useNavigate, useParams } from "react-router-dom"

export function useNav() {
    const navigate = useNavigate();
    const params = useParams()
  return {
    params,
    goBack: () => navigate(-1),
    navigate,
    generatePath
  }
}
