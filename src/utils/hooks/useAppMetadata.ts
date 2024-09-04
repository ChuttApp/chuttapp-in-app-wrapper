interface AppStyles {
    safeArea: {
      bottom: number;
      top: number;
    }
}
interface AppMetadata {
  styles?: AppStyles
}

export function useAppMetadata(): AppMetadata {
  return JSON.parse((window as any).ReactNativeWebView?.injectedObjectJson?.() || 'null') || {};
}


export function useAppStyles(): AppStyles {
  const {styles} = useAppMetadata()
  return styles || {} as any
}
