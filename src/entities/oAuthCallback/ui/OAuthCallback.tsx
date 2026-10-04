import { useEffect } from "react"

export const OAuthCallback = () => {
  useEffect(() => {
    // Получаем url редиректа
    const url = new URL(window.location.href);

    // Проверяем, есть ли код для получения access и refresh токенов
    const code = url?.searchParams.get("code");

    if (code && window.opener) {
      // Отправляем код в наше приложение
      window.opener.postMessage({ code }, '*')
    }

    window.close();
  }, [])
  return <p>Logging you in...</p>
}