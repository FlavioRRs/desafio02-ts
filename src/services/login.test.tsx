import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com "Bem Vindo!"', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo!')
    })
})