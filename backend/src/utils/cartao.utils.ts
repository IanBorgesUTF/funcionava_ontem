// Gera um CVV de 3 dígitos (100-999)
export const generateCVV = (): string => {
    return (Math.floor(Math.random() * 900) + 100).toString();
};

// Gera um número de cartão de 16 dígitos
export const generateCardNumber = (): string => {
    let cardNumber = '';
    for (let i = 0; i < 16; i++) {
        cardNumber += Math.floor(Math.random() * 10).toString();
    }
    return cardNumber;
};