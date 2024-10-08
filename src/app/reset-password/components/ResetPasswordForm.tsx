import InputPassword from "@/app/components/InputPassword";
import { Dispatch, SetStateAction, useState } from "react"


export default function ResetPasswordForm({ setPasswordSuccess } : { setPasswordSuccess: Dispatch<SetStateAction<boolean>> })
{
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 6) {
      setPasswordError("A senha deve ter no mínimo 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("As senhas não correspondem.");
      return;
    }

    setPasswordError("");
    setPasswordSuccess(true);
  };

  return (
    <>
      <div className="bg-gray-200 p-4 md:p-8 text-xs rounded-2xl shadow-lg max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Redefinir Senha</h2>
        <p className="mb-4 text-center text-sm">Redefina sua senha com no mínimo 6 caracteres</p>
        <form>
          <div className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-gray-700">Senha <span className="text-red-600">*</span></label>
              <InputPassword password={password} setPassword={setPassword} passwordError={passwordError} placeholder="Digite sua nova senha"/>
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-gray-700">Confirme sua senha <span className="text-red-600">*</span></label>
              <InputPassword setPassword={setConfirmPassword} password={confirmPassword} passwordError={passwordError} placeholder="Repita sua nova senha"  />
            </div>
            {passwordError && <p className="mt-2 text-red-500">{passwordError}</p>}
            <div className="mb-4">
              <p>Crie uma senha segura</p>
              <ul className="list-disc list-inside mt-3">
                <li>Use letras maiúsculas e minúsculas, símbolos e números</li>
                <li>Não use informações pessoais como datas de aniversário</li>
                <li>Não use uma senha igual a anterior</li>
              </ul>
            </div>
          </div>
        
        </form>
      </div>

      <div className="flex justify-center mt-6">
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full py-2 px-4 bg-orange-600 text-white rounded-2xl shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Redefinir Senha
        </button>
      </div>
    </>
  )
}