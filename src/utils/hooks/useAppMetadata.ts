interface AppMetadata {
  styles: {
    safeArea: {
      bottom: number;
      top: number;
    }
  }
}

export function useAppMetadata(): AppMetadata {
  return JSON.parse((window as any).ReactNativeWebView?.injectedObjectJson?.());
}
