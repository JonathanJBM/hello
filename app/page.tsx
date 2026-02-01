'use client'

import { useState } from 'react'

export default function Home() {
  const [step, setStep] = useState<'login' | 'message1' | 'message2'>('login')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const normalize = (text: string) =>
    text
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')

  const checkPassword = () => {
    if (normalize(password) === 'sandia') {
      setError(false)
      setStep('message1')
    } else {
      setError(true)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-300 to-pink-100 text-center px-4">
      <div className="bg-white/90 p-10 rounded-3xl shadow-2xl max-w-2xl w-full">
        {step === 'login' && (
          <>
            <h1 className="text-3xl mb-4">🔒 Mensaje secreto</h1>
            <p>Ingresa la clave para continuar</p>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-6 w-full rounded-xl border px-4 py-3 text-lg"
              placeholder="Clave secreta"
            />

            <button
              onClick={checkPassword}
              className="mt-6 px-8 py-3 rounded-full bg-pink-500 text-white text-lg hover:scale-105 transition"
            >
              Entrar
            </button>

            {error && (
              <p className="mt-4 text-red-500">Clave incorrecta 💔</p>
            )}
          </>
        )}

        {step === 'message1' && (
          <>
            <p className="text-lg leading-relaxed">
              Estás semanas han sido muy bonitas, ha sido un completo placer haberte conocido.
              Conoci una chica trabajadora, respetuosa, agradable y además hermosa, te prometo que pensé que estaba soñando.
              Iniciar una relación más formal, creo que es el siguiente paso y estoy tan feliz de finalmente darlo y quisiera preguntarte lo siguiente...
            </p>

            <button
              onClick={() => setStep('message2')}
              className="mt-8 text-3xl px-6 py-3 rounded-full bg-pink-500 text-white hover:scale-110 transition"
            >
              →
            </button>
          </>
        )}

        {step === 'message2' && (
          <>
            <h1 className="text-4xl mb-6">💖</h1>
            <p className="text-2xl">
              Valeria, mi bella princesa,
              <br /><br />
              ¿Quieres ser mi novia?
            </p>
          </>
        )}
      </div>
    </main>
  )
}
